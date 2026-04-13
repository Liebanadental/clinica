"use client";

import React from 'react';
import Link from 'next/link';
import { Smile, Sparkles, Shield, Heart, Star, Zap, ArrowRight, Baby, CircleDot } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from './animations/FadeIn';

const services = [
  {
    title: "Ortodoncia",
    description: "Alinea tu sonrisa con los últimos avances en brackets y alineadores invisibles. Corregimos la posición de tus dientes priorizando la estética y la función.",
    icon: Smile,
    categoryIndex: 0 // Maps to Ortodoncia in tratamientos
  },
  {
    title: "Implantes Dentales",
    description: "Recupera la funcionalidad y estética de tu sonrisa de forma permanente con implantes de titanio de alta gama y coronas de porcelana.",
    icon: Shield,
    categoryIndex: 1 // Maps to Implantología in tratamientos
  },
  {
    title: "Blanqueamiento",
    description: "Ilumina tu sonrisa con tratamientos seguros y efectivos. Resultados visibles desde la primera sesión con tecnología LED avanzada.",
    icon: Sparkles,
    categoryIndex: 2 // Maps to Estética Dental in tratamientos
  },
  {
    title: "Odontología General",
    description: "Revisiones, limpiezas y cuidado preventivo para toda la familia. Detectamos problemas a tiempo para garantizar tu salud bucal a largo plazo.",
    icon: Heart,
    categoryIndex: 3 // Maps to Odontología General in tratamientos
  },
  {
    title: "Periodoncia",
    description: "Tratamiento especializado para la salud de tus encías. Prevenimos y tratamos enfermedades periodontales para salvar tus dientes naturales.",
    icon: Star,
    categoryIndex: 4 // Maps to Periodoncia in tratamientos
  },
  {
    title: "Endodoncia",
    description: "Salvamos tus dientes con tratamientos de conducto sin dolor. Utilizamos microscopios clínicos para garantizar la máxima precisión.",
    icon: Zap,
    categoryIndex: 5 // Maps to Endodoncia in tratamientos
  },
  {
    title: "Odontopediatría",
    description: "Cuidado dental especializado para los más pequeños en un ambiente amigable y de confianza, creando experiencias positivas desde la infancia.",
    icon: Baby,
    categoryIndex: 6 // Maps to Odontopediatría in tratamientos
  },
  {
    title: "Bruxismo, ATM y Oclusión",
    description: "Diagnóstico y tratamiento del bruxismo, trastornos de la articulación temporomandibular y problemas de mordida con soluciones personalizadas.",
    icon: CircleDot,
    categoryIndex: 7 // Maps to Bruxismo, ATM y Oclusión in tratamientos
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-[#fffbf0]">
      <div className="container mx-auto px-6 md:px-12">

        {/* Enhanced Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeIn delay={0.1}>
            <span className="text-[#b5912a] font-bold tracking-widest uppercase text-xs mb-4 block">
              Excelencia Clínica
            </span>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0f3d56] mb-6 leading-tight">
              Nuestros Tratamientos
            </h2>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="w-24 h-1 bg-[#b5912a] mx-auto rounded-full mb-8"></div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-gray-600 text-lg leading-relaxed">
              Ofrecemos soluciones integrales diseñadas para tu salud y estética. Combinamos <span className="font-semibold text-[#0f3d56]">ciencia y arte</span> para ofrecerte los mejores resultados en cada especialidad odontológica.
            </p>
          </FadeIn>
        </div>

        {/* Services Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10" staggerDelay={0.1}>
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <div
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 group border border-gray-100 flex flex-col relative overflow-hidden h-full"
              >
              {/* Decorative background element on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#b5912a]/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>

              <div className="w-16 h-16 bg-[#FFFBF0] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#0f3d56] transition-colors duration-300 z-10">
                <service.icon className="w-8 h-8 text-[#0f3d56] group-hover:text-[#b5912a] transition-colors duration-300" strokeWidth={1.5} />
              </div>

              <h3 className="text-xl font-bold text-[#0f3d56] mb-4 group-hover:text-[#b5912a] transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>

              <Link
                href={`/tratamientos?category=${service.categoryIndex}`}
                className="flex items-center text-[#0f3d56] font-semibold text-sm group-hover:text-[#b5912a] transition-colors mt-auto"
              >
                <span>Más información</span>
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" />
              </Link>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA to Treatments Page */}
        <FadeIn delay={0.2}>
          <div className="text-center mt-16">
            <a
              href="/tratamientos"
              className="inline-block bg-[#0f3d56] text-white px-10 py-4 rounded-lg font-semibold hover:bg-[#0a2d42] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Ver Todos los Tratamientos
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Services;
