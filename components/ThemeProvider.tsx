'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface ThemeContextType {
  isDark: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Get stored theme preference
    const stored = localStorage.getItem('theme');
    const prefersDark = stored === 'dark' || (!stored && false); // Default to light
    
    setIsDark(prefersDark);
    
    // Apply theme immediately
    const html = document.documentElement;
    if (prefersDark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const html = document.documentElement;
    
    setIsDark(prev => {
      const newIsDark = !prev;
      
      if (newIsDark) {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      
      console.log('Dark mode:', newIsDark ? 'ON' : 'OFF');
      return newIsDark;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
