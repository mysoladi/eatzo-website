import Image from "next/image"
import { MapPin, Clock, Truck } from "lucide-react"

export default function Hero() {
  return (
    <section className="bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Gourmet Street Food
            <span className="block text-primary">On Wheels</span>
          </h1>
          <p className="text-xl mb-8 max-w-md">
            Experience the best of street cuisine with Eatzo. We bring delicious, chef-crafted meals right to your
            neighborhood.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center">
              <MapPin className="text-secondary mr-2" />
              <span>Multiple Locations</span>
            </div>
            <div className="flex items-center">
              <Clock className="text-secondary mr-2" />
              <span>Open Daily</span>
            </div>
            <div className="flex items-center">
              <Truck className="text-secondary mr-2" />
              <span>Private Events</span>
            </div>
          </div>
          <a
            href="#menu"
            className="bg-secondary hover:bg-primary text-black font-bold py-3 px-8 rounded-full text-lg transition duration-300 inline-block"
          >
            View Today's Menu
          </a>
        </div>
        {/* Show image only on screens larger than 1023px */}
        <div className="hidden lg:block lg:w-1/2 relative">
          <Image
            src="/images/fulltruckwopacity2.jpg"  // Replace with the actual path of your image
            alt="Eatzo Food Truck"
            width={500} 
            height={400} 
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
