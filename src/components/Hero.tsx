
import React from 'react';
import { ChevronDown, Mail, Linkedin, MessageCircle } from 'lucide-react';

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
            Samuel Lee
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-white/90 mb-4">
            Senior Blockchain Web Developer
          </h2>
          <p className="text-xl text-blue-400 mb-6">
            Smart Contract & dApp Specialist
          </p>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            8+ years building scalable blockchain solutions, DeFi platforms, and AI-enhanced applications. 
            Based in Singapore, delivering production-ready Web3 experiences.
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-12 animate-fade-in">
          <a
            href="mailto:sanderberg786@gmail.com"
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-blue-500/20 transition-all duration-300 hover:scale-110"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/ssammylee"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-blue-500/20 transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://t.me/KnoxRyder999"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-blue-500/20 transition-all duration-300 hover:scale-110"
          >
            <MessageCircle className="w-6 h-6" />
          </a>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce p-2 text-white/60 hover:text-white transition-colors duration-300"
        >
          <ChevronDown className="w-8 h-8 mx-auto" />
        </button>
      </div>
    </section>
  );
};
