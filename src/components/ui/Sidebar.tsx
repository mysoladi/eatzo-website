"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { X } from "lucide-react"

interface SidebarProps {
  isOpen: boolean
  closeSidebar: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, closeSidebar }) => {
  const router = useRouter()

  // This function routes to the homepage with the specified hash,
  // then closes the sidebar.
  const handleSectionRedirect = (section: string) => {
    router.push(`/#${section}`)
    closeSidebar()
  }

  return (
    <div
      className={`fixed top-0 right-0 w-64 bg-black text-white h-full transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300`}
    >
      <div className="flex justify-between items-center p-4 border-b border-gray-800">
        <h2 className="text-2xl font-bold text-primary">Eatzo</h2>
        <button onClick={closeSidebar} aria-label="Close Sidebar">
          <X size={24} className="text-white" />
        </button>
      </div>
      <ul className="flex flex-col items-start p-4 space-y-6">
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
          <Link
            href="/contact"
            className="hover:text-primary transition duration-300"
            onClick={closeSidebar}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
