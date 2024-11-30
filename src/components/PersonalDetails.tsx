import React from 'react';
import { Calendar, MapPin, Briefcase, Award, Book, Heart } from 'lucide-react';

const PersonalDetails = () => {
  const details = [
    {
      icon: <Calendar />,
      label: "Birth Date",
      value: "January 2, 2004"
    },
    {
      icon: <MapPin />,
      label: "Location",
      value: "Patna, Bihar"
    },
    {
      icon: <Briefcase />,
      label: "Experience",
      value: "6 months"
    },
    {
      icon: <Award />,
      label: "Education",
      value: "Bachelor of Computer Applications"
    },
    {
      icon: <Book />,
      label: "Languages",
      value: "English, Hindi"
    },
    {
      icon: <Heart />,
      label: "Interests",
      value: " Design and features"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white animate-fade-in">
          Personal Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {details.map((detail, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400">
                  {detail.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {detail.label}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{detail.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalDetails;