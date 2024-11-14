// Typing effect
const typingText = document.getElementById('typing-text');
const phrases = ['Full-Stack Developer', 'Blockchain Innovator', 'Creative Thinker'];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => isDeleting = true, 1500);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
    }

    const typingSpeed = isDeleting ? 100 : 200;
    setTimeout(typeEffect, typingSpeed);
}

// Start typing effect
typeEffect();

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = document.querySelector('.theme-icon');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    themeIcon.textContent = body.classList.contains('light-mode') ? '🌙' : '☀️';
});

// Torch effect
const torchEffect = document.querySelector('.torch-effect');

document.addEventListener('mousemove', (e) => {
    if (body.classList.contains('dark-mode')) {
        torchEffect.style.left = e.clientX + 'px';
        torchEffect.style.top = e.clientY + 'px';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Import at the top of the file
import { sendEmail } from './email.js';

// Update the form submission code
const contactForm = document.getElementById('contact-form');
const emailInput = document.getElementById('email');
const emailError = document.createElement('span');
emailError.classList.add('error-message');
emailInput.parentNode.appendChild(emailError);

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
}

// Add real-time email validation
emailInput.addEventListener('input', (e) => {
    if (emailInput.value.length > 0) {
        if (!isValidEmail(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address';
            emailError.style.display = 'block';
            emailInput.classList.add('invalid');
        } else {
            emailError.style.display = 'none';
            emailInput.classList.remove('invalid');
        }
    } else {
        emailError.style.display = 'none';
        emailInput.classList.remove('invalid');
    }
});

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = emailInput.value;
    const message = document.getElementById('message').value;

    // Validate email before submission
    if (!isValidEmail(email)) {
        emailError.textContent = 'Please enter a valid email address';
        emailError.style.display = 'block';
        emailInput.classList.add('invalid');
        return;
    }

    // Show loading state
    const submitButton = contactForm.querySelector('.submit-btn');
    const originalButtonText = submitButton.innerHTML;
    submitButton.innerHTML = '<span class="btn-content">Sending...</span>';
    submitButton.disabled = true;

    try {
        // Send email
        const result = await sendEmail({ name, email, message });

        // Show appropriate message
        const messageDiv = document.createElement('div');
        messageDiv.classList.add(result.success ? 'success-message' : 'error-message');
        messageDiv.textContent = result.message;
        contactForm.appendChild(messageDiv);

        // Reset form if successful
        if (result.success) {
            contactForm.reset();
        }

        // Remove message after 3 seconds
        setTimeout(() => {
            messageDiv.remove();
        }, 3000);
    } catch (error) {
        console.error('Error:', error);
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('error-message');
        messageDiv.textContent = 'An error occurred. Please try again later.';
        contactForm.appendChild(messageDiv);

        setTimeout(() => {
            messageDiv.remove();
        }, 3000);
    } finally {
        // Reset button state
        submitButton.innerHTML = originalButtonText;
        submitButton.disabled = false;
    }
});

// Add these styles to your CSS
const style = document.createElement('style');
style.textContent = `
    .error-message {
        color: #ff6b6b;
        font-size: 0.8rem;
        margin-top: 0.5rem;
        display: none;
        position: absolute;
        bottom: -20px;
        left: 0;
    }

    .success-message {
        color: var(--accent);
        text-align: center;
        margin-top: 1rem;
        padding: 0.5rem;
        border-radius: 4px;
        background: rgba(100, 255, 218, 0.1);
    }

    .input-animation-wrapper {
        position: relative;
    }

    .invalid {
        border-color: #ff6b6b !important;
    }

    .invalid ~ .input-underline {
        background: #ff6b6b !important;
    }
`;
document.head.appendChild(style);

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Mobile menu functionality
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.classList.toggle('menu-open');
});

// Close menu when clicking a link
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.classList.remove('menu-open');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
});

// Prevent scrolling when mobile menu is open
document.body.addEventListener('touchmove', (e) => {
    if (document.body.classList.contains('menu-open')) {
        e.preventDefault();
    }
}, { passive: false });

// Add resize handler to reset mobile menu state
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
});

// Update the scroll animations code
const scrollElements = document.querySelectorAll('.experience-card, .project-card');

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const displayScrollElement = (element) => {
    element.classList.add('visible');
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        }
    });
};

// Add scroll event listener
window.addEventListener('scroll', () => {
    handleScrollAnimation();
    updateActiveNavLink();
});

// Initial check for elements in view
handleScrollAnimation();

// Update the section observer
const sectionObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
            }
        });
    },
    {
        threshold: 0.1
    }
);

// Observe sections
document.querySelectorAll('section').forEach(section => {
    sectionObserver.observe(section);
});

// Remove the section-hidden class addition
// Instead, add this to ensure sections are visible by default
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '1';
        section.style.transform = 'none';
    });
    
    // Trigger initial animations
    handleScrollAnimation();
    updateActiveNavLink();
});

// Scroll animations for cards
const cardObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    },
    {
        threshold: 0.1,
        rootMargin: "-50px"
    }
);

// Observe all cards
document.querySelectorAll('.experience-card, .project-card').forEach(card => {
    cardObserver.observe(card);
});

// Function to get current section
function getCurrentSection() {
    const sections = document.querySelectorAll('section');
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.scrollY;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    return currentSection;
}

// Function to update active nav link
function updateActiveNavLink() {
    const currentSection = getCurrentSection();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href').substring(1);
        if (href === currentSection) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Add scroll event listener for active section
window.addEventListener('scroll', () => {
    updateActiveNavLink();
});

// Initial checks
document.addEventListener('DOMContentLoaded', () => {
    updateActiveNavLink();
    // Make the first section visible immediately
    document.querySelector('section').classList.add('section-visible');
});

// Remove any duplicate event listeners
window.removeEventListener('scroll', handleScrollAnimation);

// Add touch event handling for profile image
const profileImage = document.querySelector('.profile-image');

// Function to handle touch events
function handleTouch() {
    profileImage.classList.toggle('touch-active');
}

// Add touch event listeners
profileImage.addEventListener('touchstart', handleTouch, { passive: true });
profileImage.addEventListener('touchend', handleTouch, { passive: true });

// Remove hover effect when touch is detected
function addTouchClass() {
    document.documentElement.classList.add('touch-device');
}

// Check if device supports touch
if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    addTouchClass();
}