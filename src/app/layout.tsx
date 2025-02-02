import "../styles/globals.css"
import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "Eatzo - Gourmet Street Food Experience",
  description: "Discover gourmet street food with Eatzo food truck.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}

