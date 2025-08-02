"use client";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Tv,
  Signal,
  Award, 
  Shield, 
  Play,
  Volume2,
  Settings,
  Languages,
  Lock,
  Gamepad2,
  CheckCircle,
  TrendingUp,
  Zap,
  Star,
  Crown
} from 'lucide-react';
// import { motion } from 'framer-motion';
import AnimatedCard from '@/components/ui/animated-card';

export default function SCVPage() {
  const highlights = [
    "Tamil Nadu's leading MSO with over 2 decades of service",
    "Known for technological leadership and last-mile connectivity", 
    "Offers 300+ SD and 90+ HD channels",
    "Strong infrastructure ensures uninterrupted signal, regardless of weather",
    "First to launch HD set-top boxes in cable TV"
  ];

  const features = [
    { name: "HDMI output", icon: Play, color: "from-red-500 to-pink-500" },
    { name: "USB recording", icon: Volume2, color: "from-blue-500 to-cyan-500" },
    { name: "Pause/Play live TV", icon: Play, color: "from-green-500 to-teal-500" },
    { name: "Multi-language support", icon: Languages, color: "from-purple-500 to-indigo-500" },
    { name: "Parental lock", icon: Lock, color: "from-orange-500 to-red-500" },
    { name: "Learning remote (controls TV & STB)", icon: Gamepad2, color: "from-teal-500 to-blue-500" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(220, 38, 127, 0.9) 0%, rgba(59, 130, 246, 0.9) 50%, rgba(16, 185, 129, 0.9) 100%), url('https://t4.ftcdn.net/jpg/04/97/13/69/360_F_497136923_NbT98hBpgPqqp5Qh6saWulqEPGhdkkDa.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center mb-8"
            >
              <div className="p-6 bg-white bg-opacity-20 rounded-full backdrop-blur-sm border border-white border-opacity-30">
                <Crown className="h-16 w-16" />
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent"
            >
              SCV (Sumangali Cable Vision)
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-3xl mb-12 text-pink-100 font-light"
            >
              Tamil Nadu's leading MSO with over 2 decades of service
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-white border-opacity-30"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-4xl font-bold">300+</div>
                  <div className="text-sm text-pink-100">SD Channels</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold">90+</div>
                  <div className="text-sm text-pink-100">HD Channels</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold">20+</div>
                  <div className="text-sm text-pink-100">Years Service</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold">#1</div>
                  <div className="text-sm text-pink-100">MSO in TN</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-100 to-transparent rounded-full opacity-50 -translate-y-48 translate-x-48"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why SCV Stands Out</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-pink-600 via-blue-600 to-green-500 mx-auto mb-8 rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedCard delay={0.2}>
              <div className="space-y-6">
                {highlights.map((highlight, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-7 w-7 text-green-500 mt-1" />
                    </div>
                    <p className="text-gray-700 text-xl leading-relaxed font-medium">{highlight}</p>
                  </motion.div>
                ))}
              </div>
            </AnimatedCard>
            
            <AnimatedCard delay={0.4} direction="right">
              <div className="relative">
                <div 
                  className="rounded-3xl overflow-hidden shadow-2xl"
                  style={{
                    backgroundImage: `linear-gradient(135deg, rgba(220, 38, 127, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%), url('https://t4.ftcdn.net/jpg/04/97/13/69/360_F_497136923_NbT98hBpgPqqp5Qh6saWulqEPGhdkkDa.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '500px'
                  }}
                >
                  <div className="h-full flex flex-col justify-end p-8">
                    <div className="text-center mb-8">
                      <Star className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                      <h3 className="text-3xl font-bold text-white mb-4">Industry Leader</h3>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="bg-white/20 backdrop-blur-sm p-4 rounded-xl text-center"
                      >
                        <div className="text-3xl font-bold text-pink-300 mb-2">First</div>
                        <div className="text-sm text-white">HD set-top boxes in cable TV</div>
                      </motion.div>
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="bg-white/20 backdrop-blur-sm p-4 rounded-xl text-center"
                      >
                        <div className="text-3xl font-bold text-blue-300 mb-2">20+</div>
                        <div className="text-sm text-white">Years of Excellence</div>
                      </motion.div>
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="bg-white/20 backdrop-blur-sm p-4 rounded-xl text-center"
                      >
                        <div className="text-3xl font-bold text-green-300 mb-2">24/7</div>
                        <div className="text-sm text-white">Technical Support</div>
                      </motion.div>
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="bg-white/20 backdrop-blur-sm p-4 rounded-xl text-center"
                      >
                        <div className="text-3xl font-bold text-yellow-300 mb-2">100%</div>
                        <div className="text-sm text-white">Weather Proof</div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-white via-pink-50 to-blue-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Advanced Features</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-pink-600 via-blue-600 to-green-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Digital service with crystal-clear picture & cinema-quality surround sound
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <AnimatedCard key={index} delay={index * 0.1} className="group">
                  <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-pink-200 h-full">
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`flex items-center justify-center w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl mb-6 mx-auto shadow-lg`}
                    >
                    <Icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 text-center group-hover:text-pink-600 transition-colors">{feature.name}</h3>
                  </div>
                </AnimatedCard>
              );
            })}
          </div>

          {/* Special Feature Highlight */}
          <AnimatedCard delay={0.8}>
            <div className="mt-16 bg-gradient-to-r from-pink-600 via-blue-600 to-green-600 text-white p-10 rounded-3xl shadow-2xl">
              <div className="text-center">
                <Shield className="h-16 w-16 mx-auto mb-6" />
                <h3 className="text-3xl font-bold mb-6">Weather-Resistant Technology</h3>
                <p className="text-xl text-pink-100 max-w-3xl mx-auto font-light">
                Strong infrastructure ensures uninterrupted signal delivery regardless of weather conditions. 
                Experience consistent, high-quality entertainment throughout the year.
              </p>
            </div>
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Channel Package Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-pink-50 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-100 to-transparent rounded-full opacity-50 translate-y-48 -translate-x-48"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Channel Packages</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-pink-600 via-blue-600 to-green-500 mx-auto mb-8 rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedCard delay={0.2}>
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-10 rounded-3xl border-2 border-gray-200 shadow-xl"
              >
                <div className="text-center">
                  <Tv className="h-16 w-16 text-gray-600 mx-auto mb-6" />
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Standard Definition</h3>
                  <div className="text-5xl font-bold text-pink-600 mb-4">300+</div>
                <p className="text-gray-600">SD Channels</p>
              </div>
              </motion.div>
            </AnimatedCard>

            <AnimatedCard delay={0.4}>
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-pink-50 to-blue-50 p-10 rounded-3xl border-2 border-pink-200 shadow-xl"
              >
                <div className="text-center">
                  <Award className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">High Definition</h3>
                  <div className="text-5xl font-bold text-blue-600 mb-4">90+</div>
                <p className="text-gray-600">HD Channels</p>
              </div>
              </motion.div>
            </AnimatedCard>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-xl text-gray-600 mb-8 font-light">
              Comprehensive entertainment package covering all genres and languages
            </p>
            <motion.a
              href="tel:9884165926"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-pink-600 to-blue-600 text-white px-10 py-5 rounded-2xl font-bold hover:from-pink-700 hover:to-blue-700 transition-all duration-300 shadow-2xl hover:shadow-3xl inline-flex items-center space-x-3 text-lg"
            >
              <Zap className="h-6 w-6" />
              <span>Get SCV Connection</span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}