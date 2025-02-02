import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 text-primary leading-tight">
          About Eatzo
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 mb-8 md:mb-0 relative">
            <Image
              src="/images/header.jpg"
              alt="Eatzo Food Truck"
              width={600}
              height={400}
              className="rounded-xl shadow-lg transform transition duration-300 ease-in-out"
            />
          </div>
          <div className="md:w-1/2 md:pl-12 text-center md:text-left">
            <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
              Eatzo was born from a passion for bringing gourmet flavors to the streets. Our mission is to serve high-quality,
              innovative dishes that tantalize your taste buds and leave you craving more.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              With a rotating menu of seasonal specialties and beloved staples, we pride ourselves on using fresh, locally-sourced
              ingredients to create unforgettable culinary experiences. Look out for our truck at local events, bustling street corners,
              and food festivals near you!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
