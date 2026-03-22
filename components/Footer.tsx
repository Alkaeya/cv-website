'use client';

import React from 'react';
import { Github, Linkedin, Mail, Heart, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/Alkaeya',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/alkaeya-de-la-pe%C3%B1a-7a625a3b9/',
    },
    {
      icon: Mail,
      label: 'Email',
      url: 'mailto:alkaeyadelapena@gmail.com',
    },
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Alkaeya
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Full-Stack Web Developer & IT Student passionate about creating elegant solutions to complex problems.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="p-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-300 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors duration-200"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills Overview */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {['Laravel', 'Next.js', 'React', 'Tailwind CSS', 'MySQL', 'Flutter', 'JavaScript', 'TypeScript'].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-300 rounded text-sm hover:bg-blue-600 hover:text-white transition-colors duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Contact</h4>
            <ul className="space-y-3 text-gray-700 dark:text-gray-400">
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                <a
                  href="mailto:alkaeyadelapena@gmail.com"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 break-all"
                >
                  alkaeyadelapena@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <ExternalLink size={18} className="mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                <span>Tuguegarao City, Philippines</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-700"></div>

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-700 dark:text-gray-400 text-sm flex items-center gap-2">
            <span>© {currentYear} Alkaeya De La Peña. All rights reserved.</span>
          </div>
          <div className="text-gray-700 dark:text-gray-400 text-sm flex items-center gap-2">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 fill-red-500" />
            <span>using Next.js & Tailwind CSS</span>
          </div>
        </div>
      </div>

      {/* Floating CTA */}
      <div className="fixed bottom-8 right-8 md:block hidden">
        <a
          href="mailto:alkaeyadelapena@gmail.com"
          className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 shadow-lg"
          aria-label="Contact email"
        >
          <Mail size={24} />
        </a>
      </div>
    </footer>
  );
}
