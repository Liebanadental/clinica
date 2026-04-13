"use client";

import React from 'react';
import { Star } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { GoogleIcon } from './icons/GoogleIcon';
import { FadeIn } from './animations/FadeIn';

const Hero = () => {
  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-gray-100 mt-24">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/homepage.jpg"
          alt="Clínica Dental Liébana - Fachada"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay: Dark Navy to Transparent/Dark */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f3d56]/90 to-[#0f3d56]/40 md:to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center md:text-left">
        <div className="max-w-3xl">
          <FadeIn delay={0.2} duration={0.8}>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Tu Sonrisa, <br />Nuestra Prioridad
            </h1>
          </FadeIn>

          <FadeIn delay={0.4} duration={0.8}>
            <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
              Cuidamos de tu salud dental con tecnología 3D de vanguardia, 3 gabinetes equipados y un equipo de profesionales dedicados a tu bienestar. Contamos con servicio de urgencias.
            </p>
          </FadeIn>

          <FadeIn delay={0.6} duration={0.8}>
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mb-10">
              <button className="bg-[#b5912a] hover:bg-[#9a7a1f] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg transform hover:-translate-y-1 border border-[#b5912a]">
                Reservar Cita
              </button>
              {/* Updated Secondary CTA to WhatsApp */}
              <a
                href="https://wa.me/34649537609"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#25D366] px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center gap-2 group"
              >
                <WhatsAppIcon className="w-6 h-6 text-white group-hover:text-[#25D366] transition-colors" />
                <span>Contactar por WhatsApp</span>
              </a>
            </div>
          </FadeIn>

          {/* Rating / Reviews Component */}
          <FadeIn delay={0.8} duration={0.8}>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <div className="flex items-center gap-1 text-[#b5912a]">
                <span className="text-white text-xl font-bold mr-2">5.0</span>
                <Star fill="currentColor" className="w-5 h-5" />
                <Star fill="currentColor" className="w-5 h-5" />
                <Star fill="currentColor" className="w-5 h-5" />
                <Star fill="currentColor" className="w-5 h-5" />
                <Star fill="currentColor" className="w-5 h-5" />
                <div className="ml-2 bg-white rounded-full p-1 shadow-sm">
                  <GoogleIcon className="w-5 h-5" />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-300 font-medium">Hemos ayudado a más de 8000 pacientes</span>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default Hero;
