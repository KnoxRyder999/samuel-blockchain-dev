
import React from 'react';
import { MapPin, GraduationCap, Award } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300">
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold">Based in Singapore</h3>
              </div>
              <p className="text-white/80 leading-relaxed">
                Singapore citizen with 8+ years of hands-on experience specializing in smart contract engineering, 
                blockchain integration, and scalable SaaS systems. I've built MVPs, DeFi platforms, and AI-enhanced business tools.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300">
              <div className="flex items-center mb-4">
                <GraduationCap className="w-6 h-6 text-purple-400 mr-3" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-blue-400">Universiti Teknologi Malaysia (UTM)</h4>
                <p className="text-white/80">Bachelor's Degree in Computer Science</p>
                <p className="text-sm text-white/60">GPA: 3.94 / 4.00 (2013–2017)</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-yellow-400 mr-3" />
                <h3 className="text-xl font-semibold">Expertise</h3>
              </div>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Smart Contract Development (Solidity)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  DeFi Platform Architecture
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Full-Stack Web Development
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  AI Integration & Automation
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-6 text-center border border-white/10">
                <div className="text-3xl font-bold text-blue-400">8+</div>
                <div className="text-sm text-white/70">Years Experience</div>
              </div>
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-6 text-center border border-white/10">
                <div className="text-3xl font-bold text-purple-400">50+</div>
                <div className="text-sm text-white/70">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
