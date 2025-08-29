import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Phone, Star, Instagram, Facebook } from "lucide-react";
import heroImage from "@/assets/hero-bbq.jpg";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const menuItems = [
    {
      category: "Smoked Meats",
      items: [
        { name: "Brisket Platter", description: "14-hour smoked brisket with our signature dry rub", price: "$18.99" },
        { name: "Pulled Pork", description: "Slow-smoked pork shoulder, tender and juicy", price: "$14.99" },
        { name: "Ribs (Half Rack)", description: "St. Louis style ribs with house BBQ sauce", price: "$16.99" },
        { name: "Smoked Sausage", description: "House-made jalapeño cheddar sausage", price: "$12.99" }
      ]
    },
    {
      category: "Burgers & Sandwiches", 
      items: [
        { name: "The Rusty Spur Burger", description: "1/2 lb beef patty, bacon, cheese, onion rings", price: "$13.99" },
        { name: "BBQ Pulled Pork Sandwich", description: "Pulled pork with coleslaw on brioche bun", price: "$11.99" },
        { name: "Brisket Sandwich", description: "Sliced brisket with pickles and onions", price: "$12.99" }
      ]
    },
    {
      category: "Fried Chicken",
      items: [
        { name: "Nashville Hot Chicken", description: "Crispy chicken with Nashville hot seasoning", price: "$15.99" },
        { name: "Chicken & Waffles", description: "Buttermilk fried chicken on house-made waffles", price: "$14.99" }
      ]
    },
    {
      category: "Sides",
      items: [
        { name: "Mac & Cheese", description: "Three-cheese blend with breadcrumb topping", price: "$6.99" },
        { name: "Coleslaw", description: "Creamy coleslaw with house dressing", price: "$4.99" },
        { name: "Baked Beans", description: "Slow-cooked with bacon and molasses", price: "$5.99" },
        { name: "Cornbread", description: "Sweet cornbread with honey butter", price: "$3.99" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background font-body">
      {/* Header & Navigation */}
      <header className="sticky top-0 z-50 bg-background border-b border-border shadow-soft">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl md:text-3xl font-heading text-foreground">The Rusty Spur</h1>
              <Star className="h-6 w-6 text-primary" />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">Home</button>
              <button onClick={() => scrollToSection('menu')} className="text-foreground hover:text-primary transition-colors">Menu</button>
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">About Us</button>
              <button onClick={() => scrollToSection('location')} className="text-foreground hover:text-primary transition-colors">Location & Hours</button>
            </div>

            {/* Order Button */}
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
              Order Now
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        id="home" 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-heading mb-6 text-white">
            Authentic Texas Smokehouse Fare
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-medium text-white/90">
            Slow-smoked meats, handcrafted burgers, and ice-cold beer
          </p>
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-4"
            onClick={() => scrollToSection('menu')}
          >
            View Our Menu
          </Button>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading text-foreground mb-4">Our Menu</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              All our meats are smoked low and slow for 12-16 hours using hickory and oak wood
            </p>
          </div>

          <div className="space-y-12">
            {menuItems.map((section) => (
              <div key={section.category} className="space-y-6">
                <h3 className="text-3xl font-heading text-foreground text-center">{section.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {section.items.map((item) => (
                    <Card key={item.name} className="bg-card shadow-soft hover:shadow-warm transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-xl font-semibold text-card-foreground">{item.name}</h4>
                          <Badge variant="secondary" className="text-lg font-bold">{item.price}</Badge>
                        </div>
                        <p className="text-muted-foreground mb-4">{item.description}</p>
                        <Button size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
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

      {/* About Us Section */}
      <section id="about" className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-heading text-secondary-foreground mb-8">About The Rusty Spur</h2>
            <div className="text-lg text-secondary-foreground space-y-6 leading-relaxed">
              <p>
                Founded in the heart of Texas, The Rusty Spur Smokehouse has been serving authentic barbecue 
                for over two decades. Our passion for slow-smoked meats and traditional cooking methods creates 
                an unforgettable dining experience.
              </p>
              <p>
                We smoke all our meats low and slow using only the finest hickory and oak wood, following 
                time-honored Texas traditions. Every brisket, rib, and sausage is crafted with care by our 
                experienced pitmaster team.
              </p>
              <p>
                From our hand-cut fries to our house-made sauces, everything at The Rusty Spur is made 
                with quality ingredients and genuine Texas hospitality. Come taste the difference that 
                passion and tradition make.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Hours Section */}
      <section id="location" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading text-foreground mb-4">Visit Us</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Location Info */}
            <Card className="bg-card shadow-soft">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-card-foreground mb-2">Location</h3>
                      <p className="text-muted-foreground">
                        123 BBQ Lane<br />
                        Austin, TX 78701<br />
                        United States
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Phone className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-card-foreground mb-2">Phone</h3>
                      <p className="text-muted-foreground">(512) 555-SPUR</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card className="bg-card shadow-soft">
              <CardContent className="p-8">
                <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div className="w-full">
                    <h3 className="text-xl font-semibold text-card-foreground mb-4">Hours</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Monday - Thursday</span>
                        <span>11am - 9pm</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Friday - Saturday</span>
                        <span>11am - 10pm</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span>12pm - 8pm</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-2">
              <h3 className="text-2xl font-heading">The Rusty Spur</h3>
              <Star className="h-6 w-6 text-primary" />
            </div>
            
            <div className="flex justify-center space-x-6">
              <Button variant="ghost" size="icon" className="text-background hover:text-primary hover:bg-background/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-primary hover:bg-background/10">
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="text-sm text-background/80">
              <p>123 BBQ Lane, Austin, TX 78701 | (512) 555-SPUR</p>
              <p className="mt-2">© 2024 The Rusty Spur Smokehouse. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
