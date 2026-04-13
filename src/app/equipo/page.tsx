"use client";

import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { GraduationCap, Award, Calendar, Mail } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';

export default function EquipoPage() {
    const team = [
        {
            name: "Dra. Ana Sada Mairal",
            specialty: "Odontóloga",

            bio: "Odontóloga con amplia experiencia en tratamientos integrales y dedicación al cuidado personalizado de cada paciente.",
            education: [
                "Licenciatura en Odontología"
            ],
            experience: "",
            certifications: [],
            specializations: ["Odontología General"],
            email: "clinicadentalliebana7@gmail.com",
        },
        {
            name: "Dra. Puy Fernández de Bobadilla",
            specialty: "Odontóloga",

            bio: "Odontóloga comprometida con la excelencia clínica y el bienestar de sus pacientes.",
            education: [
                "Licenciatura en Odontología"
            ],
            experience: "",
            certifications: [],
            specializations: ["Odontología General"],
            email: "clinicadentalliebana7@gmail.com",
        },
        {
            name: "Dr. Enrique Isasi Castillón",
            specialty: "Odontólogo",

            bio: "Odontólogo especializado en ofrecer tratamientos de calidad con tecnología de última generación.",
            education: [
                "Licenciatura en Odontología"
            ],
            experience: "",
            certifications: [],
            specializations: ["Odontología General"],
            email: "clinicadentalliebana7@gmail.com",
        },
        {
            name: "Jenny Balcázar Moreno",
            specialty: "Higienista y Auxiliar",

            bio: "Higienista dental dedicada a la prevención y el cuidado oral de nuestros pacientes.",
            education: [
                "Formación en Higiene Bucodental"
            ],
            experience: "",
            certifications: [],
            specializations: ["Higiene Dental", "Prevención"],
            email: "clinicadentalliebana7@gmail.com",
        },
        {
            name: "Elisabeth Fernández Casanova",
            specialty: "Recepción",

            bio: "Primera cara amable de la clínica, encargada de la atención al paciente y la gestión de citas.",
            education: [],
            experience: "",
            certifications: [],
            specializations: ["Atención al Paciente", "Gestión de Citas"],
            email: "clinicadentalliebana7@gmail.com",
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
                        Nuestro Equipo
                    </span>
                    </FadeIn>
                    <FadeIn delay={0.4}>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Equipo Médico
                    </h1>
                    </FadeIn>
                    <FadeIn delay={0.6}>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                        Profesionales altamente cualificados comprometidos con tu salud dental
                    </p>
                    </FadeIn>
                </div>
            </section>

            {/* Team Photo */}
            <section className="py-16 bg-[#fffbf0]">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="max-w-5xl mx-auto">
                        <FadeIn>
                            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/team.jpg"
                                    alt="Equipo de Clínica Dental Liébana"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Team Members */}
            <section className="pb-20 bg-[#fffbf0]">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8">
                        {team.map((member, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex flex-col w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]"
                            >
                                <div className="mb-4">
                                    <h2 className="text-xl font-bold text-[#0f3d56] mb-1">
                                        {member.name}
                                    </h2>
                                    <p className="text-[#b5912a] font-semibold text-sm">
                                        {member.specialty}
                                    </p>
                                </div>

                                <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">
                                    {member.bio}
                                </p>

                                {member.experience && (
                                    <div className="flex items-center gap-2 mb-4 text-sm">
                                        <Calendar className="w-4 h-4 text-[#b5912a]" />
                                        <span className="text-gray-700">{member.experience}</span>
                                    </div>
                                )}

                                {member.education.length > 0 && (
                                    <div className="mb-4">
                                        <div className="flex items-center gap-2 mb-2">
                                            <GraduationCap className="w-4 h-4 text-[#0f3d56]" />
                                            <h3 className="font-semibold text-sm text-gray-800">Formación</h3>
                                        </div>
                                        <ul className="space-y-1">
                                            {member.education.map((edu, i) => (
                                                <li key={i} className="text-xs text-gray-600 pl-6">
                                                    • {edu}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                <div className="mb-5">
                                    <div className="flex flex-wrap gap-1.5">
                                        {member.specializations.map((spec, i) => (
                                            <span
                                                key={i}
                                                className="bg-[#f0ebe0] text-[#0f3d56] px-3 py-1 rounded-full text-xs font-medium"
                                            >
                                                {spec}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <a
                                    href={`mailto:${member.email}`}
                                    className="flex items-center justify-center gap-2 w-full bg-[#0f3d56] text-white px-4 py-2.5 rounded-lg hover:bg-[#0a2d42] transition-colors text-sm font-medium mt-auto"
                                >
                                    <Mail className="w-4 h-4" />
                                    Contactar
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Our Team */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0f3d56] mb-12">
                            ¿Por Qué Confiar en Nuestro Equipo?
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Formación Continua",
                                    desc: "Nuestros profesionales se actualizan constantemente con las últimas técnicas y tecnologías"
                                },
                                {
                                    title: "Experiencia Internacional",
                                    desc: "Formación y certificaciones en las mejores universidades de Europa y América"
                                },
                                {
                                    title: "Enfoque Personalizado",
                                    desc: "Cada paciente recibe un plan de tratamiento único adaptado a sus necesidades"
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="p-6">
                                    <div className="w-12 h-12 bg-[#b5912a] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Award className="w-6 h-6 text-white" />
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
                        ¿Quieres Conocer a Nuestro Equipo?
                    </h2>
                    <FadeIn delay={0.6}>
                        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                        Agenda tu primera consulta gratuita y conoce al profesional ideal para tu tratamiento
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
