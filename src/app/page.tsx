import Header from "../components/ui/Header"
import Hero from "../components/ui/Hero"
import About from "../components/ui/About"
import Menu from "../components/ui/Menu"
import Footer from "../components/ui/Footer"
import EventsCarousel from "~/components/ui/EventsCarousel"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden overscroll-none">
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
      </main>
      <Footer />
    </div>
  )
}

