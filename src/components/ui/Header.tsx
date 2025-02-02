"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, User, Menu } from "lucide-react"
import Sidebar from "./Sidebar" // Import the Sidebar component
import { useRouter, usePathname } from "next/navigation"

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  // Redirects to the homepage with an anchor.
  // If currently on /not-implemented, it routes home first.
  const handleSectionRedirect = (section: string) => {
    // Construct the anchor URL (e.g., "/#about" or "/#menu")
    const anchorUrl = `/#${section}`

    // Use router.push to perform a client-side navigation
    // This works regardless of current pathname. If on "/not-implemented", it routes home.
    router.push(anchorUrl)
  }

  return (
    <header className="bg-black text-white py-4 px-6 sticky top-0 z-50 border-b border-gray-800">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Image 
            src="/images/eatzologo.png"  // Replace with your actual logo path
            alt="Eatzo Logo"
            width={57} 
            height={57} 
            className="h-auto w-auto"
          />
        </Link>
        <div className="flex items-center space-x-6">
          <ul className="hidden md:flex space-x-6">
            <li>
              <button
                onClick={() => handleSectionRedirect("about")}
                className="hover:text-primary transition duration-300"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSectionRedirect("menu")}
                className="hover:text-primary transition duration-300"
              >
                Menu
              </button>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary transition duration-300">
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            {/* Wrap the login button with Link to not-implemented */}
            <Link href="/not-implemented">
              <button aria-label="Sign In" className="text-white hover:text-primary transition duration-300">
                <User size={24} />
              </button>
            </Link>
            {/* Wrap the cart button with Link to not-implemented */}
            <Link href="/not-implemented">
              <button
                aria-label="Shopping Cart"
                className="text-white hover:text-primary transition duration-300 relative"
              >
                <ShoppingCart size={24} />
                <span className="absolute -top-2 -right-2 bg-secondary text-black rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  0
                </span>
              </button>
            </Link>
            <button
              aria-label="Menu"
              className="md:hidden text-white hover:text-primary transition duration-300"
              onClick={toggleSidebar}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
    </header>
  )
}
