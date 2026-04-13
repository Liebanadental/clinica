"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "María García",
    text: "Excelente atención y profesionalismo. El equipo me hizo sentir muy cómoda durante todo el tratamiento. ¡100% recomendado!",
    rating: 5,
    role: "Ortodoncia Invisible"
  },
  {
    name: "Carlos Rodríguez",
    text: "Llevo años buscando un dentista de confianza y por fin lo encontré. Tecnología increíble y un trato humano inmejorable.",
    rating: 5,
    role: "Implantes"
  },
  {
    name: "Ana Martínez",
    text: "Mis hijos vienen felices al dentista, algo que nunca pensé decir. Gracias por la paciencia y dedicación con los más pequeños.",
    rating: 5,
    role: "Odontopediatría"
  },
  {
    name: "Javier López",
    text: "Profesionalidad absoluta. Me realicé un diseño de sonrisa y el resultado fue espectacular, superando mis expectativas.",
    rating: 5,
    role: "Estética Dental"
  },
  {
    name: "Carmen Ruiz",
    text: "La clínica es preciosa y el trato inmejorable. La Dra. Sada es una artista, cuidando cada detalle al máximo.",
    rating: 5,
    role: "Carillas"
  },
  {
    name: "Pedro Gómez",
    text: "Tenía pánico al dentista, pero aquí me sentí como en casa. Cero dolor y mucha empatía por parte de todo el equipo.",
    rating: 5,
    role: "Odontología General"
  },
  {
    name: "Laura Díaz",
    text: "Un equipo de 10. Tecnología puntera, ubicación perfecta en Madrid y unos resultados impecables.",
    rating: 5,
    role: "Periodoncia"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Update items per page based on window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = testimonials.length - itemsPerPage;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  }, [maxIndex]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  };

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="py-20 bg-[#fffbf0] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f3d56] mb-4">Lo Que Dicen Nuestros Pacientes</h2>
          <p className="text-gray-500">Historias reales de sonrisas transformadas</p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-white p-3 rounded-full shadow-lg text-[#0f3d56] hover:bg-[#0f3d56] hover:text-white transition-all hidden md:flex"
            aria-label="Anterior testimonio"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-white p-3 rounded-full shadow-lg text-[#0f3d56] hover:bg-[#0f3d56] hover:text-white transition-all hidden md:flex"
            aria-label="Siguiente testimonio"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slider Track */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-3 md:px-4 box-border"
                  style={{ width: `${100 / itemsPerPage}%` }}
                >
                  <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full relative hover:shadow-md transition-shadow flex flex-col justify-between">
                    <div>
                      <Quote className="absolute top-8 right-8 w-8 h-8 text-[#E8E4D9]" />

                      <div className="flex gap-1 mb-6 text-[#b5912a]">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} fill="currentColor" className="w-4 h-4" />
                        ))}
                      </div>

                      <p className="text-gray-600 italic mb-8 leading-relaxed">
                        "{testimonial.text}"
                      </p>
                    </div>

                    <div className="flex items-center gap-4 pt-4 border-t border-gray-50">
                      <div className="w-10 h-10 bg-[#0f3d56]/5 rounded-full flex items-center justify-center font-bold text-[#0f3d56] flex-shrink-0">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#0f3d56] text-sm">{testimonial.name}</h4>
                        <span className="text-xs text-gray-400 block">{testimonial.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Dots */}
          <div className="flex justify-center gap-2 mt-8 md:hidden">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? "bg-[#0f3d56] w-4" : "bg-gray-300"
                  }`}
                aria-label={`Ir al testimonio ${idx + 1}`}
              />
            ))}
          </div>

          {/* CTA to Testimonials Page */}
          <div className="text-center mt-12">
            <a
              href="/testimonios"
              className="inline-block bg-[#0f3d56] text-white px-10 py-4 rounded-lg font-semibold hover:bg-[#0a2d42] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Ver Todos los Testimonios
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
