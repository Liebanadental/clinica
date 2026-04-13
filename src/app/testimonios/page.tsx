"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { Star, Quote, Users, Award, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';

export default function TestimoniosPage() {
    const [activeBeforeAfter, setActiveBeforeAfter] = useState(0);
    const [visibleTestimonials, setVisibleTestimonials] = useState(0);

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
            text: "La clínica es preciosa y el trato inmejorable. La Dra. González es una artista, cuidando cada detalle al máximo.",
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
        },
        {
            name: "Roberto Sánchez",
            text: "Después de años con problemas de encías, finalmente encontré una solución. El tratamiento fue efectivo y sin molestias.",
            rating: 5,
            role: "Periodoncia"
        },
        {
            name: "Isabel Fernández",
            text: "Mi sonrisa cambió por completo con las carillas. Me siento mucho más segura y el proceso fue más rápido de lo esperado.",
            rating: 5,
            role: "Carillas"
        },
        {
            name: "Miguel Ángel Torres",
            text: "Excelente experiencia con mi implante dental. Profesionales de primera y resultados que parecen dientes naturales.",
            rating: 5,
            role: "Implantes"
        },
        {
            name: "Sofía Morales",
            text: "La ortodoncia invisible fue la mejor decisión. Nadie notó que llevaba alineadores y los resultados son increíbles.",
            rating: 5,
            role: "Ortodoncia Invisible"
        },
        {
            name: "David Jiménez",
            text: "Tratamiento de endodoncia sin dolor y con resultados perfectos. La tecnología que usan marca la diferencia.",
            rating: 5,
            role: "Endodoncia"
        }
    ];

    const beforeAfterImages = [
        {
            image: "/before-after-1.png",
            title: "Ortodoncia Invisible",
            description: "Corrección de alineación dental"
        },
        {
            image: "/before-after-2.png",
            title: "Ortodoncia",
            description: "Corrección de mordida y alineación"
        }
    ];

    // Animate testimonials appearing one by one
    React.useEffect(() => {
        const timer = setInterval(() => {
            setVisibleTestimonials((prev) => {
                if (prev < testimonials.length) {
                    return prev + 1;
                }
                return prev;
            });
        }, 150);

        return () => clearInterval(timer);
    }, [testimonials.length]);

    const nextBeforeAfter = () => {
        setActiveBeforeAfter((prev) => (prev + 1) % beforeAfterImages.length);
    };

    const prevBeforeAfter = () => {
        setActiveBeforeAfter((prev) => (prev - 1 + beforeAfterImages.length) % beforeAfterImages.length);
    };

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
                        Testimonios
                    </span>
                    </FadeIn>
                    <FadeIn delay={0.4}>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Lo Que Dicen Nuestros Pacientes
                    </h1>
                    </FadeIn>
                    <FadeIn delay={0.6}>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                        Historias reales de sonrisas transformadas
                    </p>
                    </FadeIn>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-[#fffbf0] border-b border-gray-100">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                        {[
                            { icon: Users, value: "8000+", label: "Pacientes Satisfechos" },
                            { icon: Star, value: "5.0", label: "Valoración Media" },
                            { icon: Award, value: "15+", label: "Años de Experiencia" },
                            { icon: TrendingUp, value: "98%", label: "Tasa de Satisfacción" }
                        ].map((stat, idx) => {
                            const Icon = stat.icon;
                            return (
                                <div key={idx} className="text-center">
                                    <Icon className="w-8 h-8 mx-auto mb-3 text-[#b5912a]" />
                                    <p className="text-3xl font-bold text-[#0f3d56] mb-1">{stat.value}</p>
                                    <p className="text-sm text-gray-600">{stat.label}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="py-20 bg-[#fffbf0]">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0f3d56] mb-4">
                            Experiencias Reales
                        </h2>
                        <p className="text-gray-600">
                            Lee lo que nuestros pacientes tienen que decir sobre su experiencia
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {testimonials.map((testimonial, idx) => (
                            <div
                                key={idx}
                                className={`bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 flex flex-col transform ${idx < visibleTestimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                    }`}
                                style={{ transitionDelay: `${idx * 50}ms` }}
                            >
                                <Quote className="w-10 h-10 text-[#b5912a] mb-4 opacity-50" />

                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} fill="#b5912a" className="w-4 h-4 text-[#b5912a]" />
                                    ))}
                                </div>

                                <p className="text-gray-600 italic mb-6 leading-relaxed flex-grow">
                                    "{testimonial.text}"
                                </p>

                                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                                    <div className="w-12 h-12 bg-[#0f3d56] rounded-full flex items-center justify-center font-bold text-white flex-shrink-0">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#0f3d56]">{testimonial.name}</h4>
                                        <span className="text-sm text-gray-500">{testimonial.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Before/After Gallery */}
            <section className="py-20 bg-[#fffbf0]">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="text-center mb-16">
                        <FadeIn delay={0.2}>
                        <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase block mb-3">
                            Resultados Reales
                        </span>
                    </FadeIn>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0f3d56] mb-4">
                            Antes y Después
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Transformaciones reales de nuestros pacientes
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto relative">
                        {/* Image Display */}
                        <div className="relative bg-gray-100 rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src={beforeAfterImages[activeBeforeAfter].image}
                                alt={beforeAfterImages[activeBeforeAfter].title}
                                className="w-full h-auto"
                            />
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevBeforeAfter}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-[#0f3d56] hover:text-white transition-all"
                            aria-label="Anterior"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={nextBeforeAfter}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-[#0f3d56] hover:text-white transition-all"
                            aria-label="Siguiente"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>

                        {/* Image Info */}
                        <div className="text-center mt-8">
                            <h3 className="text-xl font-bold text-[#0f3d56] mb-2">
                                {beforeAfterImages[activeBeforeAfter].title}
                            </h3>
                            <p className="text-gray-600">
                                {beforeAfterImages[activeBeforeAfter].description}
                            </p>
                        </div>

                        {/* Dots */}
                        <div className="flex justify-center gap-2 mt-6">
                            {beforeAfterImages.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveBeforeAfter(idx)}
                                    className={`w-2 h-2 rounded-full transition-all ${idx === activeBeforeAfter ? "bg-[#0f3d56] w-8" : "bg-gray-300"
                                        }`}
                                    aria-label={`Ver imagen ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-[#0f3d56] to-[#0a2d42]">
                <div className="container mx-auto px-6 md:px-12 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        ¿Listo Para Tu Transformación?
                    </h2>
                    <FadeIn delay={0.6}>
                        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                        Únete a los miles de pacientes satisfechos que han confiado en nosotros
                    </p>
                    </FadeIn>
                    <a
                        href="https://wa.me/34649537609"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#b5912a] text-[#0f3d56] px-8 py-4 rounded-lg font-semibold hover:bg-[#9a7a1f] transition-colors duration-300 shadow-xl inline-block"
                    >
                        Reservar Consulta
                    </a>
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
