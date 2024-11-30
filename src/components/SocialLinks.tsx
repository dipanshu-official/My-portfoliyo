import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const socialLinks = [
  {
    icon: <Github size={24} />,
    href: 'https://x.com/Mr_dipanshu47',
    label: 'GitHub',
    color: 'hover:text-gray-900'
  },
  {
    icon: <Linkedin size={24} />,
    href: 'https://www.linkedin.com/in/mr-dipanshu-kumar/',
    label: 'LinkedIn',
    color: 'hover:text-blue-700'
  },
  {
    icon: <Twitter size={24} />,
    href: 'https://twitter.com/yourusername',
    label: 'Twitter',
    color: 'hover:text-blue-500'
  }
];

const SocialLinks = () => {
  return (
    <div className="flex space-x-6 animate-fade-in">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`transform hover:scale-110 transition-all duration-200 text-gray-600 ${link.color}`}
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;