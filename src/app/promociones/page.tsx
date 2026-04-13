"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { Percent, Gift, Calendar, CreditCard, Check, Sparkles, Tag } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';

export default function PromocionesPage() {
    const promotions = [
        {
            title: "Primera Consulta Gratuita",
            description: "Evaluación completa con diagnóstico y plan de tratamiento personalizado sin coste",
            discount: "100%",
            icon: Gift,
            color: "from-[#b5912a] to-[#9a7a1f]",
            features: ["Revisión completa", "Radiografías incluidas", "Plan personalizado", "Sin compromiso"],
            validity: "Válido todo el año"
        },
        {
            title: "Blanqueamiento Dental",
            description: "Tratamiento de blanqueamiento LED profesional con resultados inmediatos",
            discount: "30%",
            icon: Sparkles,
            color: "from-[#0f3d56] to-[#0a2d42]",
            features: ["Tecnología LED", "Hasta 8 tonos más blanco", "Sesión de 1 hora", "Kit de mantenimiento"],
            validity: "Hasta 31 de Marzo",
            originalPrice: "500€",
            finalPrice: "350€"
        },
        {
            title: "Ortodoncia Invisible",
            description: "Alineadores transparentes Invisalign con seguimiento digital incluido",
            discount: "15%",
            icon: Percent,
            color: "from-[#5B8FB9] to-[#4a7a9d]",
            features: ["Invisalign certificado", "Escaneo 3D digital", "Revisiones incluidas", "Financiación 0%"],
            validity: "Promoción limitada"
        },
        {
            title: "Limpieza + Revisión",
            description: "Limpieza dental profesional con ultrasonidos más revisión completa",
            discount: "40%",
            icon: Tag,
            color: "from-[#b5912a] to-[#9a7a1f]",
            features: ["Limpieza con ultrasonidos", "Pulido dental", "Revisión completa", "Consejos personalizados"],
            validity: "Nuevos pacientes",
            originalPrice: "100€",
            finalPrice: "60€"
        },
        {
            title: "Implante Dental",
            description: "Implante dental con corona de zirconio y opciones de financiación",
            discount: "15%",
            icon: Gift,
            color: "from-[#0f3d56] to-[#0a2d42]",
            features: ["Implante dental", "Corona de zirconio", "Financiación disponible"],
            validity: "Promoción limitada"
        },
        {
            title: "Carillas Dentales",
            description: "Transforma tu sonrisa con carillas de porcelana o composite",
            discount: "20%",
            icon: Sparkles,
            color: "from-[#5B8FB9] to-[#4a7a9d]",
            features: ["Diseño digital previo", "Carillas de porcelana o composite", "Aspecto natural", "Resistentes a manchas"],
            validity: "Oferta especial"
        }
    ];

    const financingOptions = [
        {
            title: "Financiación 0% Interés",
            description: "Hasta 12 meses sin intereses en tratamientos superiores a 600€",
            icon: CreditCard
        },
        {
            title: "Pago Flexible",
            description: "Planes de pago personalizados adaptados a tu presupuesto",
            icon: Calendar
        },
        {
            title: "Descuento Familiar",
            description: "10% adicional cuando dos o más miembros de la familia se tratan",
            icon: Gift
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
                        Ofertas Especiales
                    </span>
                    </FadeIn>
                    <FadeIn delay={0.4}>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Promociones
                    </h1>
                    </FadeIn>
                    <FadeIn delay={0.6}>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                        Aprovecha nuestras ofertas exclusivas para cuidar tu sonrisa
                    </p>
                    </FadeIn>
                </div>
            </section>

            {/* Promotions Grid */}
            <section className="py-20 bg-[#fffbf0]">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0f3d56] mb-4">
                            Ofertas Activas
                        </h2>
                        <p className="text-gray-600">
                            Descuentos especiales en nuestros tratamientos más populares
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {promotions.map((promo, idx) => {
                            const Icon = promo.icon;
                            return (
                                <div
                                    key={idx}
                                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
                                >
                                    {/* Header with gradient */}
                                    <div className={`bg-gradient-to-r ${promo.color} p-6 text-white relative overflow-hidden`}>
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                                        <Icon className="w-12 h-12 mb-4 relative z-10" />
                                        <div className="relative z-10">
                                            <div className="flex items-baseline gap-2 mb-2">
                                                <span className="text-5xl font-bold">{promo.discount}</span>
                                                <span className="text-2xl">OFF</span>
                                            </div>
                                            <p className="text-sm opacity-90">{promo.validity}</p>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-2xl font-bold text-[#0f3d56] mb-3">
                                            {promo.title}
                                        </h3>
                                        <p className="text-gray-600 mb-6">
                                            {promo.description}
                                        </p>

                                        {/* Features */}
                                        <ul className="space-y-2 mb-6">
                                            {promo.features.map((feature, i) => (
                                                <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                                                    <Check className="w-4 h-4 text-[#b5912a] flex-shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Spacer to push pricing and button to bottom */}
                                        <div className="flex-grow"></div>

                                        {/* Pricing */}
                                        <div className="border-t border-gray-100 pt-4 mb-4">
                                            {promo.originalPrice ? (
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <p className="text-sm text-gray-500 line-through">{promo.originalPrice}</p>
                                                        <p className="text-2xl font-bold text-[#b5912a]">{promo.finalPrice}</p>
                                                    </div>
                                                </div>
                                            ) : promo.discount === "100%" ? (
                                                <div>
                                                    <p className="text-2xl font-bold text-[#b5912a]">Gratis</p>
                                                    <p className="text-sm text-gray-500">Sin coste alguno</p>
                                                </div>
                                            ) : (
                                                <div>
                                                    <p className="text-2xl font-bold text-[#b5912a]">Consultar</p>
                                                    <p className="text-sm text-gray-500">Contacta para más información</p>
                                                </div>
                                            )}
                                        </div>

                                        {/* CTA Button */}
                                        <button className="w-full bg-[#0f3d56] text-white py-3 rounded-lg font-semibold hover:bg-[#0a2d42] transition-colors">
                                            Reservar Ahora
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Financing Options */}
            <section className="py-20 bg-[#fffbf0]">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0f3d56] mb-4">
                            Opciones de Financiación
                        </h2>
                        <p className="text-gray-600">
                            Facilitamos el acceso a tu tratamiento ideal
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {financingOptions.map((option, idx) => {
                            const Icon = option.icon;
                            return (
                                <div
                                    key={idx}
                                    className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:border-[#b5912a] transition-all duration-300"
                                >
                                    <div className="w-16 h-16 bg-[#0f3d56] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Icon className="w-8 h-8 text-[#b5912a]" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0f3d56] mb-3">
                                        {option.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {option.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Terms & Conditions */}
            <section className="py-12 bg-[#fffbf0] border-t border-gray-200">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-lg font-bold text-[#0f3d56] mb-4">Términos y Condiciones</h3>
                        <ul className="text-sm text-gray-600 space-y-2">
                            <li>• Las promociones no son acumulables entre sí salvo indicación expresa.</li>
                            <li>• La primera consulta gratuita incluye revisión y diagnóstico, no incluye tratamientos.</li>
                            <li>• Los descuentos se aplican sobre el precio de tarifa oficial de la clínica.</li>
                            <li>• Financiación sujeta a aprobación. Consulta condiciones en clínica.</li>
                            <li>• Promociones válidas para nuevos tratamientos, no aplicable a tratamientos en curso.</li>
                            <li>• La clínica se reserva el derecho de modificar o cancelar promociones sin previo aviso.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-[#0f3d56] to-[#0a2d42]">
                <div className="container mx-auto px-6 md:px-12 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        ¿Listo Para Aprovechar Estas Ofertas?
                    </h2>
                    <FadeIn delay={0.6}>
                        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                        Contacta con nosotros y te ayudaremos a elegir la mejor opción para ti
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
