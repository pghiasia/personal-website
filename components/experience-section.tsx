import { Card, CardContent } from "@/components/ui/card"

export default function ExperienceSection() {
  return (
    <div className="space-y-6">
      <ExperienceCard
        title="Software Engineer, Backend (Co-op)"
        company="TextNow"
        location="Waterloo, Ontario"
        date="Jan 2026 – Apr 2026"
        points={[
          "Developed features for the legacy PHP monolith and Go microservices for user upgrades features, as well as Terraform for configuring system infrastructure and monitoring alerts",
          "Architected and implemented a scalable and fault tolerant request queueing system for a partnership project with CVS with SCS and gRPC, leading to an 87% decrease in latency in the iOS and android API requests",
          "Streamlined deployment using ArgoCD, AWS and Github Action CI/CD pipelines",
          "Wrote over 300 unit tests and 50 integration tests across 20 microservices within the product platform, and monitored Datadog metrics and OpenSearch logs for consistency and error prevention during deployments"
        ]}
      />
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
        title="Software Engineer (Co-op)"
        company="Unrepped"
        location="New York, New York"
        date="Sep 2024 - Dec 2024"
        points={[
          "Developed the web app for the Unrepped home buying assistant using Next.js, Typescript and TailwindCSS.",
          "Designed REST APIs to collect real time real-estate data, lowering the average server response time by 40%.",
          "Implemented a secure authentication system for subscription, payment and login using Supabase's PostgreSQL database and Firebase's authentication APIs.",
          "Tracked user activity through Mixpanel integration, allowing user traffic optimization by the marketing team and leading to over 10000 app downloads and a 87% retention rate.",
          "Wrote 300+ unit tests to ensure user-interface optimization across multiple devices and use cases.",
        ]}
      />
    </div>
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
