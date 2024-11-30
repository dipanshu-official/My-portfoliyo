import React from 'react';
import { Download, Briefcase, GraduationCap, Award, Code } from 'lucide-react';

const Resume = () => {
  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'Web5lab.',
      period: 'april 2024 to dec 2024',
      description: 'Led development of enterprise web applications using React and Node.js. Managed team of 5 developers.',
    }
    
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Applications',
      school: 'Patna University',
      period: '2023 - 2026',
      description: 'Focus on web development',
    },
    {
      degree: ' Science',
      school: 'B.S college',
      period: '2021-2023',
      description: 'Focus on web development',
    },
  ];

  const skills = [
    {
      category: 'Frontend',
      items: ['React',  'Next.js', 'Tailwind CSS'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'MongoDB'],
    },
    {
      category: 'Tools',
      items: ['Git'],
    },
  ];

  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Resume</h2>
          <a
            href="/src/cv/Dipanshu resume.pdf"
            download="/src/cv/Dipanshu resume.pd"
            className="inline-flex items-center px-4 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-200 animate-pulse-slow"
          >
            <Download size={20} className="mr-2" />
            Download CV
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Experience Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center">
                <Briefcase className="mr-2" /> Experience
              </h3>
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h4>
                  <p className="text-purple-600 dark:text-purple-400">{exp.company}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{exp.period}</p>
                  <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6 mt-12">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center">
                <GraduationCap className="mr-2" /> Education
              </h3>
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{edu.degree}</h4>
                  <p className="text-purple-600 dark:text-purple-400">{edu.school}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{edu.period}</p>
                  <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center">
              <Code className="mr-2" /> Skills
            </h3>
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm hover:scale-105 transition-transform duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md mt-6 animate-slide-up">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Award className="mr-2" /> Certifications
              </h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                
                <li>MongoDB Certified Developer</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;