'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Link from 'next/link';

export interface RoomProps {
  id: string;
  name: string;
  description: string;
  price: number;
  capacity: number;
  size: number;
  imageSrc: string;
}

export function RoomCard({ room }: { room: RoomProps }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden h-full">
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={room.imageSrc}
            alt={room.name}
            fill
            className="object-cover transition-transform duration-700 hover:scale-110"
          />
          <div className="absolute bottom-0 right-0 bg-primary text-primary-foreground px-4 py-2">
            <p className="font-semibold">${room.price} <span className="text-xs">/ night</span></p>
          </div>
        </div>
        <CardContent className="pt-6">
          <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
          <p className="text-muted-foreground text-sm mb-4">{room.description}</p>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Capacity: {room.capacity} Guests</span>
            <span>Size: {room.size} m²</span>
          </div>
        </CardContent>
        <CardFooter className="pt-0">
          <Link href="/rooms" className="w-full ">
            <Button className="w-full bg-[color:var(--greenish)] hover:bg-[color:var(--limeish)] transition-colors duration-700 border-white hover:bg-[color:var(--limeish)] hover:text-black">Book Now</Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}