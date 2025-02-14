import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

export default function ExperienceSection() {
  return (
    <Tabs defaultValue="technical" className="w-full">
      <TabsList className="grid w-full grid-cols-2 mb-8">
        <TabsTrigger value="technical">Technical</TabsTrigger>
        <TabsTrigger value="more">More</TabsTrigger>
      </TabsList>
      <TabsContent value="technical">
        <div className="space-y-6">
          <ExperienceCard
            title="Software Engineer (Co-op)"
            company="Unrepped"
            location="New York, United States"
            date="Sep 2024 - Dec 2024"
            points={[
              "Engineered AI-driven copywriting prompt templates and scripts using JasperAI and GPT-4",
              "Developed system prompts tailored to brand identity",
              "Earned 3 Google certifications covering ads search, performance measurement and online analytics",
            ]}
          />
          {/* Add more experience cards as needed */}
        </div>
      </TabsContent>
      <TabsContent value="more">
        <div className="space-y-6">{/* Add non-technical experience here */}</div>
      </TabsContent>
    </Tabs>
  )
}

interface ExperienceCardProps {
  title: string
  company: string
  location: string
  date: string
  points: string[]
}

function ExperienceCard({ title, company, location, date, points }: ExperienceCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-gray-600 mb-4">
          {company} / {location}
        </p>
        <p className="text-sm text-gray-500 mb-4">{date}</p>
        <ul className="list-disc list-inside space-y-2">
          {points.map((point, index) => (
            <li key={index} className="text-gray-600">
              {point}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

