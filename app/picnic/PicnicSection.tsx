import { AnimateIn } from '@/components/ui/animations';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function PicnicSection() {
  return (
    <section id="picnic" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <AnimateIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
            Picnic & Outdoor Events
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimateIn from="left" delay={0.2}>
            <div className="relative rounded-xl overflow-hidden h-[400px] md:h-[500px]">
              <Image
                src="https://images.pexels.com/photos/4917091/pexels-photo-4917091.jpeg"
                alt="Hotel Garden"
                fill
                className="object-cover"
              />
            </div>
          </AnimateIn>

          <AnimateIn from="right" delay={0.3}>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Unforgettable Outdoor Experiences</h3>
              <p className="text-muted-foreground">
                Experience the perfect blend of nature and luxury with our picnic and outdoor event services. 
                Our beautifully landscaped gardens provide an idyllic setting for various gatherings, from 
                casual family picnics to formal garden parties.
              </p>
              <p className="text-muted-foreground">
                Our events team will create a bespoke experience tailored to your preferences, with gourmet 
                catering options, tasteful decorations, and attentive service. Whether you&apos;re planning a 
                corporate team-building event or a romantic celebration, our outdoor spaces offer a refreshing 
                alternative to traditional indoor venues.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></div>
                  <div>
                    <h4 className="font-medium">Garden Parties</h4>
                    <p className="text-sm text-muted-foreground">Elegant outdoor gatherings</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></div>
                  <div>
                    <h4 className="font-medium">Family Picnics</h4>
                    <p className="text-sm text-muted-foreground">Fun-filled days for all ages</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></div>
                  <div>
                    <h4 className="font-medium">Corporate Events</h4>
                    <p className="text-sm text-muted-foreground">Team building in nature</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></div>
                  <div>
                    <h4 className="font-medium">Romantic Setups</h4>
                    <p className="text-sm text-muted-foreground">Special occasions for couples</p>
                  </div>
                </div>
              </div>

              <Button className="mt-2">Book an Outdoor Event</Button>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}