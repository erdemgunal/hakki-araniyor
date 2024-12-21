"use client";
import Link from 'next/link'
import { ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Import icons for the menu
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu'; // Import shadcn components

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl text-white font-bold">
          Hakkı Aranıyor
        </Link>
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="text-white">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md">
              <DropdownMenuItem>
                <Link href='/rules' className='block px-4 py-2 hover:text-primary'>Nasıl Oynanır?</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/about" className="block px-4 py-2 hover:text-primary">Hakkımızda</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="https://www.linkedin.com/in/hakkierdem/" className="px-4 py-2 hover:text-primary flex items-center" target="_blank">
                  İletişim <ExternalLink className="ml-1" size={16} />
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <nav className="hidden md:flex space-x-8">
          <ul className="flex flex-row space-x-8">
            <li><Link href="/about" className="text-white hover:text-white/70 duration-200">Hakkımızda</Link></li>
            <li><Link href="rules" className="text-white hover:text-white/70 duration-200">Nasıl Oynanır?</Link></li>
            <li>
              <Link href="https://www.linkedin.com/in/hakkierdem/" className="text-white hover:text-white/70 duration-200 flex items-center" target="_blank">
                İletişim <ExternalLink className="ml-1" size={16} />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}


