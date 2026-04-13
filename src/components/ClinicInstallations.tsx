"use client";

import React from 'react';
import { FadeIn, StaggerContainer, StaggerItem } from './animations/FadeIn';

const ClinicInstallations = () => {
    const images = [
        {
            url: "/clinica-gabinete.jpg",
            alt: "Gabinete dental infantil",
            className: "col-span-1 md:col-span-2 row-span-2 h-full"
        },
        {
            url: "/images/clinica-tratamiento-ninos.jpg",
            alt: "Tratamiento dental infantil",
            className: "col-span-1 h-64 md:h-full"
        },
        {
            url: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
            alt: "Tecnología de vanguardia",
            className: "col-span-1 h-64 md:h-full"
        }
    ];

    return (
        <section className="py-24 bg-[#fffbf0]">
            <div className="container mx-auto px-6 md:px-12">

                <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
                    <FadeIn delay={0.1} className="md:w-1/2">
                        <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase block mb-3">
                            La Clínica
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-[#0f3d56] leading-tight">
                            Un espacio diseñado para tu tranquilidad
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.3} className="md:w-1/2 md:pt-8">
                        <p className="text-gray-500 text-lg leading-relaxed">
                            Nuestras instalaciones combinan la última tecnología odontológica con un ambiente relajante y minimalista.
                            Cada rincón ha sido pensado para que tu visita sea una experiencia confortable, lejos del estrés tradicional
                            de una clínica dental.
                        </p>
                    </FadeIn>
                </div>

                {/* Masonry-style Grid */}
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]" staggerDelay={0.15}>
                    {images.map((img, index) => (
                        <StaggerItem key={index}>
                            <div
                                className={`relative overflow-hidden rounded-2xl group ${img.className}`}
                            >
                            <img
                                src={img.url}
                                alt={img.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                <StaggerContainer className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-100 pt-12" staggerDelay={0.1}>
                    {[
                        { label: "Gabinetes", value: "3" },
                        { label: "Tecnología", value: "3D" },
                        { label: "Sala de Espera", value: "Premium" },
                        { label: "Parking", value: "Gratuito" }
                    ].map((stat, idx) => (
                        <StaggerItem key={idx}>
                            <div className="text-center md:text-left">
                                <p className="text-3xl font-bold text-[#b5912a] mb-1">{stat.value}</p>
                                <p className="text-sm text-gray-400 uppercase tracking-wider font-medium">{stat.label}</p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                <FadeIn delay={0.2}>
                    <div className="text-center mt-16">
                        <a href="/clinica" className="inline-block border border-[#0f3d56] text-[#0f3d56] px-10 py-3 rounded uppercase text-sm font-bold tracking-wide hover:bg-[#0f3d56] hover:text-white transition-all duration-300">
                            Ver más sobre nuestras instalaciones
                        </a>
                    </div>
                </FadeIn>

            </div>
        </section>
    );
};

export default ClinicInstallations;
