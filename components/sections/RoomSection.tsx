import { AnimateIn } from '@/components/ui/animations';
import { RoomCard, RoomProps } from '@/components/ui/room-card';

const rooms: RoomProps[] = [
  {
    id: '1',
    name: 'Deluxe King Room',
    description: 'Spacious room with king-sized bed, featuring modern amenities and a stunning city view.',
    price: 199,
    capacity: 2,
    size: 35,
    imageSrc: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '2',
    name: 'Premium Suite',
    description: 'Luxurious suite with separate living area, premium furnishings, and panoramic views.',
    price: 349,
    capacity: 3,
    size: 55,
    imageSrc: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '3',
    name: 'Family Room',
    description: 'Comfortable room designed for families, with multiple beds and a cozy seating area.',
    price: 279,
    capacity: 4,
    size: 45,
    imageSrc: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

export function RoomsSection() {
  return (
    <section id="rooms" className="py-20 bg-muted/30">
      <div className="container mx-auto sm:px-6 lg:px-8 px-4">
        <AnimateIn>
            <p className='text-sm text-lime-500 text-center mb-3'>Conscious Hospitality</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
            Rooms & Suites
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-9"></div>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Experience the perfect blend of comfort and luxury in our thoughtfully designed rooms and suites. 
            Each space is crafted to ensure a memorable stay.
          </p>
        </AnimateIn>

        <div className="mt-12 mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <AnimateIn key={room.id} delay={0.1 * (index + 1)}>
              <RoomCard room={room} />
            </AnimateIn>
          ))}
        </div>


      </div>
    </section>
  );
}