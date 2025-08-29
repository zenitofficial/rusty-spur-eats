import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Menu = () => {
  const menuCategories = [
    {
      category: "Smoked Meats",
      description: "14-hour pit-smoked perfection using hickory and oak",
      items: [
        {
          name: "Prime Brisket",
          description: "Hand-selected prime grade brisket, dry-rubbed and smoked to perfection with our signature bark",
          price: "$28.99",
          image: "/api/placeholder/400/300"
        },
        {
          name: "Heritage Pork Ribs",
          description: "St. Louis cut ribs from heritage breed pork, glazed with bourbon barrel-aged BBQ sauce",
          price: "$24.99",
          image: "/api/placeholder/400/300"
        },
        {
          name: "Pulled Pork Shoulder",
          description: "Boston butt smoked low and slow, hand-pulled and finished with Carolina-style vinegar sauce",
          price: "$18.99",
          image: "/api/placeholder/400/300"
        },
        {
          name: "House-Made Sausage",
          description: "Jalapeño cheddar sausage crafted in-house with locally sourced beef and pork",
          price: "$16.99",
          image: "/api/placeholder/400/300"
        }
      ]
    },
    {
      category: "Handcrafted Burgers",
      description: "Premium ground beef blends on house-made brioche buns",
      items: [
        {
          name: "The Iron Brand Signature",
          description: "Double-stacked wagyu blend patties, aged cheddar, smoked bacon, caramelized onions, house sauce",
          price: "$19.99",
          image: "/api/placeholder/400/300"
        },
        {
          name: "Brisket Burger",
          description: "Beef patty topped with burnt ends, pepper jack cheese, crispy onions, BBQ aioli",
          price: "$17.99",
          image: "/api/placeholder/400/300"
        },
        {
          name: "The Pitmaster",
          description: "Elk and beef blend, goat cheese, arugula, roasted red peppers, balsamic reduction",
          price: "$21.99",
          image: "/api/placeholder/400/300"
        }
      ]
    },
    {
      category: "The Grill",
      description: "Wood-fired perfection from our custom grill",
      items: [
        {
          name: "Tomahawk Ribeye",
          description: "32oz dry-aged tomahawk ribeye, herb butter, served with loaded potato gratin",
          price: "$89.99",
          image: "/api/placeholder/400/300"
        },
        {
          name: "Smoked Chicken",
          description: "Free-range half chicken, Nashville hot rub, served with honey cornbread",
          price: "$22.99",
          image: "/api/placeholder/400/300"
        },
        {
          name: "Grilled Portobello",
          description: "Marinated portobello caps, roasted vegetables, chimichurri sauce",
          price: "$16.99",
          image: "/api/placeholder/400/300"
        }
      ]
    },
    {
      category: "Sides",
      description: "Elevated comfort food to complement your meal",
      items: [
        {
          name: "Truffle Mac & Cheese",
          description: "Five-cheese blend with truffle oil and herb breadcrumbs",
          price: "$12.99",
          image: "/api/placeholder/400/300"
        },
        {
          name: "Bourbon Baked Beans",
          description: "Heritage beans slow-cooked with bourbon, molasses, and smoked pork belly",
          price: "$9.99",
          image: "/api/placeholder/400/300"
        },
        {
          name: "Loaded Potato Gratin",
          description: "Yukon Gold potatoes, aged cheddar, chives, bacon bits",
          price: "$11.99",
          image: "/api/placeholder/400/300"
        },
        {
          name: "Honey Cornbread",
          description: "House-made cornbread with local honey butter and sea salt",
          price: "$7.99",
          image: "/api/placeholder/400/300"
        }
      ]
    },
    {
      category: "Beer & Spirits",
      description: "Curated selection of craft brews and premium spirits",
      items: [
        {
          name: "Local Craft Selection",
          description: "Rotating taps featuring the finest Texas breweries",
          price: "$7.99 - $12.99",
          image: "/api/placeholder/400/300"
        },
        {
          name: "Whiskey Flight",
          description: "Three-pour flight of premium American whiskeys",
          price: "$24.99",
          image: "/api/placeholder/400/300"
        },
        {
          name: "Smoked Old Fashioned",
          description: "House bourbon, cherry wood smoke, demerara sugar, orange bitters",
          price: "$16.99",
          image: "/api/placeholder/400/300"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background font-body">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border shadow-dark">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="text-lg font-subheading">Back to Home</span>
            </Link>
            
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl md:text-3xl font-heading text-primary">The Iron Brand</h1>
            </div>

            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
              Order Now
            </Button>
          </nav>
        </div>
      </header>

      {/* Menu Hero */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-heading text-primary mb-6">
            Our Menu
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto">
            Authentic pit-smoked BBQ and handcrafted cuisine, prepared with the finest ingredients 
            and time-honored techniques
          </p>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {menuCategories.map((section) => (
              <div key={section.category} className="space-y-8">
                <div className="text-center">
                  <h2 className="text-4xl md:text-5xl font-heading text-primary mb-4">
                    {section.category}
                  </h2>
                  <p className="text-lg text-muted-foreground font-subheading italic">
                    {section.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {section.items.map((item) => (
                    <Card key={item.name} className="bg-card shadow-dark hover:shadow-gold transition-all duration-300 overflow-hidden">
                      <div 
                        className="h-48 bg-cover bg-center bg-gray-800"
                        style={{ 
                          backgroundImage: `url(${item.image})`,
                          backgroundColor: '#2a2a2a'
                        }}
                      />
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-xl font-subheading font-semibold text-card-foreground">
                            {item.name}
                          </h3>
                          <Badge variant="secondary" className="text-lg font-bold bg-primary text-primary-foreground">
                            {item.price}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {item.description}
                        </p>
                        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                          Add to Order
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading text-secondary-foreground mb-6">
            Ready to Order?
          </h2>
          <p className="text-lg text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
            Experience the art of Texas smoke with our authentic pit BBQ and handcrafted dishes
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-4">
            Place Your Order
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Menu;