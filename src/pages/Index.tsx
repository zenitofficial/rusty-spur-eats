import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Phone, Instagram, Facebook, ArrowRight, Flame } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-fire.jpg";
import featuredBrisket from "@/assets/featured-brisket.jpg";
import featuredBurger from "@/assets/featured-burger.jpg";
import featuredSteak from "@/assets/featured-steak.jpg";

const Index = () => {
  const featuredItems = [
    {
      name: "Prime Brisket",
      description: "14-hour pit-smoked perfection with signature bark",
      price: "$28.99",
      image: featuredBrisket
    },
    {
      name: "Iron Brand Signature Burger",
      description: "Wagyu beef blend with aged cheddar and smoked bacon",
      price: "$19.99",
      image: featuredBurger
    },
    {
      name: "Tomahawk Ribeye",
      description: "32oz dry-aged tomahawk with herb butter",
      price: "$89.99",
      image: featuredSteak
    }
  ];

  return (
    <div className="min-h-screen bg-background font-body">
      {/* Header & Navigation */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border shadow-dark">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Flame className="h-8 w-8 text-primary" />
              <h1 className="text-2xl md:text-3xl font-heading text-primary">The Iron Brand</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors font-subheading">Home</a>
              <Link to="/menu" className="text-foreground hover:text-primary transition-colors font-subheading">Menu</Link>
              <a href="#about" className="text-foreground hover:text-primary transition-colors font-subheading">About Us</a>
              <Link to="/location" className="text-foreground hover:text-primary transition-colors font-subheading">Location & Hours</Link>
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
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-heading mb-8 text-primary leading-tight">
            The Art of Texas Smoke
          </h1>
          <p className="text-xl md:text-3xl mb-12 max-w-4xl mx-auto font-subheading text-white/90 leading-relaxed">
            Where authentic pit-smoked BBQ meets handcrafted cuisine in a sophisticated atmosphere
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-4 font-semibold"
              >
                Explore Menu
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 font-semibold"
            >
              Reserve Table
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-heading text-primary mb-8">Our Philosophy</h2>
            <div className="text-lg text-secondary-foreground space-y-8 leading-relaxed">
              <p className="text-xl font-subheading italic text-primary/80">
                "Great BBQ isn't just about the meat—it's about patience, respect for tradition,
                and an unwavering commitment to perfection."
              </p>
              <p>
                At The Iron Brand, we honor the time-tested traditions of Texas pit BBQ while elevating
                every aspect of the dining experience. Our custom-built smokers run 24/7, maintaining the
                perfect balance of hickory and oak smoke that transforms prime cuts into culinary art.
              </p>
              <p>
                Every brisket is hand-selected, every rub is crafted in-house, and every dish is prepared
                by artisans who understand that true barbecue cannot be rushed. This dedication to
                authenticity and excellence is what makes The Iron Brand more than a restaurant—it's a
                celebration of Texas heritage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Items Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-heading text-primary mb-6">Featured Selections</h2>
            <p className="text-xl text-muted-foreground font-subheading italic max-w-3xl mx-auto">
              Signature dishes that embody our commitment to exceptional quality and authentic Texas flavors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredItems.map((item, index) => (
              <Card key={item.name} className="bg-card shadow-dark hover:shadow-gold transition-all duration-500 overflow-hidden group">
                <div className="relative">
                  <div
                    className="h-64 bg-cover bg-center transition-transform duration-500"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge
                    className="absolute top-4 right-4 text-lg font-bold bg-primary text-primary-foreground"
                  >
                    {item.price}
                  </Badge>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-subheading font-semibold text-card-foreground mb-4">
                    {item.name}
                  </h3>
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

          <div className="text-center mt-12">
            <Link to="/menu">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 font-semibold"
              >
                View Full Menu
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-foreground">
            <div className="space-y-4">
              <MapPin className="h-12 w-12 text-primary mx-auto" />
              <h3 className="text-2xl font-subheading font-semibold">Locations</h3>
              <p className="text-foreground/80">
                456 Iron Works Drive
                Austin, TX 78704
              </p>
              <p className="text-foreground/80">
                123 Main Street
                Dallas, TX 75201
              </p>
              <p className="text-foreground/80">
                789 Commerce Street
                Houston, TX 77002
              </p>
            </div>

            <div className="space-y-4">
              <Clock className="h-12 w-12 text-primary mx-auto" />
              <h3 className="text-2xl font-subheading font-semibold">Hours</h3>
              <p className="text-foreground/80">
                Wed-Thu: 4pm-10pm
              </p>
              <p className="text-foreground/80">
                Fri-Sat: 11am-11pm
              </p>
              <p className="text-foreground/80">
                Sun: 11am-9pm
              </p>
            </div>

            <div className="space-y-4">
              <Phone className="h-12 w-12 text-primary mx-auto" />
              <h3 className="text-2xl font-subheading font-semibold">Contact</h3>
              <p className="text-foreground/80">
                <a href="tel:+15125554766" className="hover:text-primary transition-colors">
                  (512) 555-4766
                </a>
              </p>
              <p className="text-foreground/80">
                <a href="tel:+12145558899" className="hover:text-primary transition-colors">
                  (214) 555-8899
                </a>
              </p>
              <p className="text-foreground/80">
                <a href="tel:+17135552233" className="hover:text-primary transition-colors">
                  (713) 555-2233
                </a>
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/location">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-4 font-semibold"
              >
                Get Directions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card text-card-foreground py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">
            <div className="flex items-center justify-center space-x-3">
              <Flame className="h-8 w-8 text-primary" />
              <h3 className="text-3xl font-heading text-primary">The Iron Brand</h3>
            </div>

            <p className="text-lg font-subheading italic text-muted-foreground max-w-2xl mx-auto">
              "Where every meal is forged with fire, seasoned with tradition,
              and served with pride."
            </p>

            <div className="flex justify-center space-x-6">
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-primary hover:bg-primary/10"
              >
                <Instagram className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-primary hover:bg-primary/10"
              >
                <Facebook className="h-6 w-6" />
              </Button>
            </div>

            <div className="text-sm text-muted-foreground space-y-2">
              <p>456 Iron Works Drive, Austin, TX 78704 | (512) 555-IRON</p>
              <p>© 2025 The Iron Brand Smokehouse. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;