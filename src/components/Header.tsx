import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Shield, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home'); // link active khi click

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Trang chủ', href: '/' },
    { name: 'Trắc nghiệm', href: '/quizzes' },
    { name: 'Kiến thức', href: '/#knowledge' },
    { name: 'Câu chuyện', href: '/story' },
    { name: 'Liên hệ', href: '/#contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-12 h-12 bg-gradient-to-br from-[#6BC4E8] to-[#A8E6CF] rounded-full flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm">
            <Shield className="text-white w-7 h-7 stroke-[2.5] drop-shadow-md" />
          </div>
          <span className="text-2xl font-bold text-[#2D5E4F] font-pacifico">Aura-right</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setActiveLink(link.href)} // cập nhật link active khi click
              className={`font-medium relative group transition-colors ${isScrolled ? 'text-gray-700' : 'text-gray-800'} hover:text-[#2D5E4F]`}
            >
              {link.name}
              <span
                className={`absolute left-0 bottom-0 h-0.5 bg-[#2D5E4F] transition-all ${activeLink === link.href ? 'w-full' : 'w-0'}`}
              ></span>
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-gray-700 hover:text-[#2D5E4F] transition-colors"
          aria-label="Chuyển đổi menu di động"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            {navLinks.map(link => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setActiveLink(link.href); // cập nhật link active khi click
                }}
                className={`relative font-medium py-2 text-gray-700 hover:text-[#2D5E4F]`}
              >
                {link.name}
                <span
                  className={`absolute left-0 bottom-0 h-0.5 bg-[#2D5E4F] transition-all ${activeLink === link.href ? 'w-full' : 'w-0'}`}
                ></span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
