import React from 'react';
import { ArrowRight } from 'lucide-react';
import SocialLinks from './SocialLinks';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.1]"></div>
        <div className="absolute top-20 -left-20 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 -right-20 w-72 h-72 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="animate-fade-in text-4xl sm:text-6xl font-bold text-white mb-6 text-glow">
            Hi, I'm <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Dipanshu Kumar</span>
          </h1>
          <p className="animate-slide-up text-xl sm:text-2xl text-gray-300 mb-8">
            Frontend Devloper & UI/UX Designer
          </p>
          <div className="animate-fade-in space-y-6">
            <div className="space-x-4">
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 rounded-full bg-purple-600 text-white hover:bg-purple-500 transition-all duration-300 hover-glow"
              >
                View My Work
                <ArrowRight className="ml-2 animate-float" size={20} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-full border-2 border-purple-500 text-purple-400 hover:text-white hover:bg-purple-500/20 transition-all duration-300 hover-glow"
              >
                Contact Me
              </a>
            </div>
            <div className="flex justify-center mt-8">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;