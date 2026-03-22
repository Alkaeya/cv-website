'use client';

import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function EducationSection() {
  const coursework = [
    'Python Programming',
    'Object-Oriented Programming',
    'Data Structures & Algorithms',
    'Web System and Technologies',
    'Advanced Database Systems',
    'Rich Media Development',
    'Application Development',
    'Platform Technologies',
    'Information Assurance and Security',
    'Integrative and Programming Technologies',
    'Human-Computer Interaction',
    'Computer Network Systems',
    'Game Development',
    'Hybrid Mobile Application',
    'Artificial Intelligence and Robotics',
  ];

  return (
    <section id="education" className="py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
        </div>

        {/* Main Education */}
        <div className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border-l-4 border-blue-600">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg flex-shrink-0">
                <GraduationCap size={24} className="text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  Bachelor of Science in Information Technology
                </h3>
                <p className="text-gray-600 dark:text-gray-400 font-medium">
                  St. Paul University Philippines • 2023 - Present
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Relevant Coursework */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 uppercase tracking-wide text-sm">
            Relevant Coursework
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {coursework.map((course, index) => (
              <div
                key={index}
                className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200"
              >
                <p className="text-gray-900 dark:text-gray-200 font-medium">
                  {course}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
