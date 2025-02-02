"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, User, Menu } from "lucide-react"
import Sidebar from "./Sidebar"
import { useRouter } from "next/navigation"

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()

  // Listen for scroll events and update isScrolled state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  // Redirect to homepage with the proper anchor
  const handleSectionRedirect = (section: string) => {
    router.push(`/#${section}`)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 bg-black text-white z-50 border-b border-gray-800 transition-all duration-300 ${isScrolled ? "py-2 shadow-md" : "py-4"
        }`}
    >
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div
            className={`transition-all duration-300 ${isScrolled ? "w-[45px] h-[45px]" : "w-[57px] h-[57px]"
              }`}
          >
            <Image
              src="/images/eatzologo.png" // Replace with your actual logo path
              alt="Eatzo Logo"
              layout="responsive"
              width={57}
              height={57}
            />
          </div>
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
            <Link href="/not-implemented">
              <button
                aria-label="Sign In"
                className="text-white hover:text-primary transition duration-300"
              >
                <User size={24} />
              </button>
            </Link>
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
              className="md:hidden text-white hover:text-primary transition duration-300 pl-5"
              onClick={toggleSidebar}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
    </header>
  )
}
