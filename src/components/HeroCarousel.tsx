
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const HeroCarousel = () => {
  const heroSlides = [
    {
      id: 1,
      title: "ULTIMATE",
      subtitle: "SALE",
      description: "NEW ARRIVAL",
      image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&h=600&fit=crop",
      buttonText: "SHOP NOW"
    },
    {
      id: 2,
      title: "META QUEST 3",
      subtitle: "EXPERIENCE",
      description: "MIXED REALITY",
      image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=800&h=600&fit=crop",
      buttonText: "EXPLORE"
    },
    {
      id: 3,
      title: "VIRTUAL",
      subtitle: "WORLDS",
      description: "AWAIT YOU",
      image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&h=600&fit=crop",
      buttonText: "DISCOVER"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 h-96 overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={heroSlides[currentSlide].image} 
          alt={heroSlides[currentSlide].title}
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center z-10">
          <h2 className="text-6xl font-bold text-gray-800 mb-4">
            {heroSlides[currentSlide].title}<br />
            <span className="text-blue-500">{heroSlides[currentSlide].subtitle}</span>
          </h2>
          <p className="text-lg text-gray-600 mb-6">{heroSlides[currentSlide].description}</p>
          <button className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 transition-colors">
            {heroSlides[currentSlide].buttonText}
          </button>
        </div>
      </div>
      
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? 'bg-blue-500' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
