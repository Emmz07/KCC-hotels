"use client";

import { Room } from "@/lib/rooms";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface RoomCardProps {
  room: Room;
  variant: "simple" | "detailed" | "minimal";
}

export default function RoomCard({ room, variant }: RoomCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative h-80 rounded-lg overflow-hidden group transition-all duration-500 mt-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src={room.image} 
          alt={room.name} 
          width={400} // Set your desired width
          height={320} // Set your desired height
          className={cn(
            "w-full h-full object-cover transition-transform duration-700",
            isHovered && "scale-110"
          )}
          priority
        />

        {/* Dark overlay */}
        <div className={cn(
          "absolute inset-0 bg-black/10 transition-opacity duration-500",
          isHovered && "bg-black/30"
        )} />
      </div>

      {/* Room Name */}
      <div className={cn(
        "absolute bottom-0 left-0 right-0 flex justify-center z-10 transition-opacity duration-500",
        isHovered && "opacity-0"
      )}>
        <div className="bg-gray-200 dark:bg-zinc-900 text-foreground px-6 py-3 rounded-t-lg">
          <h3 className="font-medium text-lg">{room.name}</h3>
        </div>
      </div>


      {/* Variant-specific Hover Overlays */}
      {variant === "simple" && (
        <div className={cn(
        "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 opacity-0 transition-all duration-500 translate-y-8",
        isHovered && "opacity-100 translate-y-0"
      )}>
        <div className="grid grid-cols-2 gap-2 mb-4">
          {room.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-white">
              <span className="h-8 w-8 rounded-full bg-[color:var(--greenish)]/20 flex items-center justify-center">
                <i className={`lucide-${feature.icon}`}></i>
              </span>
              <span className="text-sm">{feature.label}</span>
            </div>
          ))}
        </div>
        <Link href="/room-details01" className="bg-[color:var(--greenish)] hover:bg-[color:var(--limeish)] text-white py-2 px-4 rounded-md flex items-center justify-center gap-2 transition-colors duration-300 w-full hover:text-black">
          View Details <ChevronRight size={16} />

        </Link>
        
      </div>
      )}

      {variant === "detailed" && (
        <div className={cn(
        "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 opacity-0 transition-all duration-500 translate-y-8",
        isHovered && "opacity-100 translate-y-0"
      )}>
        <div className="grid grid-cols-2 gap-2 mb-4">
          {room.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-white">
              <span className="h-8 w-8 rounded-full bg-[color:var(--greenish)]/20 flex items-center justify-center">
                <i className={`lucide-${feature.icon}`}></i>
              </span>
              <span className="text-sm">{feature.label}</span>
            </div>
          ))}
        </div>
        <Link href="/room-details02" className="bg-[color:var(--greenish)] hover:bg-[color:var(--limeish)] text-white py-2 px-4 rounded-md flex items-center justify-center gap-2 transition-colors duration-300 w-full hover:text-black">
          View Details <ChevronRight size={16} />

        </Link>
        
      </div>
      )}

      {variant === "minimal" && (
        <div className={cn(
        "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 opacity-0 transition-all duration-500 translate-y-8",
        isHovered && "opacity-100 translate-y-0"
      )}>
        <div className="grid grid-cols-2 gap-2 mb-4">
          {room.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-white">
              <span className="h-8 w-8 rounded-full bg-[color:var(--greenish)]/20 flex items-center justify-center">
                <i className={`lucide-${feature.icon}`}></i>
              </span>
              <span className="text-sm">{feature.label}</span>
            </div>
          ))}
        </div>
        <Link href="/room-details03" className=" bg-[color:var(--greenish)] hover:bg-[color:var(--limeish)] text-white py-2 px-4 rounded-md flex items-center justify-center gap-2 transition-colors duration-300 w-full hover:text-black">
          View Details <ChevronRight size={16} />

        </Link>
        
      </div>
      )}
    </div>
  );
}
