"use client";

import { Room } from "@/lib/rooms";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

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
        <img 
          src={room.image} 
          alt={room.name} 
          className={cn(
            "w-full h-full object-cover transition-transform duration-700",
            isHovered && "scale-110"
          )}
        />
        {/* Dark overlay */}
        <div className={cn(
          "absolute inset-0 bg-black/10 transition-opacity duration-500",
          isHovered && "bg-black/30"
        )} />
      </div>

      {/* Variant-specific content */}
      {variant === "simple" && (
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          <div className="bg-white dark:bg-card text-foreground px-6 py-3 rounded-t-lg">
            <h3 className="font-medium text-lg">{room.name}</h3>
          </div>
        </div>
      )}

      {variant === "detailed" && (
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          <div className="bg-white dark:bg-card text-foreground px-6 py-3 rounded-t-lg">
            <h3 className="font-medium text-lg">{room.name}</h3>
          </div>
        </div>
      )}

      {variant === "minimal" && (
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          <div className="bg-white dark:bg-card text-foreground px-6 py-3 rounded-t-lg">
            <h3 className="font-medium text-lg">{room.name}</h3>
          </div>
        </div>
      )}

      {/* Features overlay (shown on hover) */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 opacity-0 transition-all duration-500 translate-y-8",
        isHovered && "opacity-100 translate-y-0"
      )}>
        <div className="grid grid-cols-2 gap-2 mb-4">
          {room.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-white">
              <span className="h-8 w-8 rounded-full bg-lime-500/20 flex items-center justify-center">
                <i className={`lucide-${feature.icon}`}></i>
              </span>
              <span className="text-sm">{feature.label}</span>
            </div>
          ))}
        </div>
        <button className="bg-lime-500 hover:bg-lime-600 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2 transition-colors duration-300 w-full">
          View Details <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}