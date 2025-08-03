
import { Award, Users, Heart, Target } from 'lucide-react';

import CountUp from "react-countup";

const About = () => {

  const stats = [
    { number: 2000000, suffix: "+", label: "Active Users" },
    { number: 150, suffix: "+", label: "Countries" },
    { number: 95, suffix: "%", label: "Success Rate" },
    { number: 50, suffix: "+", label: "Team Members" },
  ];

  // Format numbers as K/M for thousands and millions
  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    return num.toString();
  };

  const team = [
    {
      name: "Sarah Mitchell",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "Former Olympic athlete with 15+ years in fitness technology."
    },
    {
      name: "Dr. James Rodriguez",
      role: "Head of Sports Science",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "PhD in Exercise Physiology, published researcher in athletic performance."
    },
    {
      name: "Emily Chen",
      role: "Lead Product Designer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Award-winning UX designer passionate about making fitness accessible."
    }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion for Health",
      description: "We believe everyone deserves access to effective, science-based fitness solutions."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community First",
      description: "Building supportive communities where everyone can achieve their fitness goals together."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence Driven",
      description: "Committed to delivering the highest quality fitness experiences through innovation."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Results Focused",
      description: "Every feature we build is designed to help you achieve measurable fitness results."
    }
  ];

  return (
    <section id="about" className="py-15 bg-white">
        <div className="container mx-auto px-4 ">
            <div className="text-center mb-16 ">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    About FitPro
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    We're on a mission to make fitness accessible, enjoyable, and effective for everyone. 
                    Our team of experts combines cutting-edge technology with proven fitness science.
                </p>
            </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded in 2020, FitPro was born from a simple observation: traditional fitness 
                solutions weren't working for most people. Generic workout plans, one-size-fits-all 
                approaches, and lack of personalization left millions struggling to achieve their goals.
              </p>
              <p>
                Our founders, combining backgrounds in sports science, technology, and design, 
                set out to create an AI-powered platform that adapts to each individual's unique 
                needs, preferences, and lifestyle.
              </p>
              <p>
                Today, we're proud to serve over 2 million users worldwide, helping them transform 
                their lives through personalized fitness experiences that actually work.
              </p>
            </div>
          </div>
          
          <div className="relative">
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white">
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold mb-2">
                <CountUp
                  start={0}
                  end={stat.number}
                  duration={2.5}
                  formattingFn={(val) => formatNumber(val) + stat.suffix}
                />
              </div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
        </div>

        <div className="mb-24">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {value.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default About;
