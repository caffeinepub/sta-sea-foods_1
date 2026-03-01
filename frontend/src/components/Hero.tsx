import { ArrowDown, Fish, Snowflake, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

function scrollToSection(href: string) {
  const id = href.replace('#', '');
  const el = document.getElementById(id);
  if (el) {
    const navHeight = 72;
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-bg.dim_1440x600.png"
          alt="Fresh fish in cold storage"
          className="w-full h-full object-cover object-center"
        />
        {/* Navy gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/85 via-navy-800/75 to-navy-900/90" />
        {/* Subtle radial highlight */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.72_0.12_175/0.08)_0%,transparent_70%)]" />
      </div>

      {/* Animated wave pattern overlay */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path
            d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"
            fill="oklch(0.98 0.005 220)"
            fillOpacity="1"
          />
          <path
            d="M0,80 C360,40 720,100 1080,60 C1260,40 1380,70 1440,80 L1440,120 L0,120 Z"
            fill="oklch(0.98 0.005 220)"
            fillOpacity="0.5"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-4 sm:px-6 lg:px-8 pt-24 pb-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-seafoam-400/15 border border-seafoam-400/30 text-seafoam-300 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
          <Snowflake className="w-3.5 h-3.5" />
          Premium Cold Storage Facility
        </div>

        {/* Main Heading */}
        <h1 className="font-serif font-bold text-white text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-tight mb-6 max-w-5xl">
          <span className="block">STA</span>
          <span className="block text-gradient-seafoam">Sea Foods</span>
        </h1>

        {/* Tagline */}
        <p className="text-navy-100 text-lg sm:text-xl lg:text-2xl font-light max-w-2xl mb-4 leading-relaxed">
          Your trusted partner in{' '}
          <span className="text-seafoam-300 font-medium">fresh fish storage</span>{' '}
          and preservation excellence.
        </p>
        <p className="text-navy-200/80 text-base sm:text-lg max-w-xl mb-12">
          State-of-the-art cold storage solutions keeping your catch at peak freshness from sea to table.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center mb-16">
          <Button
            onClick={() => scrollToSection('#contact')}
            className="bg-seafoam-400 hover:bg-seafoam-300 text-navy-800 font-semibold text-base px-8 py-6 rounded-full shadow-seafoam hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            size="lg"
          >
            Contact Us Today
          </Button>
          <Button
            onClick={() => scrollToSection('#services')}
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-medium text-base px-8 py-6 rounded-full backdrop-blur-sm transition-all duration-300"
            size="lg"
          >
            Our Services
          </Button>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
          {[
            { icon: Fish, label: 'Fresh Fish', value: 'Daily' },
            { icon: Snowflake, label: 'Temperature', value: '-2°C to 4°C' },
            { icon: Shield, label: 'Quality', value: 'Guaranteed' },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-full bg-seafoam-400/20 border border-seafoam-400/30 flex items-center justify-center mb-1">
                <Icon className="w-5 h-5 text-seafoam-400" />
              </div>
              <span className="text-white font-semibold text-sm">{value}</span>
              <span className="text-navy-300 text-xs">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <button
          onClick={() => scrollToSection('#services')}
          className="flex flex-col items-center gap-1 text-white/50 hover:text-seafoam-400 transition-colors focus:outline-none"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
