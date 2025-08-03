
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dumbbell, Heart, Users, Trophy, Star, Phone, Mail, MapPin, Play, CheckCircle, ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import React from "react";
import CountUp from "react-countup";
import Features from "../components/ui/Features";
import About from "../components/ui/About";
import FAQs from "../components/ui/FAQs";
import { Twitter, Instagram, Linkedin } from 'lucide-react';


const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      icon: <Dumbbell className="h-6 w-6" />,
      title: "Personal Training",
      description: "One-on-one sessions with certified trainers tailored to your specific fitness goals and lifestyle."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Group Classes",
      description: "Dynamic group workouts including HIIT, yoga, strength training, and functional fitness."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Nutrition Coaching",
      description: "Personalized meal plans and nutrition guidance from registered dietitians."
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Performance Analytics",
      description: "Advanced tracking and analytics to monitor your progress and optimize results."
    }
  ];

  const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Executive",
    rating: 5,
    text: "The personalized approach and professional guidance helped me achieve results I never thought possible. The trainers are incredibly knowledgeable and supportive.",
    transformation: "Lost 28 lbs in 4 months",
    image: "https://plus.unsplash.com/premium_photo-1723485686323-37eb3394405a?q=80&w=924&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    rating: 5,
    text: "As someone with a busy schedule, the flexible training options and nutrition coaching fit perfectly into my lifestyle. Highly recommend!",
    transformation: "Gained 12 lbs muscle",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Emily Rodriguez",
    role: "Business Owner",
    rating: 5,
    text: "The comprehensive approach to fitness and wellness has completely transformed not just my body, but my energy levels and confidence.",
    transformation: "200% energy increase",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
  }
];


  const stats = [
    { number: 2500, suffix: "+", label: "Active Members" },
    { number: 15000, suffix: "+", label: "Sessions Completed" },
    { number: 98, suffix: "%", label: "Success Rate" },
    { number: 4.9, suffix: "★", label: "Client Rating" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2.5 rounded-xl shadow-lg">
                <Dumbbell className="h-5 w-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">FitFare</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">About</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">Contact</a>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg">
                Start Free Trial
              </Button>
            </div>

            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-4 space-y-3">
              <a href="#home" className="block text-gray-700 hover:text-blue-600 font-medium">Home</a>
              <a href="#services" className="block text-gray-700 hover:text-blue-600 font-medium">Services</a>
              <a href="#about" className="block text-gray-700 hover:text-blue-600 font-medium">About</a>
              <a href="#testimonials" className="block text-gray-700 hover:text-blue-600 font-medium">Testimonials</a>
              <a href="#contact" className="block text-gray-700 hover:text-blue-600 font-medium">Contact</a>
              <div className="pt-3 space-y-2">
                <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                  Sign In
                </Button>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 font-medium px-4 py-2">
                  #1 Fitness Platform 2024
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                  Transform Your
                  <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                    Fitness Journey
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                  Join thousands of professionals who've achieved their fitness goals with our 
                  science-backed training programs and expert guidance.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg px-8 py-4 shadow-lg">
                  <Play className="mr-2 h-5 w-5" />
                  Start Your Journey
                </Button>
                <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50 text-lg px-8 py-4">
                  View Success Stories
                </Button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                      <CountUp end={stat.number} duration={3} separator="," />
                      {stat.suffix}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-8 text-white shadow-2xl">
                <div className="space-y-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">Your Fitness Dashboard</h3>
                    <p className="text-blue-100">Real-time progress tracking</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Today's Progress</span>
                      <span className="text-blue-200">87% Complete</span>
                    </div>
                    <div className="bg-white/20 rounded-full h-3">
                      <div className="bg-white rounded-full h-3 w-[87%] shadow-lg"></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold">1,847</div>
                      <div className="text-blue-200 text-sm">Calories Burned</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold">12.4K</div>
                      <div className="text-blue-200 text-sm">Steps Today</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-green-500 p-2 rounded-full">
                        <Heart className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-medium">Heart Rate</div>
                        <div className="text-blue-200 text-sm">Zone 3 - Aerobic</div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold">142 BPM</div>
                  </div>
                </div>
              </div>
            </div>

            
        </div>

        <div className="absolute top-[165px] left-[612px] w-24 h-24 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 left-14 w-32 h-32 bg-blue-300 rounded-full opacity-10 animate-pulse delay-1000"></div>

        </div>

        

      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Features />
          
        </div>
      </section>

      {/* About FitFare */}    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
        <About />
          
      </div>      

      {/* Why choose FitFare */}
      <section id="about" className="py-24 bg-gradient-to-br from-blue-50/50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Why Choose FitFare?
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  With over a decade of experience in the fitness industry, we've helped thousands 
                  transform their lives through evidence-based training programs and comprehensive support.
                </p>
              </div>
              
              <div className="space-y-5">
                {[
                  "Certified trainers with advanced specializations",
                  "Personalized programs based on fitness assessments",
                  "24/7 mobile app with real-time progress tracking",
                  "Registered dietitians for nutrition optimization",
                  "Supportive community and accountability partners"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-1.5 rounded-full mt-0.5">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg" size="lg">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="relative">
              <Card className="border-0 shadow-2xl bg-white">
                <CardHeader className="text-center pb-6">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Trophy className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">Industry Recognition</CardTitle>
                  <CardDescription className="text-gray-600">Fitness Excellence Awards 2024</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-xl">
                      <span className="font-semibold text-gray-900">Client Success Rate</span>
                      <span className="text-blue-700 font-bold text-lg">98%</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-xl">
                      <span className="font-semibold text-gray-900">Member Retention</span>
                      <span className="text-blue-700 font-bold text-lg">96%</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-xl">
                      <span className="font-semibold text-gray-900">Avg. Goal Achievement</span>
                      <span className="text-blue-700 font-bold text-lg">12 weeks</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What our users say */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">What Our Users Say?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real transformations from real people who trusted us with their fitness journey. 
              Your success story could be next.
            </p>
          </div>
          
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        </div>
      </section>

      {/* FAQs */}
      <FAQs />

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold">Ready to Transform Your Life?</h2>
                <p className="text-xl text-blue-100 leading-relaxed">
                  Join thousands of success stories. Get your personalized fitness assessment 
                  and start your transformation journey today.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Call Us</h4>
                    <p className="text-blue-100">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email Us</h4>
                    <p className="text-blue-100">hello@FitFare.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Visit Us</h4>
                    <p className="text-blue-100">123 Fitness Street, Health City, HC 12345</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="border-0 shadow-2xl bg-white text-gray-900">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold">Start Your Free Assessment</CardTitle>
                <CardDescription className="text-gray-600">
                  Get a personalized fitness plan tailored to your goals
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm font-medium">First Name</Label>
                    <Input id="firstName" placeholder="John" className="border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm font-medium">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" className="border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="(555) 123-4567" className="border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="goal" className="text-sm font-medium">Primary Fitness Goal</Label>
                  <select id="goal" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
                    <option>Weight Loss</option>
                    <option>Muscle Building</option>
                    <option>General Fitness</option>
                    <option>Athletic Performance</option>
                    <option>Injury Recovery</option>
                  </select>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg py-4 shadow-lg">
                  Get My Free Assessment
                </Button>
                <p className="text-sm text-gray-500 text-center">
                  No credit card required. Free consultation included.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2.5 rounded-xl">
                  <Dumbbell className="h-5 w-5 text-white" />
                </div>
                <span className="text-2xl font-bold">FitFare</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Transform your fitness journey with our comprehensive approach to health and wellness. 
                Professional training, expert guidance, lasting results.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-lg">Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">Personal Training</li>
                <li className="hover:text-white transition-colors cursor-pointer">Group Classes</li>
                <li className="hover:text-white transition-colors cursor-pointer">Nutrition Coaching</li>
                <li className="hover:text-white transition-colors cursor-pointer">Online Programs</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-lg">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">About Us</li>
                <li className="hover:text-white transition-colors cursor-pointer">Our Trainers</li>
                <li className="hover:text-white transition-colors cursor-pointer">Success Stories</li>
                <li className="hover:text-white transition-colors cursor-pointer">Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-lg">Connect</h4>

              <div className="flex space-x-4 mb-6">
  {/* Twitter */}
  <a 
    href="https://twitter.com/yourprofile" 
    target="_blank" 
    rel="noopener noreferrer"
    className="bg-gray-800 p-3 rounded-lg transition-all duration-300 cursor-pointer
               hover:bg-blue-500 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
  >
    <Twitter className="w-5 h-5 text-white" />
  </a>

  {/* Instagram */}
  <a 
    href="https://instagram.com/yourprofile" 
    target="_blank" 
    rel="noopener noreferrer"
    className="bg-gray-800 p-3 rounded-lg transition-all duration-300 cursor-pointer
               hover:bg-gradient-to-tr hover:from-pink-500 hover:to-yellow-400 hover:scale-110 
               hover:shadow-lg hover:shadow-pink-500/50"
  >
    <Instagram className="w-5 h-5 text-white" />
  </a>

  {/* LinkedIn */}
  <a 
    href="https://linkedin.com/in/yourprofile" 
    target="_blank" 
    rel="noopener noreferrer"
    className="bg-gray-800 p-3 rounded-lg transition-all duration-300 cursor-pointer
               hover:bg-blue-700 hover:scale-110 hover:shadow-lg hover:shadow-blue-700/50"
  >
    <Linkedin className="w-5 h-5 text-white" />
  </a>
</div>


              <p className="text-gray-400 text-sm">
                Follow us for daily fitness tips and motivation
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">&copy; 2025 FitFare. All rights reserved.</p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
