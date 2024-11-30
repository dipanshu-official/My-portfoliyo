import React from 'react';
import { Code, Palette, Terminal, Coffee } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-left">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">About Me</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I'm Dipanshu, a dedicated Frontend Developer with experience in React.js, Tailwind CSS, and traditional CSS. Currently interning as a Frontend Developer at Web5Lab while pursuing a Bachelor's in Computer Applications (BCA). I'm passionate about crafting responsive, user-centric interfaces and maintaining clean, efficient code. I’m always eager to learn new technologies and contribute to innovative projects that enhance the user experience.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Skill
                icon={<Code className="animate-bounce-slow" />}
                title="Frontend"
                description="React, Tailwind, Javascript, Next.js  "
              />
              <Skill
                icon={<Terminal className="animate-pulse-slow" />}
                title="Backend"
                description="Node.js, Mongodb"
              />
              <Skill
                icon={<Palette className="animate-rotate" />}
                title="Design"
                description="UI/UX, Figma"
              />
              <Skill
                icon={<Coffee className="animate-float" />}
                title="Database"
                description="MongoDB"
              />
            </div>
          </div>
          <div className="relative animate-slide-right">
            <img
              src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&q=80&w=1000"
              alt="Profile"
              className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 hover-glow"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-purple-100 dark:bg-purple-900/30 rounded-lg -z-10 animate-blob"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Skill = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg transform hover:-translate-y-1 transition-all duration-300 card-hover">
    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 mb-3">
      {icon}
    </div>
    <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">{title}</h3>
    <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
  </div>
);

export default About;