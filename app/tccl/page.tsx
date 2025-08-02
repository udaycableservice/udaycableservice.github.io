
// import { 
//   Network, 
//   Users, 
//   Award, 
//   Shield, 
//   Play,
//   Gamepad2,
//   ShoppingCart,
//   Lock,
//   CheckCircle,
//   Zap,
//   Globe,
//   Layers
// } from 'lucide-react';
"use client";
import { 
  Network,
  Play,
  Gamepad2,
  Lock,
  Globe,
  CheckCircle,
  ShoppingCart,
  Users,
  Zap,
  Layers
} from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

export default function TCCLPage() {
  const highlights = [
    "Serving 3+ million households via 8000+ cable operators",
    "Operational in Tamil Nadu, Andhra Pradesh & Karnataka", 
    "Offers 500 digital channels with high-quality sound and video",
    "Backbone includes 8500 KM fibre optic network",
    "Originated from the Tamil Nadu Cable TV Operators Welfare Association"
  ];

  // Import required icons at the top of the file
  // import { 
  //   Network,
  //   Play,
  //   Gamepad2,
  //   Lock,
  //   Globe,
  //   CheckCircle,
  //   ShoppingCart,
  //   Users,
  //   Zap,
  //   Layers
  // } from 'lucide-react';

  const features = [
    { name: "High-end Digital Head End & DAS support", icon: Network },
    { name: "HD & 3D content support", icon: Play },
    { name: "Future upgrades (VOD, e-commerce, gaming)", icon: Gamepad2 },
    { name: "Secure Conditional Access System (CAS)", icon: Lock }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-800 via-purple-700 to-pink-600 text-white py-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div 
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="flex justify-center mb-6"
            >
              <div className="p-6 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl shadow-xl">
                <Network className="h-16 w-16 text-white" />
              </div>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200"
            >
              TCCL
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-2xl md:text-3xl mb-4 text-purple-200 font-light"
            >
              Thamizhaga Cable TV Communication Ltd
            </motion.p>
            <p className="text-lg mb-8 text-blue-200">
              Serving 3+ million households via 8000+ cable operators
            </p>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">3M+</div>
                  <div className="text-sm text-blue-100">Households</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">8000+</div>
                  <div className="text-sm text-blue-100">Cable Operators</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">500</div>
                  <div className="text-sm text-blue-100">Digital Channels</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">8500</div>
                  <div className="text-sm text-blue-100">KM Fiber Network</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Network Infrastructure Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Massive Network Infrastructure</h2>
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
                <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">Pan-South India Coverage</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">Tamil Nadu</span>
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">Andhra Pradesh</span>
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">  
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">Karnataka</span>
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Advanced Technology Features</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Technologically superior set-top boxes with future-ready capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900">{feature.name}</h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Future Upgrades Highlight */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-teal-600 text-white p-8 rounded-2xl">
            <div className="text-center mb-8">
              <Layers className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Future-Ready Platform</h3>
              <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
                TCCL's platform is designed for continuous evolution with upcoming features
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm text-center">
                <Play className="h-8 w-8 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Video On Demand</h4>
                <p className="text-sm text-blue-100">Watch what you want, when you want</p>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm text-center">
                <ShoppingCart className="h-8 w-8 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">E-Commerce</h4>
                <p className="text-sm text-blue-100">Shop directly from your TV</p>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm text-center">
                <Gamepad2 className="h-8 w-8 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Gaming</h4>
                <p className="text-sm text-blue-100">Interactive entertainment experiences</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Network Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Network Statistics</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">3M+</div>
                <p className="text-gray-600">Households Served</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl">
                <Network className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">8000+</div>
                <p className="text-gray-600">Cable Operators</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl">
                <Play className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">500</div>
                <p className="text-gray-600">Digital Channels</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl">
                <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">8500</div>
                <p className="text-gray-600">KM Fiber Network</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Experience the power of TCCL's extensive network infrastructure
            </p>
            <a
              href="tel:9884165926"
              className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-600 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
            >
              <Network className="h-5 w-5" />
              <span>Get TCCL Connection</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}