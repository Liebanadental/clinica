"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';
import type { BlogPost } from '@/lib/blog';

interface BlogPostClientProps {
    post: BlogPost;
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
    return (
        <main className="min-h-screen bg-[#fffbf0] text-[#333333] font-sans">
            <Header />

            {/* Hero Image */}
            <section className="relative h-[60vh] flex items-end overflow-hidden">
                <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                <div className="relative z-10 container mx-auto px-6 md:px-12 pb-12">
                    <a href="/blog" className="inline-flex items-center gap-2 text-white mb-6 hover:text-[#b5912a] transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                        Volver al blog
                    </a>

                    <div className="mb-6">
                        <span className="inline-block bg-[#b5912a] text-white text-sm font-bold px-4 py-2 rounded-full">
                            {post.category}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-4xl">
                        {post.title}
                    </h1>

                    <div className="flex items-center gap-6 text-white/90">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            {post.date}
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            {post.readTime}
                        </div>
                        <button className="flex items-center gap-2 hover:text-[#b5912a] transition-colors">
                            <Share2 className="w-5 h-5" />
                            Compartir
                        </button>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <article className="py-16 bg-[#fffbf0]">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="max-w-4xl mx-auto">
                        {/* Article Body */}
                        <FadeIn delay={0.2}>
                            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
                                <div className="prose prose-lg max-w-none">
                                    {post.content.split('\n\n').map((paragraph, idx) => {
                                        // Handle images - ![alt](src)
                                        const imageMatch = paragraph.match(/!\[(.*?)\]\((.*?)\)/);
                                        if (imageMatch) {
                                            const alt = imageMatch[1] || 'Blog image';
                                            const src = imageMatch[2];
                                            return (
                                                <figure key={idx} className="my-8">
                                                    <img
                                                        src={src}
                                                        alt={alt}
                                                        className="w-full max-w-2xl mx-auto rounded-2xl shadow-lg object-cover"
                                                        style={{ maxHeight: '500px' }}
                                                    />
                                                    {alt && alt !== 'Blog image' && (
                                                        <figcaption className="text-center text-gray-500 text-sm mt-3 italic">
                                                            {alt}
                                                        </figcaption>
                                                    )}
                                                </figure>
                                            );
                                        }
                                        // Handle headings
                                        if (paragraph.startsWith('## ')) {
                                            return (
                                                <h2 key={idx} className="text-3xl font-bold text-[#0f3d56] mt-8 mb-4">
                                                    {paragraph.replace('## ', '')}
                                                </h2>
                                            );
                                        }
                                        if (paragraph.startsWith('### ')) {
                                            return (
                                                <h3 key={idx} className="text-2xl font-bold text-[#0f3d56] mt-6 mb-3">
                                                    {paragraph.replace('### ', '')}
                                                </h3>
                                            );
                                        }
                                        // Handle lists
                                        if (paragraph.startsWith('- ')) {
                                            const items = paragraph.split('\n');
                                            return (
                                                <ul key={idx} className="list-disc list-inside space-y-2 my-4 text-gray-700">
                                                    {items.map((item, i) => (
                                                        <li key={i} className="ml-4">
                                                            {item.replace('- ', '')}
                                                        </li>
                                                    ))}
                                                </ul>
                                            );
                                        }
                                        // Handle numbered lists
                                        if (/^\d+\./.test(paragraph)) {
                                            const items = paragraph.split('\n');
                                            return (
                                                <ol key={idx} className="list-decimal list-inside space-y-2 my-4 text-gray-700">
                                                    {items.map((item, i) => (
                                                        <li key={i} className="ml-4">
                                                            {item.replace(/^\d+\.\s*/, '')}
                                                        </li>
                                                    ))}
                                                </ol>
                                            );
                                        }
                                        // Handle tables (markdown tables)
                                        if (paragraph.includes('|') && paragraph.includes('---')) {
                                            const rows = paragraph.split('\n').filter(row => row.trim() && !row.includes('---'));
                                            if (rows.length > 0) {
                                                const headers = rows[0].split('|').filter(cell => cell.trim());
                                                const dataRows = rows.slice(1);
                                                return (
                                                    <div key={idx} className="overflow-x-auto my-6">
                                                        <table className="min-w-full border border-gray-200 rounded-lg">
                                                            <thead className="bg-[#0f3d56] text-white">
                                                                <tr>
                                                                    {headers.map((header, i) => (
                                                                        <th key={i} className="px-4 py-3 text-left font-semibold">
                                                                            {header.trim()}
                                                                        </th>
                                                                    ))}
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {dataRows.map((row, rowIdx) => (
                                                                    <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                                                        {row.split('|').filter(cell => cell.trim()).map((cell, cellIdx) => (
                                                                            <td key={cellIdx} className="px-4 py-3 border-t border-gray-200">
                                                                                {cell.trim()}
                                                                            </td>
                                                                        ))}
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                );
                                            }
                                        }
                                        // Handle inline images in paragraphs
                                        let processedText = paragraph;
                                        // Replace inline images with placeholder
                                        const inlineImages: { alt: string; src: string }[] = [];
                                        processedText = processedText.replace(/!\[(.*?)\]\((.*?)\)/g, (match, alt, src) => {
                                            inlineImages.push({ alt, src });
                                            return `__IMAGE_${inlineImages.length - 1}__`;
                                        });
                                        // Handle bold text
                                        processedText = processedText.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-[#0f3d56]">$1</strong>');

                                        // If paragraph has inline images, render them
                                        if (inlineImages.length > 0) {
                                            return (
                                                <div key={idx}>
                                                    <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: processedText.replace(/__IMAGE_\d+__/g, '') }} />
                                                    {inlineImages.map((img, imgIdx) => (
                                                        <figure key={imgIdx} className="my-6">
                                                            <img
                                                                src={img.src}
                                                                alt={img.alt || 'Blog image'}
                                                                className="w-full max-w-2xl mx-auto rounded-2xl shadow-lg object-cover"
                                                                style={{ maxHeight: '500px' }}
                                                            />
                                                            {img.alt && (
                                                                <figcaption className="text-center text-gray-500 text-sm mt-3 italic">
                                                                    {img.alt}
                                                                </figcaption>
                                                            )}
                                                        </figure>
                                                    ))}
                                                </div>
                                            );
                                        }
                                        // Regular paragraphs
                                        return (
                                            <p key={idx} className="text-gray-700 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: processedText }} />
                                        );
                                    })}
                                </div>
                            </div>
                        </FadeIn>

                        {/* Author/CTA Box */}
                        <FadeIn delay={0.3}>
                            <div className="bg-gradient-to-r from-[#0f3d56] to-[#0a2d42] rounded-2xl p-8 md:p-12 text-white mb-12">
                                <h3 className="text-2xl font-bold mb-4">¿Necesitas una consulta personalizada?</h3>
                                <p className="text-gray-200 mb-6">
                                    Nuestro equipo de especialistas está aquí para ayudarte con cualquier duda sobre tu salud dental.
                                </p>
                                <a
                                    href="/contacto"
                                    className="inline-block bg-[#b5912a] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#9a7a1f] transition-colors"
                                >
                                    Reservar Consulta
                                </a>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </article>

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
