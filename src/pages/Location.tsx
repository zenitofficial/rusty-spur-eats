import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone, ArrowLeft, Instagram, Facebook, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Location = () => {
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

      {/* Location Hero */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-heading text-primary mb-6">
            Visit Us
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto">
            Experience the authentic taste of Texas at our flagship smokehouse location
          </p>
        </div>
      </section>

      {/* Location Details */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-card shadow-dark">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <MapPin className="h-7 w-7 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-subheading font-semibold text-card-foreground mb-3">
                        Location
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        456 Iron Works Drive<br />
                        Austin, TX 78704<br />
                        United States
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 mb-6">
                    <Phone className="h-7 w-7 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-subheading font-semibold text-card-foreground mb-3">
                        Phone
                      </h3>
                      <a 
                        href="tel:+15125554766" 
                        className="text-lg text-primary hover:text-primary/80 transition-colors"
                      >
                        (512) 555-IRON
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="h-7 w-7 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-subheading font-semibold text-card-foreground mb-3">
                        Email
                      </h3>
                      <a 
                        href="mailto:info@ironbrandbbq.com" 
                        className="text-lg text-primary hover:text-primary/80 transition-colors"
                      >
                        info@ironbrandbbq.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card shadow-dark">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <Clock className="h-7 w-7 text-primary mt-1 flex-shrink-0" />
                    <div className="w-full">
                      <h3 className="text-2xl font-subheading font-semibold text-card-foreground mb-6">
                        Hours of Operation
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center py-2 border-b border-border/30">
                          <span className="text-lg font-medium text-card-foreground">Monday - Tuesday</span>
                          <span className="text-lg text-muted-foreground">Closed</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-border/30">
                          <span className="text-lg font-medium text-card-foreground">Wednesday - Thursday</span>
                          <span className="text-lg text-muted-foreground">4pm - 10pm</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-border/30">
                          <span className="text-lg font-medium text-card-foreground">Friday - Saturday</span>
                          <span className="text-lg text-muted-foreground">11am - 11pm</span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                          <span className="text-lg font-medium text-card-foreground">Sunday</span>
                          <span className="text-lg text-muted-foreground">11am - 9pm</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map Placeholder */}
            <div className="space-y-8">
              <Card className="bg-card shadow-dark overflow-hidden">
                <div className="h-96 bg-secondary/30 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                    <p className="text-lg text-muted-foreground font-subheading">
                      Interactive Map
                    </p>
                    <p className="text-sm text-muted-foreground/70 mt-2">
                      456 Iron Works Drive, Austin, TX 78704
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-card shadow-dark">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-subheading font-semibold text-card-foreground mb-6">
                    Follow Us
                  </h3>
                  <div className="space-y-4">
                    <p className="text-muted-foreground mb-6">
                      Stay connected for the latest updates, special events, and behind-the-scenes 
                      content from The Iron Brand Smokehouse.
                    </p>
                    <div className="flex space-x-4">
                      <Button 
                        variant="outline" 
                        size="lg"
                        className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        <Instagram className="h-5 w-5 mr-2" />
                        Instagram
                      </Button>
                      <Button 
                        variant="outline" 
                        size="lg"
                        className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        <Facebook className="h-5 w-5 mr-2" />
                        Facebook
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Directions Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading text-secondary-foreground mb-6">
            Getting Here
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-secondary-foreground/80 mb-8 leading-relaxed">
              Located in the heart of Austin's vibrant South Lamar district, The Iron Brand Smokehouse 
              is easily accessible from downtown Austin and surrounding areas. We offer complimentary 
              valet parking for dinner service and validated parking in the adjacent garage.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-secondary-foreground">
              <div>
                <h4 className="font-subheading font-semibold text-xl mb-2">From Downtown</h4>
                <p className="text-secondary-foreground/70">15 minutes via South Lamar Boulevard</p>
              </div>
              <div>
                <h4 className="font-subheading font-semibold text-xl mb-2">From Airport</h4>
                <p className="text-secondary-foreground/70">25 minutes via Highway 71</p>
              </div>
              <div>
                <h4 className="font-subheading font-semibold text-xl mb-2">Public Transit</h4>
                <p className="text-secondary-foreground/70">Bus Route 5 stops directly outside</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Location;