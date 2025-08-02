"use client";
import { 
  Monitor, 
  Shield, 
  Search, 
  Calendar,
  Lock,
  List,
  CheckCircle,
  Zap,
  Cloud,
  Star,
  Settings
} from 'lucide-react';

import { motion, AnimatePresence } from "framer-motion";

export default function VKDigitalPage() {
  const highlights = [
    "Offers cutting-edge digital cable TV with HD video and Dolby Digital 5.1 sound",
    "Provides 400+ channels across various genres and languages", 
    "Offers a value-for-money experience",
    "1080i HD video resolution",
    "Weather-proof service—unaffected by rain"
  ];

  const epgFeatures = [
    { name: "Genre-based listings", icon: List },
    { name: "Program search", icon: Search },
    { name: "Parental controls", icon: Lock },
    { name: "Reminder features", icon: Calendar }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-500 via-red-500 to-rose-600 text-white py-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <motion.div 
          initial={{ backgroundPositionX: "200%" }}
          animate={{ backgroundPositionX: "0%" }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          style={{ backgroundSize: "200% 100%" }}
        ></motion.div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div 
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="flex justify-center mb-6"
            >
              <div className="p-6 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl shadow-2xl">
                <Monitor className="h-16 w-16 text-white" />
              </div>
            </motion.div>
            <motion.h1 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-amber-200"
            >
              VK Digital
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-2xl md:text-3xl mb-8 text-amber-100 font-light"
            >
              Cutting-edge digital cable TV with HD video and Dolby Digital 5.1 sound
            </motion.p>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">400+</div>
                  <div className="text-sm text-blue-100">Channels</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">1080i</div>
                  <div className="text-sm text-blue-100">HD Resolution</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">5.1</div>
                  <div className="text-sm text-blue-100">Dolby Digital</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Value-for-Money Excellence</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl">
              <div className="text-center mb-6">
                <Star className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">Premium Features</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <Monitor className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-medium text-gray-900">1080i HD</div>
                  <div className="text-sm text-gray-600">Crystal Clear Video</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-medium text-gray-900">Weather Proof</div>
                  <div className="text-sm text-gray-600">Unaffected by Rain</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <Settings className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-medium text-gray-900">Advanced EPG</div>
                  <div className="text-sm text-gray-600">Smart Programming</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <Star className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-medium text-gray-900">Value Pricing</div>
                  <div className="text-sm text-gray-600">Best ROI</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EPG Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Advanced Electronic Programming Guide</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Navigate your entertainment with intelligent programming features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {epgFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.name}</h3>
                </div>
              );
            })}
          </div>

          {/* EPG Demo Section */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-teal-600 text-white p-8 rounded-2xl">
            <div className="text-center mb-8">
              <List className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Smart TV Guide Experience</h3>
              <p className="text-lg text-blue-100 max-w-3xl mx-auto">
                VK Digital's EPG makes finding and managing your favorite content effortless
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
                <Search className="h-8 w-8 mb-4" />
                <h4 className="text-lg font-semibold mb-2">Intelligent Search</h4>
                <p className="text-blue-100">
                  Find programs by title, actor, genre, or keyword across all 400+ channels
                </p>
              </div>
              
              <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
                <Calendar className="h-8 w-8 mb-4" />
                <h4 className="text-lg font-semibold mb-2">Smart Reminders</h4>
                <p className="text-blue-100">
                  Never miss your favorite shows with automatic notifications and scheduling
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Channel Diversity Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">400+ Channels of Entertainment</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Diverse content across various genres and languages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { genre: "Entertainment", count: "80+" },
              { genre: "Movies", count: "60+" },
              { genre: "Sports", count: "40+" },
              { genre: "News", count: "50+" },
              { genre: "Kids", count: "30+" },
              { genre: "Music", count: "25+" },
              { genre: "Regional", count: "70+" },
              { genre: "Documentary", count: "20+" },
              { genre: "Lifestyle", count: "15+" },
              { genre: "Religious", count: "10+" }
            ].map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-xl text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">{category.count}</div>
                <div className="text-gray-700 font-medium">{category.genre}</div>
              </div>
            ))}
          </div>

          {/* Weather Resistance Highlight */}
          <div className="mt-12 bg-gray-50 p-8 rounded-2xl">
            <div className="text-center">
              <Cloud className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">All-Weather Reliability</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
                VK Digital's weather-proof technology ensures uninterrupted entertainment regardless of monsoons or storms. 
                Enjoy consistent service throughout the year.
              </p>
              <div className="flex justify-center items-center space-x-8">
                <div className="text-center">
                  <Shield className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <div className="text-sm font-medium text-gray-700">Rain Resistant</div>
                </div>
                <div className="text-center">
                  <Zap className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <div className="text-sm font-medium text-gray-700">Storm Proof</div>
                </div>
                <div className="text-center">
                  <Star className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <div className="text-sm font-medium text-gray-700">24/7 Service</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="tel:9884165926"
              className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-600 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
            >
              <Monitor className="h-5 w-5" />
              <span>Get VK Digital Connection</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}