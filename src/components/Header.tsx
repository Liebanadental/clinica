"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Clínica / Instalaciones', href: '/clinica' },
    { name: 'Tratamientos', href: '/tratamientos' },
    { name: 'Equipo Médico', href: '/equipo' },
    { name: 'Testimonios', href: '/testimonios' },
    { name: 'Blog', href: '/blog' },
    { name: 'Promociones', href: '/promociones' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#0f3d56] text-white shadow-md">
      <div className="container mx-auto px-6 md:px-12 h-24 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center py-2">
          <img
            src="/logo.png"
            alt="Clínica Dental Liébana Bobadilla & Sada"
            className="h-20 w-auto object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex space-x-8 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`hover:text-[#5B8FB9] transition-colors ${isActive ? 'text-[#5B8FB9]' : 'text-white'}`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="xl:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="xl:hidden bg-[#0f3d56] border-t border-[#5B8FB9]/20 absolute w-full shadow-xl">
          <nav className="flex flex-col p-6 space-y-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`py-2 text-lg font-medium border-b border-gray-700/50 transition-colors ${isActive ? 'text-[#5B8FB9]' : 'text-white hover:text-[#5B8FB9]'
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
