import { Award, Target, Users, Heart, Calendar, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Every basketball meets our rigorous quality standards through precision manufacturing and testing."
    },
    {
      icon: Target,
      title: "Innovation Focus",
      description: "Continuously advancing basketball technology to enhance player performance and game experience."
    },
    {
      icon: Users,
      title: "Player-Centric",
      description: "We design with players in mind, from weekend warriors to professional athletes."
    },
    {
      icon: Heart,
      title: "Passion for the Game",
      description: "Basketball isn't just our business—it's our passion, driving everything we do."
    }
  ];

  const milestones = [
    { year: "1974", event: "HoopCraft founded with a vision to create the perfect basketball" },
    { year: "1985", event: "Became official supplier for regional basketball leagues" },
    { year: "1998", event: "Expanded internationally with first European facility" },
    { year: "2005", event: "Launched innovative moisture-wicking technology" },
    { year: "2015", event: "Reached 10 million basketballs manufactured milestone" },
    { year: "2024", event: "Leading the industry with sustainable manufacturing practices" }
  ];

  const stats = [
    { number: "50+", label: "Years of Excellence" },
    { number: "15M+", label: "Basketballs Crafted" },
    { number: "95+", label: "Countries Served" },
    { number: "500+", label: "Team Members" }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in-up">
            Crafting Excellence Since 1974
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            For over five decades, HoopCraft has been dedicated to creating the finest basketballs 
            in the world, trusted by players at every level of the game.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-secondary">
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

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                HoopCraft was born from a simple belief: every player deserves a basketball that performs 
                as passionately as they do. Founded in 1974 by former college basketball player Marcus Johnson, 
                our company started in a small workshop with a big dream.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Marcus noticed that the basketballs of his era lacked consistency and durability. He set out 
                to create a ball that would maintain its grip, bounce, and feel throughout countless games. 
                This pursuit of perfection became the foundation of our company.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we continue that legacy of innovation and quality, crafting basketballs that have 
                been dribbled in gyms, streetcourts, and professional arenas around the world.
              </p>
            </div>
            <div className="bg-gradient-primary rounded-xl p-8 text-white animate-slide-in-right">
              <div className="text-center">
                <div className="text-6xl mb-4">🏀</div>
                <h3 className="text-2xl font-bold mb-4">50 Years of Craftsmanship</h3>
                <p className="text-white/90">
                  From our humble beginnings to becoming a global leader, our commitment to quality 
                  has never wavered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center shadow-elegant hover:shadow-premium transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">Key milestones in our company's history</p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center space-x-6 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-card rounded-lg p-6 shadow-elegant">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                      <TrendingUp className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <p className="text-muted-foreground mt-2">{milestone.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;