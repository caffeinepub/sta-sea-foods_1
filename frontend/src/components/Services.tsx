import { Snowflake, Fish, Truck, Thermometer, Clock, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    icon: Snowflake,
    title: 'Cold Storage Solutions',
    description:
      'State-of-the-art refrigeration systems maintaining optimal temperatures between -2°C and 4°C to preserve the freshness and quality of your fish stock.',
    highlight: '-2°C to 4°C',
    highlightLabel: 'Optimal Range',
  },
  {
    icon: Fish,
    title: 'Fish Handling & Preservation',
    description:
      'Expert handling protocols and preservation techniques that extend shelf life while maintaining the natural flavor, texture, and nutritional value of fresh fish.',
    highlight: 'HACCP',
    highlightLabel: 'Certified',
  },
  {
    icon: Truck,
    title: 'Distribution Support',
    description:
      'Seamless logistics coordination to ensure your fish products reach markets, restaurants, and retailers in perfect condition, on time, every time.',
    highlight: '24/7',
    highlightLabel: 'Operations',
  },
  {
    icon: Thermometer,
    title: 'Temperature Monitoring',
    description:
      'Continuous real-time temperature monitoring with automated alerts to guarantee your inventory is always stored under ideal conditions.',
    highlight: 'Real-time',
    highlightLabel: 'Monitoring',
  },
  {
    icon: Clock,
    title: 'Rapid Processing',
    description:
      'Swift intake and processing procedures minimize the time between catch and storage, ensuring maximum freshness is locked in from the moment fish arrives.',
    highlight: 'Fast',
    highlightLabel: 'Turnaround',
  },
  {
    icon: Award,
    title: 'Quality Assurance',
    description:
      'Rigorous quality checks at every stage of storage and handling, backed by industry certifications and a commitment to food safety standards.',
    highlight: 'ISO',
    highlightLabel: 'Standards',
  },
];

export default function Services() {
  return (
    <div className="bg-background py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-seafoam-100 text-seafoam-700 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-5">
            <Fish className="w-3.5 h-3.5" />
            What We Offer
          </div>
          <h2 className="font-serif font-bold text-navy-700 text-4xl sm:text-5xl mb-5">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Comprehensive cold storage and fish handling solutions designed to maintain the highest standards of freshness and quality for your business.
          </p>
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-16 bg-seafoam-400" />
            <Snowflake className="w-4 h-4 text-seafoam-400" />
            <div className="h-px w-16 bg-seafoam-400" />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="group border border-navy-100 bg-card hover:border-seafoam-300 hover:shadow-seafoam transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <CardContent className="p-7">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-navy-700 group-hover:bg-seafoam-400 flex items-center justify-center mb-5 transition-colors duration-300 shadow-navy">
                    <Icon className="w-7 h-7 text-seafoam-400 group-hover:text-navy-800 transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif font-bold text-navy-700 text-xl mb-3 group-hover:text-navy-800 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Highlight Badge */}
                  <div className="flex items-center gap-2">
                    <span className="bg-seafoam-100 text-seafoam-700 text-xs font-bold px-3 py-1 rounded-full">
                      {service.highlight}
                    </span>
                    <span className="text-navy-400 text-xs font-medium">{service.highlightLabel}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom wave decoration */}
        <div className="mt-16 flex justify-center">
          <svg width="200" height="20" viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0,10 C25,0 50,20 75,10 C100,0 125,20 150,10 C175,0 187,15 200,10"
              fill="none"
              stroke="oklch(0.72 0.12 175)"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
