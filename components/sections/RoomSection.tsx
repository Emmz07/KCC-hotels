import { AnimateIn } from '@/components/ui/animations';
import { RoomCard, RoomProps } from '@/components/ui/room-card';

const rooms: RoomProps[] = [
  {
    id: '1',
    name: 'Deluxe Single',
    description: 'Spacious room with king-sized bed, featuring modern amenities and a stunning city view.',
    price: 35,
    capacity: 2,
    size: 35,
    imageSrc: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1020,q_auto,w_2000/partner-images/79/92/2f41bf85caca9e2555412c0f6d47739e247bb382cd18bf928fa30d626029.jpeg',
  },
  {
    id: '2',
    name: 'Deluxe Double',
    description: 'Luxurious suite with separate living area, premium furnishings, and panoramic views.',
    price: 43,
    capacity: 3,
    size: 55,
    imageSrc: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1020,q_auto,w_2000/hotelier-images/42/31/1c33a44f16daaa705542aa071a6924c98b5bd1120038e8fae3fb6c63d3e8.jpeg',
  },
  {
    id: '3',
    name: 'Deluxe With Balcony',
    description: 'Comfortable room designed for families, with multiple beds and a cozy seating area.',
    price: 45,
    capacity: 4,
    size: 45,
    imageSrc: 'https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_534,q_40,w_800/hotelier-images/30/37/f8500feb5ec598d96e1cb23d50ef06b142f1c64397ebdd522f2ac547fb37.jpeg',
  },
];

export function RoomsSection() {
  return (
    <section id="rooms" className="py-20 pt-4 dark:bg-black">
      <div className="container mx-auto sm:px-6 lg:px-8 px-4">
        <AnimateIn>
          <p className='text-sm text-[color:var(--greenish)] text-center mb-3'>Conscious Hospitality</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center dark:text-white mb-3">
            Rooms & Suites
          </h2>
          <div className="w-20 h-1 bg-[color:var(--greenish)] mx-auto mb-9"></div>
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