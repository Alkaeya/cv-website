'use client';

import React from 'react';
import { Award, Target, Lightbulb } from 'lucide-react';

export default function AboutSection() {
  const highlights = [
    {
      icon: Target,
      title: 'Problem Solver',
      description: 'I analyze complex problems and develop efficient, scalable solutions using modern technologies.',
    },
    {
      icon: Lightbulb,
      title: 'Creative Developer',
      description: 'I combine technical expertise with creative design to build user-friendly applications.',
    },
    {
      icon: Award,
      title: 'Continuous Learner',
      description: 'I stay updated with the latest technologies and best practices in web development.',
    },
  ];

  return (
    <section id="about" className="py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I'm an IT student at St. Paul University Philippines with a passion for full-stack web development. 
              My journey in tech started with a curiosity about how things work on the web, and has evolved into a 
              commitment to building high-quality, user-centric applications.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I specialize in creating responsive web applications using modern frameworks and technologies. 
              With hands-on experience in Laravel, Next.js, and Flutter, I'm equipped to tackle both frontend 
              and backend challenges.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              When I'm not coding, I enjoy learning new technologies, contributing to open-source projects, 
              and sharing knowledge with the developer community.
            </p>
          </div>

          <div className="space-y-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-lg hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-600 dark:bg-blue-500 rounded-lg">
                      <Icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Quick Facts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">School</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                St. Paul University Philippines
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                3rd Year IT Student
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Learning</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                Full-Stack Development
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Frontend & Backend
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Interests</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                Web & Mobile Apps
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Problem Solving
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
