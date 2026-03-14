import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"
import Navigation from "@/components/navigation"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Parsa Ghiasian | Portfolio",
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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-500">© {new Date().getFullYear()} Parsa Ghiasian. All Rights Reserved.</p>
              <div className="flex items-center gap-2">
                <a href="https://cs.uwatering.com/https://parsaghiasian.com?nav=prev" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">←</a>
                <a href="https://cs.uwatering.com/https://parsaghiasian.com" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://cs.uwatering.com/icon.black.svg"
                    alt="CS Webring"
                    className="w-6 h-auto opacity-80 dark:invert"
                  />
                </a>
                <a href="https://cs.uwatering.com/https://parsaghiasian.com?nav=next" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">→</a>
              </div>
              <p className="text-sm text-gray-500">Made with 💙 using Next.js</p>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  )
}

