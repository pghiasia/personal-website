import { Github, Linkedin, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import ContactForm from "@/components/contact-form"
import ProjectCard from "@/components/project-card"
import ExperienceSection from "@/components/experience-section"
import AnimatedText from "@/components/animated-text"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-left opacity-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Hello, I&apos;m <AnimatedText />
            </h1>
            <p className="text-xl text-muted-foreground mb-8">Full Stack Developer & Computer Science Student</p>
            <div className="flex space-x-4">
              <a href="https://github.com/pghiasia" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/parsaghiasian/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </a>
              <a href="https://drive.google.com/file/d/1ibdS4qZXalrJ8yDHGyjxblcgFnWbC-Vi/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon">
                  <FileText className="h-5 w-5" />
                  <span className="sr-only">Resume</span>
                </Button>
              </a>
            </div>
          </div>
          <div className="relative animate-slide-right opacity-0">
            <Image
              src="/IMG_8540.JPG"
              alt="Profile"
              width={500}
              height={500}
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[300px_1fr] gap-12 items-start">
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-full">
                <Image
                  src={'/profile.jpeg'}
                  alt="Profile picture speaking at microphone"
                  width={300}
                  height={300}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-8">About Me</h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  I&apos;m a passionate full-stack developer and a third year Computer Science student at the
                  University of Waterloo. Having worked an AI co-op and built multiple AI projects, I particularly enjoy
                  the field of ML and back-end work.
                </p>
                <p>
                  When I&apos;m not coding, you can find me learning a new language, playing piano, or playing an intense game of volleyball. I have a particular interest in cultures and languages around the
                  world, currently speaking various levels of Persian, French, Spanish (and a bit of Mandarin). I also
                  enjoy public speaking and politics, having taken part in Model UN throughout high school.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold">Experience</h2>
            <Button variant="outline" asChild>
              <a href="/resume.pdf" download>Download Resume</a>
            </Button>
          </div>
          <ExperienceSection />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="EasyASL"
              description="An revolutionary AI-powered sign language translation and certification webapp tool."
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5zdzhpkEpVt0HW9LnpD3lB73gwtxqF.png"
              link="#"
            />
            <ProjectCard
              title="FlashNotes"
              description="A flashcard webapp that uses AI and OCR to generate flashcards from written notes."
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5zdzhpkEpVt0HW9LnpD3lB73gwtxqF.png"
              link="#"
            />
            <ProjectCard
              title="No Hooting Around"
              description="An AI-powered intelligent distraction blocking Chrome extension that helps you focus on your work."
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5zdzhpkEpVt0HW9LnpD3lB73gwtxqF.png"
              link="#"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Let's Connect</h2>
          <ContactForm />
        </div>
      </section>
    </div>
  )
}

