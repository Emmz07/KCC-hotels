import { AnimateIn } from '@/components/ui/animations';
import Image from 'next/image';

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <AnimateIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
            Welcome to KCC Hotels
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimateIn from="left" delay={0.2}>
            <div className="relative rounded-xl overflow-hidden h-[400px] md:h-[500px]">
              <Image
                src="https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg"
                alt="Hotel Lobby"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </AnimateIn>

          <AnimateIn from="right" delay={0.3}>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">
                A Luxury Experience Like No Other
              </h3>
              <p className="text-muted-foreground">
                Established in 2010, KCC Hotels has been synonymous with luxury, comfort, and exceptional service. 
                Our properties are designed to provide guests with an unforgettable experience, combining elegant 
                architecture with modern amenities.
              </p>
              <p className="text-muted-foreground">
                Whether you&apos;re traveling for business or leisure, our dedicated staff is committed to ensuring 
                your stay exceeds expectations. From our gourmet restaurants to our state-of-the-art fitness 
                facilities, every aspect of KCC Hotels is crafted to deliver excellence.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-primary">150+</span>
                  <span className="text-sm text-muted-foreground">Luxury Rooms</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-primary">4.8</span>
                  <span className="text-sm text-muted-foreground">Customer Rating</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-primary">12+</span>
                  <span className="text-sm text-muted-foreground">Years of Service</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-primary">24/7</span>
                  <span className="text-sm text-muted-foreground">Customer Support</span>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}