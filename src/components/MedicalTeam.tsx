"use client";

import React from 'react';
import { FadeIn, StaggerContainer, StaggerItem } from './animations/FadeIn';

const MedicalTeam = () => {
    const team = [
        {
            name: "Dra. Ana Sada Mairal",
            specialty: "Odontóloga",
            bio: "Odontóloga con amplia experiencia en tratamientos integrales y dedicación al cuidado personalizado de cada paciente.",
        },
        {
            name: "Dra. Puy Fernández de Bobadilla",
            specialty: "Odontóloga",
            bio: "Odontóloga comprometida con la excelencia clínica y el bienestar de sus pacientes.",
        },
        {
            name: "Dr. Enrique Isasi Castillón",
            specialty: "Odontólogo",
            bio: "Odontólogo especializado en ofrecer tratamientos de calidad con tecnología de última generación.",
        },
        {
            name: "Jenny Balcázar Moreno",
            specialty: "Higienista y Auxiliar",
            bio: "Higienista dental dedicada a la prevención y el cuidado oral de nuestros pacientes.",
        },
        {
            name: "Elisabeth Fernández Casanova",
            specialty: "Recepción",
            bio: "Primera cara amable de la clínica, encargada de la atención y gestión de citas.",
        }
    ];

    return (
        <section className="py-24 bg-[#fffbf0]">
            <div className="container mx-auto px-6 md:px-12">

                {/* Header */}
                <FadeIn delay={0.1}>
                    <div className="text-center mb-16">
                        <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase block mb-3">
                            Nuestro Equipo
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-[#0f3d56] mb-4">
                            Equipo Médico
                        </h2>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                            Profesionales altamente cualificados comprometidos con tu salud dental
                        </p>
                    </div>
                </FadeIn>

                {/* Team Grid - Equal Sizes */}
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8" staggerDelay={0.15}>
                    {team.map((member, index) => {
                        const initials = member.name
                            .split(' ')
                            .filter(w => !['de', 'y'].includes(w.toLowerCase()))
                            .map(w => w[0])
                            .slice(0, 2)
                            .join('');
                        return (
                        <StaggerItem key={index}>
                            <div className="group relative">
                            <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-6 text-center">
                                {/* Avatar circle with initials */}
                                <div className="w-20 h-20 rounded-full bg-[#0f3d56] flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold text-[#b5912a]">{initials}</span>
                                </div>

                                <h3 className="text-lg font-bold text-[#0f3d56] mb-1">{member.name}</h3>
                                <p className="text-[#b5912a] text-sm font-medium mb-3">{member.specialty}</p>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {member.bio}
                                </p>
                            </div>
                            </div>
                        </StaggerItem>
                        );
                    })}
                </StaggerContainer>

                {/* Bottom CTA */}
                <FadeIn delay={0.2}>
                    <div className="text-center mt-16">
                        <p className="text-gray-500 mb-6">¿Quieres conocer a nuestro equipo en persona?</p>
                        <a
                            href="/equipo"
                            className="inline-block bg-[#0f3d56] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0a2d42] transition-colors duration-300 shadow-lg hover:shadow-xl"
                        >
                            Conocer al Equipo Completo
                        </a>
                    </div>
                </FadeIn>

            </div>
        </section>
    );
};

export default MedicalTeam;
