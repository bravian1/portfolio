import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import SkillsAndTools from '@/components/SkillsAndTools'
import Experience from '@/components/Experience'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import { Toaster } from 'sonner'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section id="about" className="pt-8">
          <Hero />
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16">
          <div className="container mx-auto px-6 lg:px-12 xl:px-16">
            <Projects />
          </div>
        </section>

        {/* Skills & Tools Section */}
        <section id="skills" className="py-16 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-12 xl:px-16">
            <SkillsAndTools />
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16">
          <div className="container mx-auto px-6 lg:px-12 xl:px-16">
            <Experience />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-12 xl:px-16">
            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
      <Toaster position="top-right" />
    </div>
  )
}