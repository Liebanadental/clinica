"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { Smile, Shield, Sparkles, Heart, Star, Zap, ChevronDown, Check, Clock, Euro, Baby, CircleDot } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';

function TratamientosContent() {
    const searchParams = useSearchParams();
    const categoryParam = searchParams.get('category');
    const [activeCategory, setActiveCategory] = useState(0);

    // Set active category from URL parameter on mount
    useEffect(() => {
        if (categoryParam !== null) {
            const categoryIndex = parseInt(categoryParam, 10);
            if (!isNaN(categoryIndex) && categoryIndex >= 0 && categoryIndex < treatments.length) {
                setActiveCategory(categoryIndex);
            }
        }
    }, [categoryParam]);

    const treatments = [
        {
            title: "Ortodoncia",
            icon: Smile,
            description: "Corrige la posición de tus dientes y mejora tu mordida con las técnicas más avanzadas.",
            color: "#0f3d56",
            services: [
                {
                    name: "Brackets Metálicos",
                    description: "Opción tradicional y efectiva para corregir todo tipo de maloclusiones.",
                    duration: "18-24 meses",
                    benefits: ["Alta efectividad", "Económico", "Resultados predecibles"]
                },
                {
                    name: "Brackets Estéticos (Zafiro)",
                    description: "Brackets transparentes que se mimetizan con tus dientes para un tratamiento discreto.",
                    duration: "18-24 meses",
                    benefits: ["Estética mejorada", "Resistentes", "Transparentes"]
                },
                {
                    name: "Ortodoncia Invisible (Invisalign)",
                    description: "Alineadores transparentes removibles que corrigen tu sonrisa sin que nadie lo note.",
                    duration: "12-18 meses",
                    benefits: ["Totalmente invisible", "Removible", "Cómodo", "Higiénico"]
                },
                {
                    name: "Ortodoncia Lingual",
                    description: "Brackets colocados en la parte interna de los dientes, completamente invisibles.",
                    duration: "18-24 meses",
                    benefits: ["100% invisible", "Efectivo", "Personalizado"]
                }
            ]
        },
        {
            title: "Implantología",
            icon: Shield,
            description: "Recupera la funcionalidad y estética de tus dientes perdidos con soluciones permanentes.",
            color: "#b5912a",
            services: [
                {
                    name: "Implante Unitario",
                    description: "Reemplazo de un solo diente con implante de titanio y corona de porcelana.",
                    duration: "3-6 meses",
                    benefits: ["Solución permanente", "Aspecto natural", "Preserva hueso"]
                },
                {
                    name: "Puente sobre Implantes",
                    description: "Reemplazo de varios dientes contiguos mediante implantes y prótesis fija.",
                    duration: "4-6 meses",
                    benefits: ["Estabilidad total", "No afecta dientes sanos", "Duradero"]
                },
                {
                    name: "All-on-4",
                    description: "Arcada completa fija sobre 4 implantes, solución ideal para edentulismo total.",
                    duration: "1 día (provisional)",
                    benefits: ["Dientes fijos en 24h", "Menos implantes", "Recuperación rápida"]
                },
                {
                    name: "Elevación de Seno Maxilar",
                    description: "Regeneración ósea para permitir la colocación de implantes en maxilar superior.",
                    duration: "6-9 meses",
                    benefits: ["Permite implantes", "Técnica segura", "Resultados predecibles"]
                }
            ]
        },
        {
            title: "Estética Dental",
            icon: Sparkles,
            description: "Transforma tu sonrisa con tratamientos estéticos de última generación.",
            color: "#5B8FB9",
            services: [
                {
                    name: "Blanqueamiento LED",
                    description: "Aclara tus dientes hasta 8 tonos en una sola sesión con tecnología LED.",
                    duration: "1 hora",
                    benefits: ["Resultados inmediatos", "Indoloro", "Seguro"]
                },
                {
                    name: "Carillas de Porcelana",
                    description: "Láminas ultrafinas de porcelana que transforman completamente tu sonrisa.",
                    duration: "2-3 sesiones",
                    benefits: ["Aspecto natural", "Duraderas", "Resistentes a manchas"]
                },
                {
                    name: "Diseño de Sonrisa Digital",
                    description: "Planificación digital de tu nueva sonrisa antes de iniciar el tratamiento.",
                    duration: "1 sesión",
                    benefits: ["Visualiza resultados", "Planificación precisa", "Sin sorpresas"]
                },
                {
                    name: "Reconstrucción Estética",
                    description: "Restauración de dientes dañados con composite de última generación.",
                    duration: "1-2 horas",
                    benefits: ["Mismo día", "Aspecto natural", "Conservador"]
                }
            ]
        },
        {
            title: "Odontología General",
            icon: Heart,
            description: "Cuidado preventivo y tratamientos básicos para mantener tu salud bucal óptima.",
            color: "#0f3d56",
            services: [
                {
                    name: "Revisión Completa",
                    description: "Examen exhaustivo de dientes, encías y tejidos bucales con radiografías.",
                    duration: "30 minutos",
                    benefits: ["Detección temprana", "Plan personalizado", "Sin compromiso"]
                },
                {
                    name: "Limpieza Dental Profesional",
                    description: "Eliminación de sarro y placa bacteriana con ultrasonidos y pulido.",
                    duration: "45 minutos",
                    benefits: ["Previene caries", "Encías sanas", "Aliento fresco"]
                },
                {
                    name: "Empastes (Obturaciones)",
                    description: "Tratamiento de caries con composite del color de tu diente.",
                    duration: "30-60 minutos",
                    benefits: ["Estético", "Duradero", "Indoloro"]
                },
                {
                    name: "Extracción Simple",
                    description: "Extracción de piezas dentales con anestesia local y cuidados post-operatorios.",
                    duration: "30 minutos",
                    benefits: ["Rápido", "Indoloro", "Seguimiento incluido"]
                }
            ]
        },
        {
            title: "Periodoncia",
            icon: Star,
            description: "Tratamiento especializado para la salud de tus encías y prevención de pérdida dental.",
            color: "#b5912a",
            services: [
                {
                    name: "Estudio Periodontal",
                    description: "Evaluación completa del estado de encías y hueso con sondaje y radiografías.",
                    duration: "45 minutos",
                    benefits: ["Diagnóstico preciso", "Plan personalizado", "Prevención"]
                },
                {
                    name: "Curetaje (Raspado y Alisado)",
                    description: "Limpieza profunda bajo las encías para eliminar bacterias y sarro subgingival.",
                    duration: "1-2 horas",
                    benefits: ["Detiene enfermedad", "Salva dientes", "Mejora salud general"]
                },
                {
                    name: "Cirugía Periodontal",
                    description: "Intervención quirúrgica para casos avanzados de periodontitis.",
                    duration: "1-2 horas",
                    benefits: ["Regeneración ósea", "Salva dientes", "Resultados duraderos"]
                },
                {
                    name: "Mantenimiento Periodontal",
                    description: "Limpiezas periódicas especializadas para pacientes con enfermedad periodontal.",
                    duration: "45 minutos",
                    benefits: ["Previene recaídas", "Control continuo", "Salud a largo plazo"]
                }
            ]
        },
        {
            title: "Endodoncia",
            icon: Zap,
            description: "Salvamos tus dientes eliminando infecciones y dolor con tratamientos de conducto precisos.",
            color: "#5B8FB9",
            services: [
                {
                    name: "Endodoncia Unirradicular",
                    description: "Tratamiento de conducto en dientes con una sola raíz (incisivos, caninos).",
                    duration: "1 hora",
                    benefits: ["Salva el diente", "Sin dolor", "Precisión microscópica"]
                },
                {
                    name: "Endodoncia Birradicular",
                    description: "Tratamiento de conducto en dientes con dos raíces (premolares).",
                    duration: "1-1.5 horas",
                    benefits: ["Técnica avanzada", "Alta tasa de éxito", "Indoloro"]
                },
                {
                    name: "Endodoncia Multirradicular",
                    description: "Tratamiento de conducto en molares con múltiples raíces y conductos.",
                    duration: "1.5-2 horas",
                    benefits: ["Microscopio clínico", "Máxima precisión", "Evita extracción"]
                },
                {
                    name: "Retratamiento Endodóntico",
                    description: "Repetición de endodoncia en casos de fracaso o reinfección.",
                    duration: "2 horas",
                    benefits: ["Segunda oportunidad", "Técnica especializada", "Salva el diente"]
                }
            ]
        },
        {
            title: "Odontopediatría",
            icon: Baby,
            description: "Cuidado dental especializado para los más pequeños en un ambiente amigable y de confianza.",
            color: "#0f3d56",
            services: [
                {
                    name: "Primera Visita Infantil",
                    description: "Revisión dental adaptada a niños para crear una experiencia positiva desde el primer momento.",
                    duration: "30 minutos",
                    benefits: ["Ambiente adaptado", "Sin miedo", "Prevención temprana"]
                },
                {
                    name: "Selladores de Fisuras",
                    description: "Protección de los surcos dentales para prevenir caries en dientes definitivos.",
                    duration: "20 minutos",
                    benefits: ["Prevención eficaz", "Indoloro", "Protección duradera"]
                },
                {
                    name: "Pulpotomía",
                    description: "Tratamiento del nervio en dientes de leche para preservar la pieza hasta su caída natural.",
                    duration: "30-45 minutos",
                    benefits: ["Conserva el diente", "Sin dolor", "Guía la erupción"]
                },
                {
                    name: "Ortodoncia Interceptiva",
                    description: "Corrección temprana de problemas de mordida y posición dental en niños.",
                    duration: "Variable",
                    benefits: ["Corrección temprana", "Menos tratamiento futuro", "Mejora el desarrollo"]
                }
            ]
        },
        {
            title: "Bruxismo, ATM y Oclusión",
            icon: CircleDot,
            description: "Diagnóstico y tratamiento del bruxismo, trastornos de la articulación temporomandibular y problemas de oclusión.",
            color: "#b5912a",
            services: [
                {
                    name: "Diagnóstico de Bruxismo",
                    description: "Evaluación completa de los signos de bruxismo y desgaste dental.",
                    duration: "30 minutos",
                    benefits: ["Diagnóstico preciso", "Plan personalizado", "Prevención de daños"]
                },
                {
                    name: "Férula de Descarga",
                    description: "Dispositivo personalizado para proteger los dientes y relajar la musculatura mandibular.",
                    duration: "2 sesiones",
                    benefits: ["Protege los dientes", "Alivia dolor", "Hecha a medida"]
                },
                {
                    name: "Tratamiento de ATM",
                    description: "Tratamiento de los trastornos de la articulación temporomandibular para aliviar dolor y mejorar la función.",
                    duration: "Variable",
                    benefits: ["Alivia dolor mandibular", "Mejora movilidad", "Tratamiento integral"]
                },
                {
                    name: "Ajuste Oclusal",
                    description: "Corrección de la mordida para lograr un contacto dental equilibrado y funcional.",
                    duration: "30-60 minutos",
                    benefits: ["Equilibra la mordida", "Reduce tensión", "Previene desgaste"]
                }
            ]
        }
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
                        Excelencia Clínica
                    </span>
                    </FadeIn>
                    <FadeIn delay={0.4}>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Nuestros Tratamientos
                    </h1>
                    </FadeIn>
                    <FadeIn delay={0.6}>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                        Soluciones integrales para cada necesidad dental, combinando ciencia y arte
                    </p>
                    </FadeIn>
                </div>
            </section>

            {/* Categories Overview */}
            <section className="py-16 bg-[#fffbf0]">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                        {treatments.map((category, idx) => {
                            const Icon = category.icon;
                            return (
                                <button
                                    key={idx}
                                    onClick={() => setActiveCategory(idx)}
                                    className={`p-6 rounded-xl transition-all duration-300 ${activeCategory === idx
                                        ? 'bg-[#0f3d56] text-white shadow-xl scale-105'
                                        : 'bg-white text-gray-700 hover:shadow-lg hover:scale-102'
                                        }`}
                                >
                                    <Icon className={`w-8 h-8 mx-auto mb-3 ${activeCategory === idx ? 'text-[#b5912a]' : 'text-[#0f3d56]'
                                        }`} />
                                    <p className="text-sm font-semibold text-center">{category.title}</p>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Active Category Details */}
            <section className="py-20 bg-[#fffbf0]">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="max-w-6xl mx-auto">
                        {/* Category Header */}
                        <div className="text-center mb-16">
                            {React.createElement(treatments[activeCategory].icon, {
                                className: "w-16 h-16 mx-auto mb-4 text-[#b5912a]"
                            })}
                            <h2 className="text-3xl md:text-5xl font-bold text-[#0f3d56] mb-4">
                                {treatments[activeCategory].title}
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                {treatments[activeCategory].description}
                            </p>
                        </div>

                        {/* Services Grid */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {treatments[activeCategory].services.map((service, idx) => (
                                <div
                                    key={idx}
                                    className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:border-[#b5912a] hover:shadow-xl transition-all duration-300"
                                >
                                    <h3 className="text-2xl font-bold text-[#0f3d56] mb-3">
                                        {service.name}
                                    </h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Info Grid */}
                                    <div className="flex items-center gap-2 mb-6 pb-6 border-b border-gray-200">
                                        <Clock className="w-5 h-5 text-[#b5912a]" />
                                        <div>
                                            <p className="text-xs text-gray-500">Duración</p>
                                            <p className="text-sm font-semibold text-gray-800">{service.duration}</p>
                                        </div>
                                    </div>

                                    {/* Benefits */}
                                    <div>
                                        <p className="text-sm font-semibold text-gray-700 mb-3">Beneficios:</p>
                                        <ul className="space-y-2">
                                            {service.benefits.map((benefit, i) => (
                                                <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                                    <Check className="w-4 h-4 text-[#b5912a] flex-shrink-0" />
                                                    {benefit}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0f3d56] mb-12">
                            ¿Por Qué Elegirnos?
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { title: "Tecnología Avanzada", desc: "Equipamiento de última generación para tratamientos precisos" },
                                { title: "Equipo Especializado", desc: "Profesionales con formación continua y certificaciones" },
                                { title: "Financiación Flexible", desc: "Planes de pago adaptados a tu presupuesto sin intereses" }
                            ].map((item, idx) => (
                                <div key={idx} className="p-6">
                                    <div className="w-12 h-12 bg-[#b5912a] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Check className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0f3d56] mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-[#0f3d56] to-[#0a2d42]">
                <div className="container mx-auto px-6 md:px-12 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        ¿Listo Para Transformar Tu Sonrisa?
                    </h2>
                    <FadeIn delay={0.6}>
                        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                        Agenda tu primera consulta gratuita y descubre el tratamiento perfecto para ti
                    </p>
                    </FadeIn>
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

export default function TratamientosPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-[#fffbf0] flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#0f3d56]"></div>
            </div>
        }>
            <TratamientosContent />
        </Suspense>
    );
}
