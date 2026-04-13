import React from 'react';
import { Clock, Users, Monitor, Award } from 'lucide-react';

const stats = [
  {
    label: "Años de Experiencia",
    value: "15+",
    icon: Clock
  },
  {
    label: "Pacientes Felices",
    value: "8000+",
    icon: Users
  },
  {
    label: "Tecnología de Punta",
    value: "100%",
    icon: Monitor
  },
  {
    label: "Equipo Certificado",
    value: "Top",
    icon: Award
  }
];

const TrustSection = () => {
  return (
    <section className="py-20 bg-[#FFFBF0]"> {/* Lighter Gold/Beige background */}
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f3d56] mb-4">¿Por Qué Elegirnos?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nos dedicamos a ofrecer la mejor experiencia dental, combinando profesionalismo, confort y resultados excepcionales.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-4 p-4 bg-white rounded-full shadow-sm text-[#b5912a]">
                <stat.icon className="w-8 h-8" />
              </div>
              <span className="text-3xl md:text-4xl font-bold text-[#0f3d56] block mb-2">
                {stat.value}
              </span>
              <span className="text-sm md:text-base text-gray-600 font-medium uppercase tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
