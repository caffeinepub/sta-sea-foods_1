import { useState, useEffect } from 'react';
import { Menu, X, Fish } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
];

function scrollToSection(href: string) {
  const id = href.replace('#', '');
  const el = document.getElementById(id);
  if (el) {
    const navHeight = 72;
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-700 shadow-navy-lg'
          : 'bg-navy-700/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo & Brand */}
          <button
            onClick={() => scrollToSection('#home')}
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="STA Sea Foods - Go to top"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-seafoam-400/20 border-2 border-seafoam-400/40 flex items-center justify-center flex-shrink-0">
              <img
                src="/assets/generated/sta-logo.dim_200x200.png"
                alt="STA Sea Foods Logo"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <Fish className="hidden w-5 h-5 text-seafoam-400" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-serif font-bold text-white text-lg tracking-wide group-hover:text-seafoam-300 transition-colors">
                STA Sea Foods
              </span>
              <span className="text-seafoam-400 text-[10px] font-medium tracking-widest uppercase">
                Fresh Fish Storage
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-2 text-sm font-medium text-navy-100 hover:text-seafoam-400 hover:bg-white/5 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-seafoam-400/50"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('#contact')}
              className="ml-3 bg-seafoam-400 hover:bg-seafoam-500 text-navy-800 font-semibold text-sm px-5 py-2 rounded-full shadow-seafoam transition-all duration-200 hover:shadow-lg"
            >
              Get in Touch
            </Button>
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10 hover:text-seafoam-400"
                  aria-label="Open menu"
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-navy-700 border-navy-600 w-72 p-0">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-6 border-b border-navy-600">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-seafoam-400/20 border border-seafoam-400/40 flex items-center justify-center overflow-hidden">
                        <img
                          src="/assets/generated/sta-logo.dim_200x200.png"
                          alt="STA Sea Foods"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling?.classList.remove('hidden');
                          }}
                        />
                        <Fish className="hidden w-4 h-4 text-seafoam-400" />
                      </div>
                      <span className="font-serif font-bold text-white">STA Sea Foods</span>
                    </div>
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon" className="text-navy-200 hover:text-white hover:bg-white/10">
                        <X className="w-5 h-5" />
                      </Button>
                    </SheetClose>
                  </div>
                  <nav className="flex flex-col p-4 gap-1 flex-1">
                    {navLinks.map((link) => (
                      <SheetClose key={link.href} asChild>
                        <button
                          onClick={() => scrollToSection(link.href)}
                          className="w-full text-left px-4 py-3 text-base font-medium text-navy-100 hover:text-seafoam-400 hover:bg-white/5 rounded-lg transition-all duration-200"
                        >
                          {link.label}
                        </button>
                      </SheetClose>
                    ))}
                  </nav>
                  <div className="p-4 border-t border-navy-600">
                    <SheetClose asChild>
                      <Button
                        onClick={() => scrollToSection('#contact')}
                        className="w-full bg-seafoam-400 hover:bg-seafoam-500 text-navy-800 font-semibold rounded-full"
                      >
                        Get in Touch
                      </Button>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
