// EmailJS configuration
const emailConfig = {
    serviceID: 'service_cazuime',
    templateID: 'template_t36sydc',
    userID: 'Tkv6hTnur3VwXlkTK',
};

// Function to send email using the recommended approach
export async function sendEmail(formData) {
    const data = {
        service_id: emailConfig.serviceID,
        template_id: emailConfig.templateID,
        user_id: emailConfig.userID,
        template_params: {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_name: 'Bravian',
            reply_to: formData.email
        }
    };

    try {
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            return {
                success: true,
                message: 'Message sent successfully!'
            };
        } else {
            throw new Error('Failed to send message');
        }
    } catch (error) {
        console.error('Email Error:', error);
        return {
            success: false,
            message: 'Failed to send message. Please try again later.'
        };
    }
}

// Export the sendEmail function 
