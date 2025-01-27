import Link from 'next/link'
import { Facebook, Twitter, Instagram, ExternalLink, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">"Hakkı Aranıyor" Hakkımızda</h3>
            <p className="text-white text-sm leading-6">
              Hakkı Aranıyor, dedektiflik becerilerinizi zorlayan gizemli bir açık kaynak bulmaca oyunudur. İlgi çekici vakaları çözün ve gerçeği ortaya çıkarın!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Hızlı Linkler</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="hover:text-white/70 text-white text-sm">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/rules" className="hover:text-white/70 text-white text-sm">
                  Nasıl Oynanır?
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/hakkierdem/"
                  className="hover:text-white/70 flex items-center text-white text-sm"
                  target="_blank"
                >
                  İletişim <ExternalLink className="ml-1" size={16} />
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white/70 text-white text-sm">
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white/70 text-white text-sm">
                  Hizmet Koşulları
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/erdemgunal/hakki-araniyor"
                  className="hover:text-white/70 flex items-center text-white text-sm"
                  target="_blank"
                >
                  Açık Kaynak - GitHub <Github className="ml-1" size={16} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
                <div>
                <h3 className="text-lg font-bold mb-4 text-white">Bizimle İletişime Geçin</h3>
                <div className="flex justify-center md:justify-start space-x-6">
                  <Link href="#" className="text-white hover:text-white">
                  <Facebook size={20} />
                  <span className="sr-only">Facebook</span>
                  </Link>
                  <Link href="#" className="text-white hover:text-white">
                  <Twitter size={20} />
                  <span className="sr-only">Twitter</span>
                  </Link>
                  <Link href="#" className="text-white hover:text-white">
                  <Instagram size={20} />
                  <span className="sr-only">Instagram</span>
                  </Link>
                  <Link href="https://github.com/erdemgunal/" className="text-white hover:text-white">
                  <Github size={20} />
                  <span className="sr-only">GitHub</span>
                  </Link>
                </div>
                </div>
              </div>

              {/* Copyright Section */}
        <div className="mt-8 text-center text-white/70 text-sm">
          <p>&copy; {new Date().getFullYear()} Hakkı Aranıyor. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}
