import Image from "next/image"
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gray-900 text-white py-12 pb-[env(safe-area-inset-bottom)]"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <Image
              src="/images/eatzologo.png" // Replace with the actual logo path
              alt="Eatzo Logo"
              width={120}
              height={40}
              className="h-auto w-auto mb-4"
            />
            <p className="mb-6 text-gray-400">Bringing gourmet street food to your neighborhood!</p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition duration-300">
                <Facebook size={24} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition duration-300">
                <Instagram size={24} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition duration-300">
                <Twitter size={24} />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <h4 className="text-xl font-semibold mb-4 text-secondary">Find Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin size={18} className="mr-2 text-secondary" />
                <span>Check our social media for daily locations!</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-secondary" />
                <span>(317) 496-8454</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-secondary" />
                <span>jsoladine@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Eatzo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
