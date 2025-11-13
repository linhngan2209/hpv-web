import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Trang chủ', href: '/' }, 
    { name: 'Về chúng tôi', href: '/mission' },
    { name: 'Game', href: '/quizzes' },
    { name: 'Câu chuyện', href: '/story' },
    { name: 'Liên hệ', href: '/#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
      
        <Link href="/" className="flex items-center h-full">
          <Image
            src="/logo_new.png"
            alt="Logo"
            width={160} 
            height={64} 
            className="h-full object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center h-full space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className="relative font-medium transition-colors flex items-center h-full text-gray-800 hover:text-[#2D5E4F] group"
            >
              {link.name}
              <span
                className={`absolute left-0 bottom-5 h-0.5 bg-gradient-to-r from-[#2D5E4F] to-[#5196db] transition-all duration-300 ease-in-out
                  ${activeLink === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`}
              />
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-gray-700 hover:text-[#2D5E4F] transition-colors rounded-lg hover:bg-gray-100"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div
        className={`md:hidden bg-white border-t border-gray-200 shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container mx-auto px-6 py-4 flex flex-col space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => {
                setIsMobileMenuOpen(false);
                setActiveLink(link.href);
              }}
              className="relative font-medium py-3 px-4 text-gray-700 hover:text-[#2D5E4F] hover:bg-gray-50 rounded-lg transition-all duration-200 group"
            >
              <span className="relative z-10">{link.name}</span>
              <span
                className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2D5E4F] to-[#5196db] transition-all duration-300 ease-in-out rounded-r
                  ${activeLink === link.href ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
              />
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;