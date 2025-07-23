import { Trophy, Star, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Professional Elite",
      category: "Professional",
      price: "$89.99",
      description: "Official size and weight basketball for professional play",
      features: ["Composite leather cover", "Deep channel design", "Moisture-wicking technology"],
      icon: Trophy,
      image: "🏀"
    },
    {
      id: 2,
      name: "Training Pro",
      category: "Training",
      price: "$64.99",
      description: "Durable basketball designed for intensive training sessions",
      features: ["Rubber compound cover", "Enhanced grip", "Indoor/outdoor use"],
      icon: Star,
      image: "🏀"
    },
    {
      id: 3,
      name: "Youth Champion",
      category: "Youth",
      price: "$39.99",
      description: "Perfect size basketball for young players learning the game",
      features: ["Size 5 specification", "Soft touch surface", "Lightweight design"],
      icon: Shield,
      image: "🏀"
    },
    {
      id: 4,
      name: "Street Legend",
      category: "Street",
      price: "$54.99",
      description: "Built tough for outdoor courts and street basketball",
      features: ["Durable rubber cover", "Deep pebbling", "Weather resistant"],
      icon: Zap,
      image: "🏀"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in-up">
            Premium Basketball Collection
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Discover our range of professionally crafted basketballs, designed for every level of play. 
            From street courts to professional arenas.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Products</h2>
            <p className="text-xl text-muted-foreground">Choose the perfect basketball for your game</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <Card key={product.id} className="shadow-elegant hover:shadow-premium transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader className="text-center">
                    <div className="text-6xl mb-4">{product.image}</div>
                    <div className="flex items-center justify-center mb-2">
                      <IconComponent className="w-5 h-5 text-primary mr-2" />
                      <span className="text-sm font-medium text-primary">{product.category}</span>
                    </div>
                    <CardTitle className="text-xl mb-2">{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <ul className="space-y-2">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">{product.price}</span>
                      <Button className="btn-premium">
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-secondary text-secondary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Basketball?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            We offer custom basketball manufacturing with your logo, colors, and specifications.
          </p>
          <Button className="btn-hero">
            Request Custom Quote
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Products;