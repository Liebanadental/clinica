"use client";

import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BeforeAfterSection = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [imageWidth, setImageWidth] = useState<number | string>('100%');

  // Handle resizing to keep inner image width synced with container
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setImageWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // Handle mouse hover (desktop) and touch move
  const handleMove = (event: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in event ? event.touches[0].clientX : (event as React.MouseEvent).clientX;

    // Calculate percentage
    let position = ((clientX - containerRect.left) / containerRect.width) * 100;
    position = Math.min(Math.max(position, 0), 100); // Clamp between 0 and 100

    setSliderPosition(position);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  // Global event listeners are mostly for touch drag now, as mouse hover handles desktop
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('touchmove', handleMove);
      window.addEventListener('touchend', handleMouseUp);
    } else {
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section className="py-20 bg-[#fffbf0]">
      <div className="container mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase block mb-3">
            Antes y Después
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0f3d56]">
            Nuestros Pacientes
          </h2>
        </div>

        {/* Slider Container */}
        <div className="max-w-3xl mx-auto relative select-none group">
          <div
            ref={containerRef}
            className="relative w-full aspect-[16/9] md:aspect-[4/3] lg:aspect-[16/9] overflow-hidden rounded-lg shadow-2xl cursor-ew-resize touch-none bg-gray-100 opacity-90 hover:opacity-100 transition-opacity duration-300"
            onMouseMove={handleMove} // Follow mouse movement directly
            onTouchStart={handleMouseDown}
            onMouseLeave={() => setSliderPosition(50)}
          >
            {/* AFTER Image (Background) - Visible on the right */}
            <img
              src="/after.jpeg"
              alt="Después"
              className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none select-none"
            />
            <div className="absolute top-4 right-4 bg-[#0f3d56]/90 text-white text-xs font-bold px-3 py-1 rounded shadow-md z-10">
              Después
            </div>

            {/* BEFORE Image (Foreground) - Clipped */}
            <div
              className="absolute inset-0 overflow-hidden border-r border-white/50"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="/before.jpeg"
                alt="Antes"
                className="absolute inset-0 h-full object-cover object-top pointer-events-none select-none"
                style={{ width: imageWidth, maxWidth: 'none' }}
              />
              <div className="absolute top-4 left-4 bg-[#0f3d56]/90 text-white text-xs font-bold px-3 py-1 rounded shadow-md">
                Antes
              </div>
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white cursor-ew-resize z-20"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-transparent border-2 border-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.3)] transition-transform hover:scale-110">
                <div className="flex gap-1">
                  <ChevronLeft className="w-4 h-4 text-white drop-shadow-md" />
                  <ChevronRight className="w-4 h-4 text-white drop-shadow-md" />
                </div>
              </div>
            </div>

          </div>
          <p className="text-center text-gray-400 text-sm mt-4 italic">Desliza para ver el cambio</p>
        </div>

        {/* Bottom Button */}
        <div className="text-center mt-12">
          <a
            href="/testimonios"
            className="inline-block border border-[#0f3d56] text-[#0f3d56] px-10 py-3 rounded uppercase text-sm font-bold tracking-wide hover:bg-[#0f3d56] hover:text-white transition-all duration-300"
          >
            Ver casos de antes y después
          </a>
        </div>

      </div>
    </section>
  );
};

export default BeforeAfterSection;
