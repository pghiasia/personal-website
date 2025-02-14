import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link: string
}

export default function ProjectCard({ title, description, image, link }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button variant="link" className="p-0" asChild>
          <a href={link}>
            View Project
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}

