import { ArrowRight, Award, Shield, Zap, Star, Users, Trophy, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import basketballLogo from '@/assets/basketball-logo.png';
import heroCourt from '@/assets/hero-court.jpg';

const Index = () => {
  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "Hand-crafted basketballs with premium materials and rigorous quality control."
    },
    {
      icon: Shield,
      title: "Professional Grade",
      description: "Used by professional leagues and trusted by athletes worldwide."
    },
    {
      icon: Zap,
      title: "Advanced Technology",
      description: "Innovative moisture-wicking and grip-enhancing technologies."
    },
    {
      icon: Star,
      title: "50+ Years Experience",
      description: "Five decades of basketball manufacturing expertise and innovation."
    }
  ];

  const testimonials = [
    {
      name: "Marcus Thompson",
      role: "NBA Player",
      quote: "HoopCraft basketballs have the perfect feel and consistency. They've been my go-to for years.",
      rating: 5
    },
    {
      name: "Sarah Chen",
      role: "College Coach",
      quote: "The quality is unmatched. Our team has been using HoopCraft balls for all our training sessions.",
      rating: 5
    },
    {
      name: "Mike Rodriguez",
      role: "Street Ball Legend",
      quote: "These balls perform just as well on outdoor courts. Incredible durability and grip.",
      rating: 5
    }
  ];

  const stats = [
    { number: "15M+", label: "Basketballs Crafted" },
    { number: "95+", label: "Countries Served" },
    { number: "500+", label: "Professional Teams" },
    { number: "50+", label: "Years of Excellence" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroCourt})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="mb-8 animate-fade-in-up">
            <img src={basketballLogo} alt="HoopCraft" className="w-24 h-24 mx-auto mb-6 basketball-bounce" />
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              HoopCraft
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Crafting Excellence, One Ball at a Time
          </p>
          
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            For over 50 years, we've been creating premium basketballs trusted by professional athletes, 
            coaches, and players worldwide. Experience the difference quality makes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <Button className="btn-hero">
              Explore Products <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="btn-outline-premium text-white border-white hover:bg-white hover:text-black">
              Watch Our Story
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose HoopCraft?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine traditional craftsmanship with cutting-edge technology to create 
              basketballs that perform at the highest level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="text-center shadow-elegant hover:shadow-premium transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 shadow-glow">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-white dark:bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Professional Grade Basketballs
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our basketballs are crafted with precision and attention to detail. Each ball undergoes 
                rigorous testing to ensure consistent performance, optimal grip, and long-lasting durability.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span className="text-foreground">Composite leather cover for superior feel</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span className="text-foreground">Deep channel design for enhanced grip</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span className="text-foreground">Moisture-wicking technology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span className="text-foreground">Official size and weight specifications</span>
                </div>
              </div>
              
              <Button className="btn-premium">
                View All Products <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            
            <div className="bg-gradient-primary rounded-2xl p-8 text-center text-white animate-slide-in-right shadow-premium">
              <div className="text-8xl mb-6">🏀</div>
              <h3 className="text-2xl font-bold mb-4">Professional Elite Series</h3>
              <p className="text-white/90 mb-6">
                The same basketballs used in professional leagues worldwide. 
                Experience the quality that champions trust.
              </p>
              <div className="inline-flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
                <Trophy className="w-5 h-5" />
                <span className="font-semibold">Pro Grade Quality</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Trusted by Champions
            </h2>
            <p className="text-xl text-muted-foreground">
              See what professional athletes and coaches say about HoopCraft basketballs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-premium transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardDescription className="text-base italic">
                    "{testimonial.quote}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Difference?</h2>
          <p className="text-xl text-white/80 mb-8">
            Join thousands of satisfied customers who trust HoopCraft for their basketball needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero bg-white text-black hover:bg-white/90">
              Shop Now <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="btn-outline-premium text-white border-white hover:bg-white hover:text-black">
              Request Custom Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
