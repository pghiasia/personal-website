import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"
import Navigation from "@/components/navigation"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Navigation />
          <main className="pt-16">{children}</main>
          <footer className="border-t mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex justify-between items-center">
              <p className="text-sm text-gray-500">© 2025 Parsa Ghiasian. All Rights Reserved.</p>
              <p className="text-sm text-gray-500">Made with 💙 using Next.js</p>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  )
}

