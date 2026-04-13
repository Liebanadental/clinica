"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';

export default function ContactoPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [sending, setSending] = useState(false);
    const [error, setError] = useState('');

    const SUBJECT_MAP: Record<string, string> = {
        consulta: 'Primera Consulta',
        presupuesto: 'Solicitar Presupuesto',
        urgencia: 'Urgencia Dental',
        informacion: 'Información General',
        otro: 'Otro',
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSending(true);
        setError('');

        try {
            const subjectLabel = SUBJECT_MAP[formData.subject] || formData.subject;

            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    access_key: 'cb566fce-0f82-4397-b929-d588de1ac1f6',
                    subject: `Nuevo mensaje web: ${subjectLabel}`,
                    from_name: 'Formulario Web - Clínica Dental Liébana',
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone || 'No proporcionado',
                    asunto: subjectLabel,
                    message: formData.message,
                }),
            });

            const data = await res.json();
            if (!data.success) throw new Error();

            setSubmitted(true);
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
            setTimeout(() => setSubmitted(false), 5000);
        } catch {
            setError('Error al enviar el mensaje. Inténtalo de nuevo o contáctanos por teléfono.');
        } finally {
            setSending(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
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
                        Estamos Aquí Para Ti
                    </span>
                    </FadeIn>
                    <FadeIn delay={0.4}>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Contacto
                    </h1>
                    </FadeIn>
                    <FadeIn delay={0.6}>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                        Ponte en contacto con nosotros y te ayudaremos con tu sonrisa
                    </p>
                    </FadeIn>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-[#fffbf0]">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">

                        {/* Contact Form */}
                        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg h-full">
                            <h2 className="text-3xl font-bold text-[#0f3d56] mb-6">
                                Envíanos un Mensaje
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Completa el formulario y nos pondremos en contacto contigo lo antes posible
                            </p>

                            {submitted ? (
                                <div className="bg-green-50 border border-green-200 rounded-lg p-6 flex items-center gap-4">
                                    <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-bold text-green-800 mb-1">¡Mensaje Enviado!</h3>
                                        <p className="text-green-700 text-sm">Nos pondremos en contacto contigo pronto.</p>
                                    </div>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Nombre Completo *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f3d56] focus:border-transparent outline-none transition"
                                            placeholder="Tu nombre"
                                        />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f3d56] focus:border-transparent outline-none transition"
                                                placeholder="tu@email.com"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                                Teléfono
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f3d56] focus:border-transparent outline-none transition"
                                                placeholder="+34 123 456 789"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Asunto *
                                        </label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f3d56] focus:border-transparent outline-none transition"
                                        >
                                            <option value="">Selecciona un asunto</option>
                                            <option value="consulta">Primera Consulta</option>
                                            <option value="presupuesto">Solicitar Presupuesto</option>
                                            <option value="urgencia">Urgencia Dental</option>
                                            <option value="informacion">Información General</option>
                                            <option value="otro">Otro</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Mensaje *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f3d56] focus:border-transparent outline-none transition resize-none"
                                            placeholder="Cuéntanos cómo podemos ayudarte..."
                                        />
                                    </div>

                                    {error && (
                                        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
                                            {error}
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={sending}
                                        className="w-full bg-[#0f3d56] text-white py-4 rounded-lg font-semibold hover:bg-[#0a2d42] transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                                    >
                                        <Send className="w-5 h-5" />
                                        {sending ? 'Enviando...' : 'Enviar Mensaje'}
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-[#0f3d56] mb-6">
                                    Información de Contacto
                                </h2>
                                <p className="text-gray-600 mb-8">
                                    Estamos ubicados en el corazón de Madrid. Visítanos o contáctanos por cualquiera de estos medios.
                                </p>
                            </div>

                            {/* Contact Cards */}
                            <div className="space-y-4">
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-[#b5912a] transition-all duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-[#0f3d56] rounded-lg flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-6 h-6 text-[#b5912a]" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-800 mb-1">Dirección</h3>
                                            <p className="text-gray-600">
                                                Calle del Monasterio de Liébana 5-7<br />
                                                Fuencarral-El Pardo, Madrid, 28049
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-[#b5912a] transition-all duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-[#0f3d56] rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Phone className="w-6 h-6 text-[#b5912a]" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-800 mb-1">Teléfono</h3>
                                            <p className="text-gray-600">
                                                <a href="tel:+34649537609" className="hover:text-[#0f3d56] transition-colors block">
                                                    +34 649 537 609
                                                </a>
                                                <a href="tel:+34912440671" className="hover:text-[#0f3d56] transition-colors block">
                                                    +34 912 440 671
                                                </a>
                                            </p>
                                            <p className="text-sm text-gray-500 mt-1">Lunes - Viernes</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-[#b5912a] transition-all duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-[#0f3d56] rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-6 h-6 text-[#b5912a]" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                                            <p className="text-gray-600">
                                                <a href="mailto:clinicadentalliebana7@gmail.com" className="hover:text-[#0f3d56] transition-colors">
                                                    clinicadentalliebana7@gmail.com
                                                </a>
                                            </p>
                                            <p className="text-sm text-gray-500 mt-1">Respuesta en 24h</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-[#b5912a] transition-all duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-[#0f3d56] rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Clock className="w-6 h-6 text-[#b5912a]" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-800 mb-2">Horario</h3>
                                            <div className="text-gray-600 space-y-1 text-sm">
                                                <p>Lun, Mié: 15:00 - 20:30</p>
                                                <p>Mar, Jue, Vie: 11:00 - 20:30</p>
                                                <p className="text-gray-500">Sáb - Dom: Cerrado</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map */}
                            <div className="bg-gray-200 rounded-2xl h-64 overflow-hidden shadow-lg">
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
                </div>
            </section>

            {/* Emergency Contact */}
            <section className="py-16 bg-[#fffbf0] border-t border-gray-100">
                <div className="container mx-auto px-6 md:px-12 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0f3d56] mb-4">
                        ¿Tienes una Urgencia Dental?
                    </h2>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Atendemos urgencias dentales. Llámanos o envíanos un WhatsApp y te atenderemos lo antes posible.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:+34649537609"
                            className="bg-[#0f3d56] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#0a2d42] transition-colors duration-300 inline-flex items-center justify-center gap-2"
                        >
                            <Phone className="w-5 h-5" />
                            Llamar Ahora
                        </a>
                        <a
                            href="https://wa.me/34649537609"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#25D366] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1ebc57] transition-colors duration-300 inline-flex items-center justify-center gap-2"
                        >
                            <WhatsAppIcon className="w-5 h-5" />
                            WhatsApp
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
