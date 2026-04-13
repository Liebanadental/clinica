import React from 'react';
import { Clock, MapPin, ThumbsUp, Phone, Mail } from 'lucide-react';

const ContactPreview = () => {
  return (
    <section className="py-20 bg-[#fafafa]">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left Column: Form */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0f3d56] mb-6 leading-tight">
                Estas a punto de transformar tu vida
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Rellena el formulario y nuestro equipo se pondrá en contacto contigo para resolver tus dudas y ayudarte a dar el primer paso hacia tu mejor versión.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="nombre" className="sr-only">Nombre</label>
                  <input
                    type="text"
                    id="nombre"
                    placeholder="Nombre"
                    className="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:border-[#0f3d56] focus:ring-1 focus:ring-[#0f3d56] transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="apellido" className="sr-only">Apellido</label>
                  <input
                    type="text"
                    id="apellido"
                    placeholder="Apellido"
                    className="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:border-[#0f3d56] focus:ring-1 focus:ring-[#0f3d56] transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="sr-only">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="E-mail"
                    className="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:border-[#0f3d56] focus:ring-1 focus:ring-[#0f3d56] transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="telefono" className="sr-only">Teléfono</label>
                  <input
                    type="tel"
                    id="telefono"
                    placeholder="Teléfono"
                    className="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:border-[#0f3d56] focus:ring-1 focus:ring-[#0f3d56] transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="mensaje" className="sr-only">Mensaje</label>
                <textarea
                  id="mensaje"
                  rows={4}
                  placeholder="Déjenos sus preguntas o comentarios para que podamos ayudarle mejor"
                  className="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:border-[#0f3d56] focus:ring-1 focus:ring-[#0f3d56] transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#0f3d56] text-white px-8 py-3 rounded text-sm font-medium hover:bg-[#132f42] transition-colors shadow-lg"
              >
                Enviar mensaje
              </button>
            </form>
          </div>

          {/* Right Column: Contact Info */}
          <div className="space-y-12 lg:mt-2">
            <h2 className="text-4xl font-bold text-[#0f3d56] mb-8">
              Contáctanos
            </h2>

            {/* Phone / Email Grid */}
            <div className="grid sm:grid-cols-2 gap-8 pb-8 border-b border-gray-200">
              <div>
                <span className="text-gray-400 text-sm block mb-1">Contacto:</span>
                <a href="tel:+34649537609" className="text-lg font-bold text-[#0f3d56] hover:text-[#b5912a] transition-colors block">
                  (+34) 649 537 609
                </a>
                <a href="tel:+34912440671" className="text-lg font-bold text-[#0f3d56] hover:text-[#b5912a] transition-colors block">
                  (+34) 912 440 671
                </a>
              </div>
              <div>
                <span className="text-gray-400 text-sm block mb-1">email:</span>
                <a href="mailto:clinicadentalliebana7@gmail.com" className="text-lg font-bold text-[#0f3d56] hover:text-[#b5912a] transition-colors border-b border-[#0f3d56] hover:border-[#b5912a]">
                  clinicadentalliebana7@gmail.com
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#0f3d56] font-bold text-lg">
                <Clock className="w-5 h-5" />
                <h3>Nuestro horario</h3>
              </div>
              <div className="grid grid-cols-[1fr,auto] gap-4 text-gray-600 border-b border-gray-200 pb-4">
                <span>Lunes y Miércoles:</span>
                <span>15:00–20:30</span>
              </div>
              <div className="grid grid-cols-[1fr,auto] gap-4 text-gray-600 border-b border-gray-200 pb-4">
                <span>Martes, Jueves y Viernes:</span>
                <span>11:00–20:30</span>
              </div>
              <div className="grid grid-cols-[1fr,auto] gap-4 text-gray-600 border-b border-gray-200 pb-4">
                <span>Sábados y Domingos:</span>
                <span>Cerrado</span>
              </div>
            </div>

            {/* Location */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#0f3d56] font-bold text-lg">
                <MapPin className="w-5 h-5" />
                <h3>Localización</h3>
              </div>
              <div>
                <span className="text-gray-400 text-sm block mb-1">Visítanos en:</span>
                <p className="text-2xl font-bold text-[#0f3d56]">Madrid</p>
                <p className="text-gray-600 mt-1">Calle del Monasterio de Liébana 5-7, Fuencarral-El Pardo, 28049</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactPreview;
