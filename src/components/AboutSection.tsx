import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="w-full bg-gray-50 py-20 md:py-24"> {/* Changed bg to gray-50 to match Features */}
      <div className="container mx-auto px-8"> {/* Aligned padding with Features component */}
        
        {/* Header Section Centered */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#0f3d56] text-xs font-bold tracking-[0.2em] uppercase block mb-4">
            Tradición y Vanguardia
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#171717] leading-tight">
            Bienvenido a <span className="text-[#0f3d56]">Clínica Liébana Bobadilla & Sada</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 font-medium">
             Expertos en diseñar sonrisas que cambian vidas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Image */}
          <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1663755489920-5e09f66d011a?q=80&w=1000&auto=format&fit=crop" 
              alt="Expertos en Estética Dental" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side: Text Content */}
          <div className="flex flex-col justify-center space-y-6 text-gray-600 text-base leading-relaxed">
            <p>
              En Clínica Liébana Bobadilla & Sada, la odontología no es solo una profesión, es un legado. Con años de experiencia en el corazón de Madrid, hemos perfeccionado un método que une la <strong className="text-[#0f3d56]">precisión científica</strong> con la calidez humana, ofreciendo una alternativa real a la odontología convencional.
            </p>

            <p>
              Nuestro enfoque es único: huimos de la estandarización. Aquí, cada diagnóstico es estudiado minuciosamente por nuestro equipo clínico, garantizando soluciones que no solo restauran la salud, sino que respetan la <strong className="text-[#0f3d56]">armonía natural</strong> de su rostro.
            </p>

            <p>
              Desde el diseño digital de sonrisas hasta la implantología avanzada, ponemos la tecnología más puntera al servicio de su bienestar. Su tranquilidad y confianza son nuestro mayor éxito.
            </p>

            <div className="pt-4">
              <button className="bg-[#0f3d56] text-white px-8 py-3 rounded text-sm font-medium tracking-wide hover:bg-[#132f42] transition-colors shadow-md">
                Conozca al Equipo
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
