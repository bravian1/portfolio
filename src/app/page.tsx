import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import SecondaryProjects from '@/components/SecondaryProjects'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import { Toaster } from 'sonner'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="container mx-auto px-6 lg:px-12 xl:px-16 overflow-hidden">
        <Hero />
        <Projects />
        <SecondaryProjects />
        <Experience />
      </main>

      <Footer />
      <Toaster position="top-right" />
    </div>
  )
}