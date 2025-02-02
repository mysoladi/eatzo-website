import { ContactForm } from "../../components/ui/ContactForm"

export default function Contact() {
  return (
    <section className="min-h-screen bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Contact Us</h1>
          <p className="text-gray-400">
            Have questions or want to book us for your event? Send us a message and we'll get back to you soon!
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}

