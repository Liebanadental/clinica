import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import BeforeAfterSection from '@/components/BeforeAfterSection';
import TrustSection from '@/components/TrustSection';
import Testimonials from '@/components/Testimonials';
import CTABanner from '@/components/CTABanner';
import ContactPreview from '@/components/ContactPreview';
import Footer from '@/components/Footer';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import ClinicInstallations from '@/components/ClinicInstallations';
import MedicalTeam from '@/components/MedicalTeam';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fffbf0] text-[#333333] font-sans">
      <Header />

      <Hero />
      <ClinicInstallations />
      <Services />
      <MedicalTeam />
      <BeforeAfterSection />
      <TrustSection />
      <Testimonials />
      <CTABanner />
      <ContactPreview />

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
          {/* Ping Animation Ring */}
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping duration-1000"></span>

          {/* Main Button */}
          <div className="relative bg-[#25D366] p-4 rounded-full text-white shadow-lg hover:bg-[#1ebc57] transition-transform transform hover:scale-110 flex items-center justify-center">
            <WhatsAppIcon className="w-8 h-8" />
          </div>
        </div>
      </a>
    </main>
  );
}
