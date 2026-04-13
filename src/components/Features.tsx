import React from 'react';
import { Check } from 'lucide-react';

const features = [
  {
    title: "Innovación sin Límites",
    description: "Incorporamos la última tecnología digital para diagnósticos precisos y tratamientos mínimamente invasivos. Su salud merece lo mejor del progreso científico."
  },
  {
    title: "Santuario de Bienestar",
    description: "Nuestras instalaciones en Madrid están diseñadas para evocar calma y serenidad. Un entorno donde el estrés desaparece y el cuidado personal es el protagonista."
  },
  {
    title: "Odontología Boutique",
    description: "Huimos de la atención impersonal. Aquí, cada paciente es único. Ofrecemos un seguimiento cercano y un trato humano que marca la diferencia."
  }
];

const Features = () => {
  return (
    <section className="bg-[#fffbf0] py-12 relative z-20">
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-3 gap-8 -mt-20">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg flex flex-col gap-4 hover:shadow-xl transition-shadow border-t-4 border-[#0f3d56]">
              <div className="flex items-start gap-3">
                <div className="mt-1 min-w-[20px]">
                  <Check className="w-5 h-5 text-[#0f3d56]" /> 
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
