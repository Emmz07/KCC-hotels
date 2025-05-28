import { AnimateIn } from '@/components/ui/animations';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function MeetingsSection() {
  return (
    <section id="meetings" className="py-20 bg-muted/30 mt-9">
      <div className="container mx-auto px-4">
        <AnimateIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
            Meetings & Training
          </h2>
          <div className="w-20 h-1 bg-lime-500 mx-auto mb-4"></div>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Sophisticated spaces designed for productive business meetings, conferences, and training sessions, 
            equipped with cutting-edge technology and supported by our attentive staff.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimateIn from="bottom" delay={0.1}>
            <div className="bg-background rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image
                  src="https://images.pexels.com/photos/159213/hall-congress-architecture-building-159213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Conference Room"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Conference Room</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Large, versatile space ideal for conferences, seminars, and large meetings. 
                  Accommodates up to 100 guests with flexible seating arrangements.
                </p>
                <Button variant="outline" className="w-full">View Details</Button>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn from="bottom" delay={0.2}>
            <div className="bg-background rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image
                  src="https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg"
                  alt="Boardroom"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Executive Boardroom</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Elegant boardroom with premium furnishings, perfect for high-level meetings and 
                  executive discussions. Seats up to 20 people comfortably.
                </p>
                <Button variant="outline" className="w-full">View Details</Button>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn from="bottom" delay={0.3}>
            <div className="bg-background rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image
                  src="https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg"
                  alt="Training Room"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Training Suite</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Modern training space with interactive technology, ideal for workshops and 
                  educational sessions. Configured for up to 50 participants.
                </p>
                <Button variant="outline" className="w-full">View Details</Button>
              </div>
            </div>
          </AnimateIn>
        </div>

        <AnimateIn>
          <div className="mt-12 bg-background p-6 md:p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-3">Plan Your Next Event With Us</h3>
                <p className="text-muted-foreground mb-6">
                  From corporate meetings to training programs, our versatile venues and dedicated event planning team 
                  will ensure your event is a success. All spaces include high-speed Wi-Fi, audiovisual equipment, 
                  and customizable catering options.
                </p>
                <Button className='text-base text-sm border-lime-500 bg-lime-400 transition-colors duration-700 border-white hover:bg-lime-500 hover:text-white'>Request a Proposal</Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted/40 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-primary">5</p>
                  <p className="text-sm">Meeting Rooms</p>
                </div>
                <div className="bg-muted/40 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-primary">200</p>
                  <p className="text-sm">Max Capacity</p>
                </div>
                <div className="bg-muted/40 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-primary">100%</p>
                  <p className="text-sm">Wi-Fi Coverage</p>
                </div>
                <div className="bg-muted/40 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-primary">24/7</p>
                  <p className="text-sm">Technical Support</p>
                </div>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}