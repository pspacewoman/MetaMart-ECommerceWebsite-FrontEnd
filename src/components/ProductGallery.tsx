
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const ProductGallery = () => {
  const galleryImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=400&h=400&fit=crop",
      alt: "Meta Quest 3 Headset"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=400&h=400&fit=crop",
      alt: "VR Gaming Experience"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=400&h=400&fit=crop",
      alt: "Virtual Reality Setup"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop",
      alt: "VR Controllers"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
      alt: "VR Headset Design"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 meta-blue">Experience Gallery</h2>
      <Carousel className="w-full">
        <CarouselContent className="-ml-4">
          {galleryImages.map((image) => (
            <CarouselItem key={image.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src={image.url} 
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-blue-500 border-blue-500 text-white hover:bg-blue-600" />
        <CarouselNext className="bg-blue-500 border-blue-500 text-white hover:bg-blue-600" />
      </Carousel>
    </section>
  );
};

export default ProductGallery;
