'use client';

import React from 'react';
import { Code2, Database, Palette, GitBranch } from 'lucide-react';

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend Development',
      skills: ['HTML/CSS', 'JavaScript', 'Next.js', 'Tailwind CSS', 'Shadcn UI', 'Flutter'],
    },
    {
      icon: Database,
      title: 'Backend & Database',
      skills: ['PHP', 'Laravel', 'Node.js', 'Python', 'Java', 'MySQL'],
    },
    {
      icon: Palette,
      title: 'Mobile Development',
      skills: ['Flutter', 'Dart', 'Cross-platform Development'],
    },
    {
      icon: GitBranch,
      title: 'Tools & Version Control',
      skills: ['Git', 'GitHub', 'VS Code', 'PyCharm', 'Figma', 'LaraCloud', 'Linux/CLI', 'GDScript (Godot Engine)', 'Vercel'],
    },
  ];

  return (
    <section id="skills" className="py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <li
                      key={idx}
                      className="text-gray-700 dark:text-gray-300 flex items-center"
                    >
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
