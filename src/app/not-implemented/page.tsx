// app/not-implemented/page.tsx
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';

export default function NotImplemented() {
  return (
    <div className="bg-background">
      <Header />
      <main className="min-h-screen flex flex-col items-center justify-center py-16">
        <h1 className="text-4xl font-bold text-primary mb-4">Feature Not Implemented Yet</h1>
        <p className="text-lg text-foreground mb-8">
          We are working on adding this feature. Stay tuned!
        </p>
        <p className="text-md text-gray-500">
          In the meantime, check out other parts of our website or contact us for more information.
        </p>
      </main>
      <Footer />
    </div>
  )
}
