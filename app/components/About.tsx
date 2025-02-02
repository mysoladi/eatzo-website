import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-primary">About Eatzo</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Eatzo Food Truck"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <p className="text-lg mb-6 text-gray-300">
              Eatzo was born from a passion for bringing gourmet flavors to the streets. Our mission is to serve
              high-quality, innovative dishes that tantalize your taste buds and leave you craving more.
            </p>
            <p className="text-lg text-gray-300">
              With a rotating menu of seasonal specialties and beloved staples, we pride ourselves on using fresh,
              locally-sourced ingredients to create unforgettable culinary experiences. Look out for our truck at local
              events, bustling street corners, and food festivals near you!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

