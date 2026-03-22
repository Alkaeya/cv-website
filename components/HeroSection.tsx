'use client';

import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Alkaeya</span>
              </h1>
              <p className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
                IT Student | Aspiring Full-Stack Developer
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
                Passionate IT student learning to design and develop web applications with Laravel, Next.js, and Tailwind CSS. Dedicated to building elegant solutions and continuously expanding my skills.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#projects"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 text-center"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors duration-200 text-center"
              >
                Get In Touch
              </a>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/Alkaeya"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/alkaeya-de-la-pe%C3%B1a-7a625a3b9/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:alkaeyadelapena@gmail.com"
                className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="hidden md:flex justify-center">
            <div className="relative w-72 h-72 rounded-full overflow-hidden shadow-2xl border-4 border-gradient-to-br from-blue-400 to-purple-600">
              <Image
                src="/avatar.jpg"
                alt="Alkaeya De La Peña"
                width={288}
                height={288}
                priority
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <a href="#about" className="animate-bounce">
            <ChevronDown size={32} className="text-blue-600 dark:text-blue-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
