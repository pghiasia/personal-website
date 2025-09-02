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
            title="Software Developer (Co-op)"
            company="University Health Network "
            location="Toronto, Ontario"
            date="May 2025 – Aug 2025"
            points={[
              "Developed the Research and Private Employee Web Applications through dotCMS, using Javascript, React and TailwindCSS for the frontend and Django (Python) for the backend.",
              "Implemented REST APIs for researcher data retrieval from a PostgreSQL database hosted in Azure Data Studio, resulting in 30% faster data loading.",
              "Designed and implemented a website-wide semantic search system for the internal self service intranet using Retrieval-Augmented Generation with Pinecone vector database services, combining embeddings-based vector search for document retrieval with OpenAI GPT-4o integration, improving retrieval relevance across 1,000+ entries.",
            ]}
          />
          <ExperienceCard
            title="Software Developer (Co-op)"
            company="Unrepped"
            location="New York, New York"
            date="Sep 2024 - Dec 2024"
            points={[
              "Developed the web app for the Unrepped home buying assistant using Next.js, Typescript and TailwindCSS.",
              "Designed REST APIs to collect real time real-estate data, lowering the average server response time by 40%.",
              "Implemented a secure authentication system for subscription, payment and login using Supabase’s PostgreSQL database and Firebase’s authentication APIs.",
              "Tracked user activity through Mixpanel integration, allowing user traffic optimization by the marketing team and leading to over 10000 app downloads and a 87% retention rate.",
              "Wrote 300+ unit tests to ensure user-interface optimization across multiple devices and use cases.",
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

