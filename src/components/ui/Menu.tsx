import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"

const menuItems = [
  { name: "Philly Cheesesteaks", description: "Classic Philly cheesesteak with grilled onions, peppers, and melted cheese", price: "$12" },
  { name: "Quesadillas", description: "Grilled flour tortillas with melted cheese, served with salsa and sour cream", price: "$12" },
  { name: "Walking Tacos", description: "Taco in a bag with seasoned beef, lettuce, cheese, and salsa", price: "$12" },
  { name: "Lemonade Shakeups", description: "Freshly squeezed lemonade with a splash of fruit flavor", price: "$6" },
  { name: "Sweet Tea / Arnold Palmer", description: "Sweetened tea or a refreshing mix of iced tea and lemonade", price: "$6" },
  { name: "Texas Nachos", description: "Crispy tortilla chips topped with melted cheese, jalapeños, and your choice of protein", price: "$14" },
  { name: "Gyros", description: "Grilled lamb or chicken, fresh veggies, and tzatziki sauce wrapped in pita", price: "$12" },
]

export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-primary">Our Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <Card
              key={index}
              className="bg-card text-card-foreground transition-transform duration-300"
            >
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
