"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ArrowUpRight } from "lucide-react"
import Image from "next/image";

const galleryImages = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/7363769/pexels-photo-7363769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Traditional Tanzanian stew",
    span: "col-span-1 row-span-1",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/958546/pexels-photo-958546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Coastal seafood dish",
    span: "col-span-1 row-span-2",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/2454533/pexels-photo-2454533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "African spices",
    span: "col-span-1 row-span-1",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Restaurant interior",
    span: "col-span-2 row-span-1",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/5480689/pexels-photo-5480689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Chef preparing food",
    span: "col-span-1 row-span-1",
  },
];

export default function GallerySection() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<null | typeof galleryImages[0]>(null);
  
  const openModal = (image: typeof galleryImages[0]) => {
    setSelectedImage(image);
    setIsOpen(true);
  };
  
  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-serif text-3xl font-bold mb-4">Our Gallery</h2>
          <p className="text-muted-foreground">
            A visual feast of our culinary creations and dining atmosphere.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className={cn(
                "relative overflow-hidden rounded-lg group cursor-pointer",
                image.span
              )}
              onClick={() => openModal(image)}
            >
              <div className="relative aspect-square lg:aspect-auto lg:h-full">
                <Image 
                  src={image.src} 
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-medium text-white">{image.alt}</p>
                      <ArrowUpRight className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View More Photos
          </Button>
        </div>
      </div>
      
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-3xl p-0 overflow-hidden">
          {selectedImage && (
            <div className="relative h-full w-full">
            <Image 
              src={selectedImage.src} 
              alt={selectedImage.alt}
              fill
              sizes="90vw"
              className="w-full h-auto object-contain"
            />
            </div>
            
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}