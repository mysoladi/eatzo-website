import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"

const menuItems = [
  { name: "Eatzo Burger", description: "Angus beef, caramelized onions, aged cheddar, signature sauce", price: "$12" },
  { name: "Fusion Tacos", description: "Grilled mahi-mahi, mango salsa, cilantro lime crema", price: "$10" },
  { name: "Veggie Delight", description: "Grilled portobello, roasted red peppers, zucchini, pesto", price: "$9" },
  { name: "Street Bowl", description: "Marinated beef, kimchi, pickled vegetables, gochujang sauce", price: "$11" },
  { name: "Gourmet Mac", description: "Four cheese blend, crispy breadcrumbs, truffle oil", price: "$8" },
  { name: "Loaded Fries", description: "Sweet potato fries, chipotle mayo, green onions", price: "$5" },
]

export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-primary">Our Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <Card key={index} className="bg-card text-card-foreground hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-primary text-xl">{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-4">{item.description}</p>
                <p className="font-bold text-secondary text-lg">{item.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

