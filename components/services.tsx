import { Sparkles, Zap, Heart } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const services = [
  {
    icon: Sparkles,
    title: 'Premium Cleaning',
    description: 'Advanced stain removal and deep cleaning techniques for all fabric types',
  },
  {
    icon: Zap,
    title: 'Quick Turnaround',
    description: 'Fast service without compromising on quality—ready when you need it',
  },
  {
    icon: Heart,
    title: 'Fabric Care',
    description: 'Specialized care for delicate and premium fabrics with eco-friendly solutions',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20  bg-linear-to-t from-slate-100 to-blue-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Our Services
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional laundry solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border-border bg-card hover:shadow-lg transition-shadow">
                <CardContent className="">
                  <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h4>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
