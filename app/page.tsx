"use client";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Satellite,
  Tv2,
  Users, 
  Award, 
  Shield, 
  Zap, 
  Heart,
  CheckCircle,
  Play,
  Pause,
  Volume2,
  Settings,
  Smartphone,
  MapPin,
  Clock,
  Wifi,
  Signal,
  Star,
  TrendingUp
} from 'lucide-react';
// import { motion } from 'framer-motion';
import AnimatedCard from '@/components/ui/animated-card';
import FloatingElements from '@/components/ui/floating-elements';
import { use } from 'react';

export default function Home() {
  const offerings = [
    {
      title: "Seamless Digital Cable TV Services",
      description: "Crystal clear picture quality and rich audio",
      icon: Tv2,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Integrated MSO Access", 
      description: "Top MSOs like SCV, TCCL, and VK Digital providing 4K resolution and Dolby Atmos",
      icon: Award,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Flexible Channel Packages",
      description: "Tailored packages for entertainment, sports, movies, and regional content", 
      icon: Settings,
      gradient: "from-green-500 to-teal-500"
    }
  ];

  const stbFeatures = [
    { name: "HD and 4K support", icon: Play, color: "text-red-500" },
    { name: "USB Recording", icon: Volume2, color: "text-blue-500" },
    { name: "Pause & Play Live TV", icon: Pause, color: "text-green-500" },
    { name: "Multi-language audio options", icon: Wifi, color: "text-purple-500" },
    { name: "Parental controls", icon: Shield, color: "text-orange-500" }
  ];

  const strengths = [
    {
      title: "Local Expertise",
      description: "Personal support with quick installation, service, and customer care",
      icon: Users,
      gradient: "from-blue-400 to-blue-600"
    },
    {
      title: "Uninterrupted Service", 
      description: "Weather-resistant digital cable connection",
      icon: Shield,
      gradient: "from-green-400 to-green-600"
    },
    {
      title: "Affordable Plans",
      description: "Value-driven plans for every household",
      icon: Heart,
      gradient: "from-pink-400 to-pink-600"
    },
    {
      title: "Reliable Infrastructure",
      description: "Dedicated last-mile connectivity across the region",
      icon: Signal,
      gradient: "from-purple-400 to-purple-600"
    }
  ];

  const whyChoose = [
    "30+ Years of Experience",
    "Strong Community Trust & Support", 
    "Access to Leading MSO Technology",
    "Prompt Customer Support & Maintenance",
    "Expanding Coverage Across South Chennai"
  ];

  const serviceAreas = ["Alwarpet", "R. A. Puram", "Teynampet", "Abhiramapuram", "TTK Road", "Seethamal Street"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(59, 130, 246, 0.9) 0%, rgba(147, 51, 234, 0.9) 50%, rgba(6, 182, 212, 0.9) 100%), url('https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        
        {/* Floating Elements */}
        <FloatingElements />
        
        {/* Content */}
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
                <Satellite className="h-16 w-16" />
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent"
            >
              Welcome to Uday Cable Service
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-3xl mb-12 text-blue-100 font-light"
            >
              Your Trusted Local Digital Cable Provider Since 1992
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <motion.a
                href="tel:9884165926"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-3xl backdrop-blur-sm"
              >
                Call Now: 9884165926
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-10 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 backdrop-blur-sm"
              >
                Explore Services
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-transparent rounded-full opacity-50 -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-100 to-transparent rounded-full opacity-50 translate-y-48 -translate-x-48"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Us</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 mx-auto mb-8 rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedCard delay={0.2}>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Established in 1992, Uday Cable Service is one of the most trusted Local Cable Operators (LCO) in Chennai.
              </p>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Headquartered at No. 108, TTK Road, Alwarpet, Chennai – 600018, we have built a strong presence for over three decades.
              </p>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                We proudly serve 1000+ active customers across Alwarpet and surrounding areas.
              </p>
              
              <div className="grid grid-cols-3 gap-6">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-white rounded-xl shadow-lg"
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">30+</div>
                  <div className="text-sm text-gray-600 font-medium">Years Experience</div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-white rounded-xl shadow-lg"
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">1000+</div>
                  <div className="text-sm text-gray-600 font-medium">Happy Customers</div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-white rounded-xl shadow-lg"
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">3</div>
                  <div className="text-sm text-gray-600 font-medium">MSO Partners</div>
                </motion.div>
              </div>
            </AnimatedCard>
            
            <AnimatedCard delay={0.4} direction="right">
              <div className="relative">
                <div 
                  className="rounded-2xl overflow-hidden shadow-2xl"
                  style={{
                    backgroundImage: `linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%), url('https://mybeautifuladventures.com/wp-content/uploads/2020/06/00-Mylapore-Chennai_Trey-Ratcliff_Stuck-in-Customs-1024x673.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '400px'
                  }}
                >
                  <div className=" h-full flex flex-col justify-end p-8">
                    <h3 className="text-2xl font-bold text-white mb-4">Service Areas</h3>
                    <div className="text-sm text-white mb-4">We proudly serve the following areas:</div>
                    <div className="grid grid-cols-2 gap-3">
                      {serviceAreas.map((area, index) => (
                        <motion.div 
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg p-2"
                        >
                          <MapPin className="h-4 w-4 text-blue-300" />
                          <span className="text-white font-medium">{area}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What We Offer</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 mx-auto mb-8 rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {offerings.map((offering, index) => {
              const Icon = offering.icon;
              return (
                <AnimatedCard key={index} delay={index * 0.2} className="group">
                  <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-blue-200 h-full">
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`flex items-center justify-center w-20 h-20 bg-gradient-to-r ${offering.gradient} rounded-2xl mb-6 mx-auto shadow-lg`}
                    >
                    <Icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-blue-600 transition-colors">{offering.title}</h3>
                    <p className="text-gray-600 text-center leading-relaxed">{offering.description}</p>
                  </div>
                </AnimatedCard>
              );
            })}
          </div>

          {/* Advanced Set-Top Box Features */}
          <AnimatedCard delay={0.6}>
            <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Advanced Set-Top Box Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {stbFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center group cursor-pointer"
                  >
                    <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-2xl mb-4 mx-auto group-hover:bg-white group-hover:shadow-lg transition-all duration-300">
                      <Icon className={`h-8 w-8 ${feature.color} group-hover:scale-110 transition-transform`} />
                    </div>
                    <p className="text-sm font-semibold text-gray-700 group-hover:text-gray-900">{feature.name}</p>
                  </motion.div>
                );
              })}
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Our Strengths Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-teal-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-200 to-transparent rounded-full opacity-30"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-purple-200 to-transparent rounded-full opacity-30"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Strengths</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 mx-auto mb-8 rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strengths.map((strength, index) => {
              const Icon = strength.icon;
              return (
                <AnimatedCard key={index} delay={index * 0.1} className="text-center group">
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-blue-200 h-full">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`flex items-center justify-center w-20 h-20 bg-gradient-to-r ${strength.gradient} rounded-2xl mb-6 mx-auto shadow-lg`}
                    >
                    <Icon className="h-10 w-10 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{strength.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{strength.description}</p>
                  </div>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(59, 130, 246, 0.95) 0%, rgba(147, 51, 234, 0.95) 50%, rgba(6, 182, 212, 0.95) 100%), url('https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Uday Cable Service?</h2>
            <div className="w-32 h-1.5 bg-white mx-auto mb-8 rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {whyChoose.map((reason, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white bg-opacity-20 p-6 rounded-2xl backdrop-blur-md border border-white border-opacity-30 text-white"
                >
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-300 flex-shrink-0" />
                    <p className="font-semibold">{reason}</p>
                  </div>
                </motion.div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Get Connected Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500 to-transparent rounded-full opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500 to-transparent rounded-full opacity-20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Get Connected Today!</h2>
            <p className="text-xl text-blue-200 mb-12 font-light">
            Experience next-generation digital cable with a neighborhood touch.
          </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <AnimatedCard delay={0.2}>
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white bg-opacity-10 p-8 rounded-2xl backdrop-blur-md border border-white border-opacity-20 h-[250px] flex flex-col items-center"
              >
                <MapPin className="h-10 w-10 text-blue-300 mb-4" />
                <h3 className="text-xl font-bold mb-4">Visit Us</h3>
                <p className="text-blue-200 text-center">
                  No. 108, TTK Road, Alwarpet,<br />
                  Chennai – 600018
                </p>
              </motion.div>
            </AnimatedCard>
            
            <AnimatedCard delay={0.4}>
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white bg-opacity-10 p-8 rounded-2xl backdrop-blur-md border border-white border-opacity-20 h-[250px] flex flex-col items-center"
              >
                <Smartphone className="h-10 w-10 text-green-300 mb-4" />
                <h3 className="text-xl font-bold mb-4">Call Us</h3>
                <a href="tel:9884165926" className="text-green-300 hover:text-green-200 text-xl font-bold transition-colors">
                  9884165926
                </a>
              </motion.div>
            </AnimatedCard>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              href="tel:9884165926"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-12 py-5 rounded-2xl font-bold hover:from-blue-700 hover:to-teal-600 transition-all duration-300 shadow-2xl hover:shadow-3xl inline-flex items-center space-x-3 text-lg"
            >
              <Smartphone className="h-6 w-6" />
              <span>Call Now for Instant Connection</span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}