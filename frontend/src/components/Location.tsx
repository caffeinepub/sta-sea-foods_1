import { MapPin, Navigation, Building2, Clock, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const LAT = 8.120236;
const LNG = 77.454371;
const ZOOM = 15;

// Bounding box: ~0.01 degrees around the point for a nice close view
const BBOX = `${LNG - 0.01},${LAT - 0.01},${LNG + 0.01},${LAT + 0.01}`;
const MAP_SRC = `https://www.openstreetmap.org/export/embed.html?bbox=${BBOX}&layer=mapnik&marker=${LAT},${LNG}`;
const DIRECTIONS_URL = `https://www.openstreetmap.org/?mlat=${LAT}&mlon=${LNG}#map=${ZOOM}/${LAT}/${LNG}`;

export default function Location() {
  return (
    <div className="bg-navy-700 py-20 lg:py-28 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wave-pattern" x="0" y="0" width="80" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M0,20 C10,10 20,30 40,20 C60,10 70,30 80,20"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave-pattern)" />
        </svg>
      </div>

      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path
            d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,20 1440,30 L1440,0 L0,0 Z"
            fill="oklch(0.98 0.005 220)"
          />
        </svg>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path
            d="M0,30 C360,0 720,60 1080,30 C1260,15 1380,45 1440,30 L1440,60 L0,60 Z"
            fill="oklch(0.98 0.005 220)"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-seafoam-400/15 border border-seafoam-400/30 text-seafoam-300 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-5">
            <MapPin className="w-3.5 h-3.5" />
            Find Us
          </div>
          <h2 className="font-serif font-bold text-white text-4xl sm:text-5xl mb-5">
            Our Location
          </h2>
          <p className="text-navy-200 text-lg max-w-xl mx-auto">
            Conveniently located at the harbor for easy access to fresh catches and efficient distribution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Interactive Map */}
          <Card className="bg-navy-800/60 border-navy-600 overflow-hidden flex flex-col">
            <CardContent className="p-0 flex-1 flex flex-col">
              {/* Map header bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-navy-900/60 border-b border-navy-600">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-seafoam-400 animate-pulse" />
                  <span className="text-white text-sm font-medium">STA Sea Foods — Live Map</span>
                </div>
                <a
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-seafoam-400 hover:text-seafoam-300 text-xs font-medium transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                  Open in OSM
                </a>
              </div>

              {/* Leaflet/OSM iframe */}
              <div className="relative flex-1 min-h-[250px] sm:min-h-[360px]">
                <iframe
                  title="STA Sea Foods Location Map"
                  src={MAP_SRC}
                  sandbox="allow-scripts allow-same-origin"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 'none' }}
                  loading="lazy"
                  allowFullScreen
                />
              </div>

              {/* Map footer */}
              <div className="flex items-center justify-between px-4 py-2 bg-navy-900/40 border-t border-navy-600">
                <span className="text-navy-400 text-xs">
                  © <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer" className="hover:text-seafoam-400 transition-colors">OpenStreetMap</a> contributors
                </span>
                <span className="text-navy-400 text-xs font-mono">
                  {LAT.toFixed(6)}, {LNG.toFixed(6)}
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Address & Info */}
          <div className="flex flex-col gap-5">
            {/* Address Card */}
            <Card className="bg-navy-800/60 border-navy-600 hover:border-seafoam-400/40 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-seafoam-400/15 border border-seafoam-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Building2 className="w-5 h-5 text-seafoam-400" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-white text-lg mb-2">Facility Address</h3>
                    <p className="text-navy-200 leading-relaxed">
                      Thuckalay<br />
                      Kalkulam Taluk<br />
                      Kanyakumari District<br />
                      Tamil Nadu – 629175<br />
                      India
                    </p>
                    <a
                      href={DIRECTIONS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-seafoam-400 hover:text-seafoam-300 text-sm font-medium mt-3 transition-colors"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      Get Directions
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Operating Hours */}
            <Card className="bg-navy-800/60 border-navy-600 hover:border-seafoam-400/40 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-seafoam-400/15 border border-seafoam-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5 text-seafoam-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif font-semibold text-white text-lg mb-3">Operating Hours</h3>
                    <div className="space-y-2">
                      {[
                        { day: 'Monday – Friday', hours: '6:00 AM – 6:00 PM' },
                        { day: 'Saturday', hours: '7:00 AM – 2:00 PM' },
                        { day: 'Sunday', hours: 'Closed' },
                      ].map(({ day, hours }) => (
                        <div key={day} className="flex justify-between items-center">
                          <span className="text-navy-300 text-sm">{day}</span>
                          <span className={`text-sm font-medium ${hours === 'Closed' ? 'text-navy-400' : 'text-seafoam-300'}`}>
                            {hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Landmark note */}
            <Card className="bg-seafoam-400/10 border-seafoam-400/25">
              <CardContent className="p-5">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-seafoam-400 flex-shrink-0" />
                  <p className="text-navy-100 text-sm">
                    <span className="font-semibold text-seafoam-300">Easy to find:</span>{' '}
                    Located in Thuckalay, Kanyakumari District — near the main harbor entrance. Look for our seafoam green signage.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
