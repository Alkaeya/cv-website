'use client';

import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'Xylophone',
      description: 'Interactive sound board mobile app',
      longDescription: 'Built an interactive xylophone-style sound board app that plays different notes with each tap. Focused on responsive touch interactions, clean UI structure, and smooth audio playback behavior for a simple but engaging mobile experience.',
      technologies: ['Flutter', 'Dart'],
      image: '🎵',
      link: '#',
      github: 'https://github.com/Alkaeya/Sound_Board',
      featured: true,
    },
    {
      title: 'Twitter',
      description: 'Hands-on social media style project',
      longDescription: 'Created a hands-on project inspired by social media workflows. Implemented key UI patterns for content display and interaction while practicing state handling and structured component design.',
      technologies: ['Flutter', 'Dart'],
      image: '🐦',
      link: '#',
      github: 'https://github.com/Alkaeya/hands-on',
      featured: true,
    },
    {
      title: 'Movie',
      description: 'Movie listing and browsing app',
      longDescription: 'Developed a movie-focused project that organizes and presents film information in an accessible UI. Emphasized layout clarity, reusable widgets/components, and straightforward navigation for a better browsing experience.',
      technologies: ['Flutter', 'Dart'],
      image: '🎬',
      link: '#',
      github: 'https://github.com/Alkaeya/movie',
      featured: true,
    },
  ];

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section id="projects" className="py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Projects Portfolio
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-6xl">
                {project.image}
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.longDescription}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-900 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors duration-200"
                  >
                    <Github size={18} />
                    Code
                  </a>
                  <a
                    href={project.link}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/Alkaeya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
          >
            <Github size={20} />
            Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
