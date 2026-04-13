import React from 'react';
import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0f3d56] text-white pt-20 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-12 mb-16">

          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="Clínica Dental Liébana Bobadilla & Sada"
                className="h-24 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Tu salud dental es nuestra pasión. Ofrecemos tratamientos personalizados con la última tecnología en el corazón de Madrid.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/liebanadental" target="_blank" rel="noopener noreferrer" className="bg-[#5B8FB9]/10 p-2 rounded-full hover:bg-[#5B8FB9] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#E8E4D9]">Enlaces Rápidos</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="/" className="hover:text-[#5B8FB9] transition-colors">Inicio</a></li>
              <li><a href="/tratamientos" className="hover:text-[#5B8FB9] transition-colors">Nuestros Tratamientos</a></li>
              <li><a href="/equipo" className="hover:text-[#5B8FB9] transition-colors">Equipo Médico</a></li>
              <li><a href="/testimonios" className="hover:text-[#5B8FB9] transition-colors">Testimonios</a></li>
              <li><a href="/contacto" className="hover:text-[#5B8FB9] transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#E8E4D9]">Contacto</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="font-medium text-white">Dirección:</span>
                Calle del Monasterio de Liébana 5-7, Fuencarral-El Pardo, Madrid, 28049
              </li>
              <li className="flex items-start gap-3">
                <span className="font-medium text-white">Teléfono:</span>
                <span>(+34) 649 537 609 / (+34) 912 440 671</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-medium text-white">Email:</span>
                clinicadentalliebana7@gmail.com
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Clínica Dental Liébana Bobadilla & Sada. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
