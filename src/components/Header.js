"use client";
import Link from 'next/link'
import { ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-black border-b border-border relative z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl text-white font-bold" onClick={() => setIsMenuOpen(false)}>
            Hakkı Aranıyor
          </Link>
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <nav className="hidden md:flex space-x-8">
            <ul className="flex flex-row space-x-8">
            <li><Link href="/about" className="text-white hover:text-white/70 duration-200">Hakkımızda</Link></li>
              <li><Link href="/rules" className="text-white hover:text-white/70 duration-200">Nasıl Oynanır?</Link></li>
              <li>
                <Link href="https://www.linkedin.com/in/hakkierdem/" className="text-white hover:text-white/70 duration-200 flex items-center" target="_blank">
                  İletişim <ExternalLink className="ml-1" size={16} />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden">
          <nav className="h-full flex items-center px-8">
            <ul className="space-y-8">
              <li>
                <Link href="/about" className="text-2xl text-white hover:text-white/70 duration-200" onClick={toggleMenu}>
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/rules" className="text-2xl text-white hover:text-white/70 duration-200" onClick={toggleMenu}>
                  Nasıl Oynanır?
                </Link>
              </li>
              <li>
                <Link 
                  href="https://www.linkedin.com/in/hakkierdem/" 
                  className="text-2xl text-white hover:text-white/70 duration-200 flex items-center"
                  target="_blank"
                  onClick={toggleMenu}
                >
                  İletişim <ExternalLink className="ml-1" size={20} />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  )
}


