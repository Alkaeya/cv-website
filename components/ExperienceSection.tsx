'use client';

import React from 'react';

export default function ExperienceSection() {
  const experiences = [
    {
      title: 'Full-Stack Developer (Co-Creator)',
      company: 'St. Paul University Philippines',
      period: 'Jan 2026 - Present',
      descriptions: [
        'Co-developing the Student Academic Engagement Monitoring System with Decision Support, a tailored administrative platform for tracking and analyzing student engagement patterns.',
        'Architecting a secure backend infrastructure using PHP and the Laravel framework, paired with a fully normalized MySQL database.',
        'Designing and implementing interactive Data Analytics dashboards to visualize engagement trends, empowering school administrators to make data-driven decisions.',
        'Collaborating closely with my development partner and project stakeholders to gather requirements, iterate on UI/UX designs, and ensure the software meets institutional needs.',
      ],
      technologies: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS', 'Data Analytics', 'Team Collaboration'],
    },
  ];

  return (
    <section id="experience" className="py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="flex gap-6 md:gap-12">
              {/* Timeline */}
              <div className="flex flex-col items-center min-w-fit">
                <div className="text-sm text-gray-600 dark:text-gray-400 text-center whitespace-nowrap mb-2">
                  <p className="font-semibold">{exp.period.split('-')[0]}</p>
                  <p className="text-xs">{exp.period.split('-')[1]}</p>
                </div>
                <div className="w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-500 flex-shrink-0"></div>
                {index !== experiences.length - 1 && (
                  <div className="w-1 h-24 bg-gradient-to-b from-blue-600 to-transparent dark:from-blue-500 dark:to-transparent mt-2"></div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {exp.title}
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 font-medium">
                  {exp.company}
                </p>

                {/* Descriptions */}
                <div className="space-y-3 mb-6">
                  {exp.descriptions.map((desc, idx) => (
                    <p
                      key={idx}
                      className="text-gray-600 dark:text-gray-400 leading-relaxed"
                    >
                      {desc}
                    </p>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-3">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-300 dark:border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
