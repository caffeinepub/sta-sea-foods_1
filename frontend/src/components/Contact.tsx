import { Phone, Mail, Clock, MessageSquare, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const contactDetails = [
  {
    icon: Phone,
    title: 'Phone',
    primary: '9791259640',
    secondary: '9677871188',
    href: 'tel:9791259640',
    hrefLabel: 'Call Now',
  },
  {
    icon: Mail,
    title: 'Email',
    primary: 'fresh.sea.foods.sta@gmail.com',
    secondary: "We'll respond within 24 hours",
    href: 'mailto:fresh.sea.foods.sta@gmail.com',
    hrefLabel: 'Send Email',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    primary: 'Mon–Fri: 6AM – 6PM',
    secondary: 'Sat: 7AM – 2PM  |  Sun: Closed',
    href: null,
    hrefLabel: null,
  },
];

export default function Contact() {
  return (
    <div className="bg-background py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-seafoam-100 text-seafoam-700 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-5">
            <MessageSquare className="w-3.5 h-3.5" />
            Reach Out
          </div>
          <h2 className="font-serif font-bold text-navy-700 text-4xl sm:text-5xl mb-5">
            Contact Us
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            Have questions about our storage solutions or want to discuss your needs? We're here to help.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-16 bg-seafoam-400" />
            <Send className="w-4 h-4 text-seafoam-400" />
            <div className="h-px w-16 bg-seafoam-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {contactDetails.map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.title}
                className="group border border-navy-100 bg-card hover:border-seafoam-300 hover:shadow-seafoam transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-navy-700 group-hover:bg-seafoam-400 flex items-center justify-center mb-5 transition-colors duration-300 shadow-navy">
                    <Icon className="w-7 h-7 text-seafoam-400 group-hover:text-navy-800 transition-colors duration-300" />
                  </div>
                  <h3 className="font-serif font-bold text-navy-700 text-xl mb-2">{item.title}</h3>
                  <p className="text-navy-600 font-semibold text-base mb-1">{item.primary}</p>
                  <p className="text-muted-foreground text-sm mb-4">{item.secondary}</p>
                  {item.href && item.hrefLabel && (
                    <a
                      href={item.href}
                      className="inline-flex items-center gap-1.5 text-seafoam-600 hover:text-seafoam-700 text-sm font-semibold transition-colors border-b border-seafoam-300 hover:border-seafoam-500 pb-0.5"
                    >
                      {item.hrefLabel}
                    </a>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-navy-700 p-10 lg:p-14 text-center">
          {/* Background wave pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="contact-wave" x="0" y="0" width="100" height="50" patternUnits="userSpaceOnUse">
                  <path
                    d="M0,25 C12.5,10 25,40 50,25 C75,10 87.5,40 100,25"
                    fill="none"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#contact-wave)" />
            </svg>
          </div>

          <div className="relative z-10">
            <div className="w-16 h-16 rounded-full bg-seafoam-400/20 border-2 border-seafoam-400/40 flex items-center justify-center mx-auto mb-6">
              <Phone className="w-7 h-7 text-seafoam-400" />
            </div>
            <h3 className="font-serif font-bold text-white text-3xl sm:text-4xl mb-4">
              Ready to Store with Us?
            </h3>
            <p className="text-navy-200 text-lg max-w-xl mx-auto mb-8">
              Contact our team today to discuss your cold storage requirements and get a customized solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:9791259640"
                className="inline-flex items-center justify-center gap-2 bg-seafoam-400 hover:bg-seafoam-300 text-navy-800 font-semibold text-base px-8 py-3.5 rounded-full shadow-seafoam hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4" />
                Call 9791259640
              </a>
              <a
                href="mailto:fresh.sea.foods.sta@gmail.com"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-medium text-base px-8 py-3.5 rounded-full transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
