import Link from "next/link"
import { ShoppingCart, User, Menu } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-black text-white py-4 px-6 sticky top-0 z-50 border-b border-gray-800">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Eatzo
        </Link>
        <div className="flex items-center space-x-6">
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link href="#about" className="hover:text-primary transition duration-300">
                About
              </Link>
            </li>
            <li>
              <Link href="#menu" className="hover:text-primary transition duration-300">
                Menu
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary transition duration-300">
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            <button aria-label="Sign In" className="text-white hover:text-primary transition duration-300">
              <User size={24} />
            </button>
            <button
              aria-label="Shopping Cart"
              className="text-white hover:text-primary transition duration-300 relative"
            >
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-secondary text-black rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                0
              </span>
            </button>
            <button aria-label="Menu" className="md:hidden text-white hover:text-primary transition duration-300">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

