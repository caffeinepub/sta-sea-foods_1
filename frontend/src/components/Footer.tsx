import { Fish, Phone, Mail, MapPin } from 'lucide-react';

function scrollToSection(href: string) {
  const id = href.replace('#', '');
  const el = document.getElementById(id);
  if (el) {
    const navHeight = 72;
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-navy-200">
      {/* Top wave */}
      <div className="pointer-events-none">
        <svg viewBox="0 0 1440 50" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
          <path
            d="M0,25 C360,50 720,0 1080,25 C1260,37 1380,15 1440,25 L1440,0 L0,0 Z"
            fill="oklch(0.98 0.005 220)"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-full bg-seafoam-400/15 border border-seafoam-400/30 flex items-center justify-center overflow-hidden flex-shrink-0">
                <img
                  src="/assets/generated/sta-logo.dim_200x200.png"
                  alt="STA Sea Foods"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <Fish className="hidden w-5 h-5 text-seafoam-400" />
              </div>
              <div>
                <p className="font-serif font-bold text-white text-xl">STA Sea Foods</p>
                <p className="text-seafoam-400 text-xs tracking-widest uppercase">Fresh Fish Storage</p>
              </div>
            </div>
            <p className="text-navy-300 text-sm leading-relaxed max-w-sm mb-6">
              Your trusted partner in premium fresh fish storage and preservation. We maintain the highest standards to keep your catch at peak freshness from sea to table.
            </p>
            {/* Contact quick links */}
            <div className="space-y-2">
              <a href="tel:9791259640" className="flex items-center gap-2 text-navy-300 hover:text-seafoam-400 text-sm transition-colors">
                <Phone className="w-4 h-4 text-seafoam-400 flex-shrink-0" />
                9791259640
              </a>
              <a href="tel:9677871188" className="flex items-center gap-2 text-navy-300 hover:text-seafoam-400 text-sm transition-colors">
                <Phone className="w-4 h-4 text-seafoam-400 flex-shrink-0" />
                9677871188
              </a>
              <a href="mailto:fresh.sea.foods.sta@gmail.com" className="flex items-center gap-2 text-navy-300 hover:text-seafoam-400 text-sm transition-colors">
                <Mail className="w-4 h-4 text-seafoam-400 flex-shrink-0" />
                fresh.sea.foods.sta@gmail.com
              </a>
              <div className="flex items-start gap-2 text-navy-300 text-sm">
                <MapPin className="w-4 h-4 text-seafoam-400 flex-shrink-0 mt-0.5" />
                <span>Thuckalay, Kalkulam Taluk, Kanyakumari District, Tamil Nadu – 629175, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-white text-base mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-navy-300 hover:text-seafoam-400 text-sm transition-colors focus:outline-none"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-semibold text-white text-base mb-5">Services</h4>
            <ul className="space-y-3">
              {[
                'Cold Storage',
                'Fish Handling',
                'Preservation',
                'Distribution',
                'Quality Assurance',
              ].map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollToSection('#services')}
                    className="text-navy-300 hover:text-seafoam-400 text-sm transition-colors focus:outline-none"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-navy-700 pt-6">
          <div className="flex items-center justify-center text-xs text-navy-400">
            <p>© {year} STA Sea Foods. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
