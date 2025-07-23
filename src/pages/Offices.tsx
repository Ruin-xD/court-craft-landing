import { MapPin, Phone, Mail, Clock, Users, Building } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Offices = () => {
  const offices = [
    {
      id: 1,
      name: "Global Headquarters",
      address: "123 Basketball Avenue, Sports City, SC 12345",
      phone: "+1 (555) 123-4567",
      email: "headquarters@hoopcraft.com",
      hours: "Mon-Fri: 8:00 AM - 6:00 PM",
      employees: "150+ employees",
      description: "Our main facility houses our design team, manufacturing operations, and executive offices."
    },
    {
      id: 2,
      name: "West Coast Operations",
      address: "456 Pacific Drive, Los Angeles, CA 90210",
      phone: "+1 (555) 987-6543",
      email: "westcoast@hoopcraft.com",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM",
      employees: "85+ employees",
      description: "Focused on distribution and customer service for the western United States."
    },
    {
      id: 3,
      name: "European Division",
      address: "789 Champions Boulevard, London, UK EC1A 1BB",
      phone: "+44 20 7946 0958",
      email: "europe@hoopcraft.com",
      hours: "Mon-Fri: 9:00 AM - 5:30 PM",
      employees: "60+ employees",
      description: "Serving our European markets with localized manufacturing and distribution."
    },
    {
      id: 4,
      name: "Asia-Pacific Hub",
      address: "321 Rising Sun Street, Tokyo, Japan 100-0001",
      phone: "+81 3-1234-5678",
      email: "asiapacific@hoopcraft.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM",
      employees: "95+ employees",
      description: "Manufacturing and distribution center for the Asia-Pacific region."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in-up">
            Our Global Presence
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            With offices and manufacturing facilities around the world, we're committed to bringing 
            premium basketballs to players everywhere.
          </p>
        </div>
      </section>

      {/* Offices Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Office Locations</h2>
            <p className="text-xl text-muted-foreground">Find the HoopCraft location nearest to you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <Card key={office.id} className="shadow-elegant hover:shadow-premium transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{office.name}</CardTitle>
                    <Building className="w-6 h-6 text-primary" />
                  </div>
                  <CardDescription>{office.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{office.address}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <span className="text-sm text-muted-foreground">{office.phone}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <span className="text-sm text-muted-foreground">{office.email}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-sm text-muted-foreground">{office.hours}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-primary" />
                      <span className="text-sm text-muted-foreground">{office.employees}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">Find Us Worldwide</h2>
          <div className="bg-card rounded-xl p-8 shadow-elegant">
            <div className="h-64 bg-gradient-primary rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <MapPin className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                <p className="text-white/80">Explore our global locations</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offices;