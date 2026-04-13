"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { Check, Wifi, Coffee, Car, Shield, Award, Clock, MapPin } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';

export default function ClinicaPage() {
    const facilities = [
        {
            title: "Recepción y Sala de Espera",
            description: "Ambiente acogedor con WiFi gratuito, café de cortesía y revistas actualizadas.",
            image: "/clinica-jirafa.jpg",
            features: ["WiFi Gratuito", "Café Premium", "Zona de Lectura"]
        },
        {
            title: "Gabinetes de Tratamiento",
            description: "3 gabinetes equipados con la última tecnología dental y sistemas de esterilización avanzados.",
            image: "/clinica-tratamiento.jpg",
            features: ["Tecnología 3D", "Esterilización UV", "Sillones Ergonómicos"]
        },
        {
            title: "Sala de Radiología Digital",
            description: "Equipamiento radiológico de última generación con mínima exposición a radiación.",
            image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1200",
            features: ["Rayos X Digital", "TAC 3D", "Ortopantomografía"]
        }
    ];

    const technology = [
        { name: "Escáner Intraoral 3D", description: "Impresiones digitales sin moldes incómodos" },
        { name: "Microscopio Dental", description: "Precisión extrema en tratamientos de endodoncia" },
        { name: "Láser Dental", description: "Tratamientos menos invasivos y más rápidos" },
        { name: "Sistema CAD/CAM", description: "Diseño y fabricación de prótesis en el mismo día" },
        { name: "Sedación Consciente", description: "Máximo confort durante procedimientos complejos" },
        { name: "Esterilización Clase B", description: "Máximo nivel de seguridad e higiene" },
        { name: "Laboratorio Digital", description: "Tecnología digital integrada para diseño y fabricación de restauraciones" },
        { name: "Aula de Formación", description: "Centro de formación propio para la actualización continua de nuestro equipo" }
    ];

    const amenities = [
        { icon: Wifi, label: "WiFi Gratuito" },
        { icon: Coffee, label: "Café de Cortesía" },
        { icon: Car, label: "Parking Gratuito" },
        { icon: Clock, label: "Horario Flexible" }
    ];

    const certifications = [
        { name: "ISO 9001:2015", description: "Gestión de Calidad" },
        { name: "Registro Sanitario", description: "Comunidad de Madrid" },
        { name: "Certificación Europea", description: "Equipamiento Médico CE" },
        { name: "Protección de Datos", description: "RGPD Compliance" }
    ];

    return (
        <main className="min-h-screen bg-[#fffbf0] text-[#333333] font-sans">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f3d56] to-[#0a2d42]">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
                </div>
                <div className="relative z-10 text-center text-white px-6">
                    <FadeIn delay={0.2}>
                        <span className="text-xs font-bold tracking-[0.2em] uppercase block mb-4 text-[#b5912a]">
                            Instalaciones
                        </span>
                    </FadeIn>
                    <FadeIn delay={0.4}>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Nuestra Clínica
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.6}>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                            Tecnología de vanguardia en un ambiente acogedor y minimalista
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-20 bg-[#fffbf0]">
                <div className="container mx-auto px-6 md:px-12">
                    <FadeIn delay={0.1}>
                        <div className="max-w-4xl mx-auto text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-[#0f3d56] mb-6">
                                Instalaciones de Última Generación
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Nuestra clínica cuenta con más de 400m² distribuidos en espacios diseñados para ofrecer
                                la mejor experiencia odontológica. Cada detalle ha sido cuidadosamente pensado para combinar
                                funcionalidad, tecnología y confort.
                            </p>
                        </div>
                    </FadeIn>

                    {/* Stats Grid */}
                    <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20" staggerDelay={0.1}>
                        {[
                            { value: "400m²", label: "Superficie Total" },
                            { value: "3", label: "Gabinetes Equipados" },
                            { value: "15+", label: "Años de Experiencia" },
                            { value: "100%", label: "Equipamiento Digital" }
                        ].map((stat, idx) => (
                            <StaggerItem key={idx}>
                                <div className="text-center p-6 bg-white rounded-2xl">
                                    <p className="text-4xl font-bold text-[#b5912a] mb-2">{stat.value}</p>
                                    <p className="text-sm text-gray-600 uppercase tracking-wider">{stat.label}</p>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Virtual Tour - Bento Grid */}
            <section className="py-20 bg-[#fffbf0]">
                <div className="container mx-auto px-6 md:px-12">
                    <FadeIn delay={0.1}>
                        <div className="text-center mb-16">
                            <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase block mb-3">
                                Tour Virtual
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold text-[#0f3d56]">
                                Descubre Nuestros Espacios
                            </h2>
                        </div>
                    </FadeIn>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.15}>
                        {facilities.map((facility, idx) => (
                            <StaggerItem key={idx}><div
                                className="group relative overflow-hidden rounded-2xl"
                            >
                                <div className="relative h-80">
                                    <img
                                        src={facility.image}
                                        alt={facility.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                        <h3 className="text-2xl font-bold mb-2">{facility.title}</h3>
                                        <p className="text-gray-200 mb-4">{facility.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {facility.features.map((feature, i) => (
                                                <span
                                                    key={i}
                                                    className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full"
                                                >
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div></StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Technology Section */}
            <section className="py-20 bg-[#fffbf0]">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="text-center mb-16">
                        <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase block mb-3">
                            Tecnología
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-[#0f3d56] mb-4">
                            Equipamiento de Vanguardia
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Invertimos constantemente en la última tecnología dental para ofrecerte
                            tratamientos más precisos, rápidos y cómodos.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {technology.map((tech, idx) => (
                            <div
                                key={idx}
                                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:border-[#b5912a] transition-all duration-300 hover:shadow-xl"
                            >
                                <div className="w-12 h-12 bg-[#0f3d56] rounded-xl flex items-center justify-center mb-4">
                                    <Check className="w-6 h-6 text-[#b5912a]" />
                                </div>
                                <h3 className="text-xl font-bold text-[#0f3d56] mb-2">{tech.name}</h3>
                                <p className="text-gray-600">{tech.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Amenities & Certifications */}
            <section className="py-20 bg-[#fffbf0]">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid md:grid-cols-2 gap-16">

                        {/* Amenities */}
                        <div>
                            <h2 className="text-3xl font-bold text-[#0f3d56] mb-8">Comodidades</h2>
                            <div className="space-y-4">
                                {amenities.map((amenity, idx) => {
                                    const Icon = amenity.icon;
                                    return (
                                        <div
                                            key={idx}
                                            className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                                        >
                                            <div className="w-12 h-12 bg-[#0f3d56] rounded-lg flex items-center justify-center flex-shrink-0">
                                                <Icon className="w-6 h-6 text-[#b5912a]" />
                                            </div>
                                            <span className="text-lg font-semibold text-gray-800">{amenity.label}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Certifications */}
                        <div>
                            <h2 className="text-3xl font-bold text-[#0f3d56] mb-8">Certificaciones</h2>
                            <div className="space-y-4">
                                {certifications.map((cert, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                                    >
                                        <div className="w-12 h-12 bg-[#b5912a] rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Award className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-800 mb-1">{cert.name}</h3>
                                            <p className="text-sm text-gray-600">{cert.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Location & Hours */}
            <section className="py-20 bg-[#fffbf0]">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0f3d56] mb-6">
                                Ubicación y Horarios
                            </h2>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <MapPin className="w-6 h-6 text-[#b5912a] flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-gray-800 mb-1">Dirección</h3>
                                        <p className="text-gray-600">
                                            Calle del Monasterio de Liébana 5-7<br />
                                            Fuencarral-El Pardo, Madrid, 28049
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Clock className="w-6 h-6 text-[#b5912a] flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-gray-800 mb-2">Horario</h3>
                                        <div className="text-gray-600 space-y-1">
                                            <p>Lun, Mié: 15:00 - 20:30</p>
                                            <p>Mar, Jue, Vie: 11:00 - 20:30</p>
                                            <p className="text-sm text-gray-500">Sáb - Dom: Cerrado</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Car className="w-6 h-6 text-[#b5912a] flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-gray-800 mb-1">Parking</h3>
                                        <p className="text-gray-600">
                                            Parking gratuito para pacientes en el edificio
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-2xl h-96 overflow-hidden shadow-lg">
                            <iframe
                                src="https://maps.google.com/maps?q=C.+del+Monasterio+de+Liébana,+Fuencarral-El+Pardo,+28049+Madrid,+España&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Ubicación Clínica"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-[#0f3d56] to-[#0a2d42]">
                <div className="container mx-auto px-6 md:px-12 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        ¿Quieres Conocer Nuestras Instalaciones?
                    </h2>
                    <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                        Agenda una visita guiada gratuita y descubre por qué somos la mejor opción para tu salud dental
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="https://wa.me/34649537609"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#b5912a] text-[#0f3d56] px-8 py-4 rounded-lg font-semibold hover:bg-[#9a7a1f] transition-colors duration-300 shadow-xl inline-block"
                        >
                            Reservar Consulta
                        </a>
                    </div>
                </div>
            </section>

            <Footer />

            {/* Floating WhatsApp Button */}
            <a
                href="https://wa.me/34649537609"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-8 right-8 z-50 group"
                aria-label="Contactar por WhatsApp"
            >
                <div className="relative flex items-center justify-center">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping duration-1000"></span>
                    <div className="relative bg-[#25D366] p-4 rounded-full text-white shadow-lg hover:bg-[#1ebc57] transition-transform transform hover:scale-110 flex items-center justify-center">
                        <WhatsAppIcon className="w-8 h-8" />
                    </div>
                </div>
            </a>
        </main>
    );
}
