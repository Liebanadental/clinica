"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';
import type { BlogPost } from '@/lib/blog';

interface BlogClientProps {
    initialPosts: BlogPost[];
    categories: string[];
}

export default function BlogClient({ initialPosts, categories }: BlogClientProps) {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Todos');

    const filteredPosts = initialPosts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const allCategories = ['Todos', ...categories];

    const displayedPosts = selectedCategory === 'Todos'
        ? filteredPosts
        : filteredPosts.filter(post => post.category === selectedCategory);

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
                            Conocimiento y Salud
                        </span>
                    </FadeIn>
                    <FadeIn delay={0.4}>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Blog
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.6}>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                            Consejos, novedades y todo lo que necesitas saber sobre salud dental
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Search and Filter Section */}
            <section className="py-12 bg-[#fffbf0]">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="max-w-4xl mx-auto">
                        {/* Search Bar */}
                        <div className="relative mb-8">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Buscar artículos..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:border-[#b5912a] focus:ring-2 focus:ring-[#b5912a]/20 transition-all"
                            />
                        </div>

                        {/* Category Filter */}
                        <div className="flex flex-wrap gap-3 justify-center">
                            {allCategories.map((category, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-6 py-2 rounded-full font-medium transition-all ${selectedCategory === category
                                            ? 'bg-[#0f3d56] text-white shadow-lg'
                                            : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-md'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-20 bg-[#fffbf0]">
                <div className="container mx-auto px-6 md:px-12">
                    {displayedPosts.length === 0 ? (
                        <FadeIn>
                            <div className="text-center py-20">
                                <p className="text-gray-500 text-xl">No se encontraron artículos</p>
                            </div>
                        </FadeIn>
                    ) : (
                        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto" staggerDelay={0.1}>
                            {displayedPosts.map((post, idx) => (
                                <StaggerItem key={idx}>
                                    <a
                                        href={`/blog/${post.slug}`}
                                        className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
                                    >
                                        {/* Image */}
                                        <div className="relative h-56 overflow-hidden">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute top-4 left-4">
                                                <span className="bg-[#b5912a] text-white text-xs font-bold px-3 py-1 rounded-full">
                                                    {post.category}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 flex flex-col flex-grow">
                                            <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" />
                                                    {post.date}
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Clock className="w-4 h-4" />
                                                    {post.readTime}
                                                </div>
                                            </div>

                                            <h3 className="text-xl font-bold text-[#0f3d56] mb-3 group-hover:text-[#b5912a] transition-colors">
                                                {post.title}
                                            </h3>

                                            <p className="text-gray-600 mb-4 flex-grow line-clamp-3">
                                                {post.excerpt}
                                            </p>

                                            <div className="flex items-center text-[#b5912a] font-semibold text-sm group-hover:gap-3 transition-all">
                                                <span>Leer más</span>
                                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                                            </div>
                                        </div>
                                    </a>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    )}
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
