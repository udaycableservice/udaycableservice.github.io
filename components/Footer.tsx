import { MapPin, Phone, Clock, Users } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Uday Cable Service</h3>
            <p className="text-gray-300 mb-4">
              Your trusted local digital cable provider serving Chennai since 1992.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Users className="h-4 w-4" />
              <span>1000+ Happy Customers</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">
                    No. 108, TTK Road, Alwarpet,
                    <br />
                    Chennai – 600018
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <a href="tel:9884165926" className="text-sm text-gray-300 hover:text-white transition-colors">
                  9884165926
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-blue-400" />
                <p className="text-sm text-gray-300">Mon - Sat: 10AM - 6PM</p>
              </div>
            </div>
          </div>
    
          <div>
            <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
              <div>Alwarpet</div>
              <div>R. A. Puram</div>
              <div>Teynampet</div>
              <div>Abhiramapuram</div>
              <div>TTK Road</div>
              <div>Seethamal Street</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2025 Uday Cable Service. All rights reserved. | Established 1992
          </p>
        </div>
      </div>
    </footer>
  );
}