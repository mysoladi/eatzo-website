import "../styles/globals.css"
import type { Metadata } from "next"
import type React from "react"

export const metadata = {
  title: "Eatzo - Delicious Food Delivered",
  description: "Eatzo offers the best catering services with delicious food and convenient ordering.",
  keywords: [
    "food delivery", "catering", "online orders", "Eatzo", "gourmet meals",
    "Eatzo Food Truck", "eatzo", "eatzo food", "food trucks in Indy", 
    "food truck Indy", "Indianapolis food trucks", 
    "blue orange food truck", "Marion County Fair", 
    "best food trucks in Indiana", "Indy catering services", 
    "mobile catering", "street food Indy", "wedding catering Indy", 
    "event food truck", "private party food truck", "Indy festival food trucks",
    "Eatzo menu", "Eatzo catering options", "Eatzo truck locations"
  ],
  authors: [
    { name: "Myles Soladine" },
    { name: "Jason Soladine" }
  ],
  robots: "index, follow",
  openGraph: {
    title: "Eatzo - Gourmet Meals Delivered",
    description: "Order delicious meals from Eatzo with ease.",
    url: "https://eatzo.com",
    siteName: "Eatzo",
    images: [
      {
        url: "https://eatzo.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Eatzo Food Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eatzo - Food for Every Occasion",
    description: "Premium catering and food delivery service.",
    site: "@eatzo",
    creator: "@eatzo",
    images: ["https://eatzo.com/images/twitter-card.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

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
