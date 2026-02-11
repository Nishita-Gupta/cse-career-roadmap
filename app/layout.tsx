import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CSE Career Roadmap Advisor',
  description: 'Get a personalized career roadmap based on your academic year and career goal. Plan smarter, achieve more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">

        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-slate-900 text-white text-center py-4 text-sm">
          <p>
            Built by <span className="font-semibold">Nishita Gupta • VIT-AP</span> •
            CSE Career Roadmap Advisor • 2026
          </p>
        </footer>
      </body>
    </html>
  )
}

