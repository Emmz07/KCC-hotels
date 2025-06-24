"use client";

import { Room } from "@/lib/rooms";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface RoomCardProps {
  room: Room;
  variant: "simple" | "detailed" | "minimal";
}

export default function RoomCard({ room, variant }: RoomCardProps) {
  // Remove isHovered and all mouse event logic for instant, reliable interaction

  return (
    <div className="relative h-80 rounded-lg overflow-hidden group transition-all duration-500 mt-6">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={room.image}
          alt={room.name}
          width={400}
          height={320}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:bg-black/30" />
      </div>

      {/* Room Name */}
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 flex justify-center z-10 transition-opacity duration-500",
          "group-hover:opacity-0"
        )}
      >
        <div className="bg-gray-200 dark:bg-zinc-900 text-foreground px-6 py-3 rounded-t-lg">
          <h3 className="font-medium text-lg">{room.name}</h3>
        </div>
      </div>

      {/* Variant-specific Hover Overlays */}
      {(variant === "simple" || variant === "detailed" || variant === "minimal") && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 opacity-0 translate-y-8 transition-all duration-500 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
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

          <Link
            href={
              variant === "simple"
                ? "/room-details01"
                : variant === "detailed"
                ? "/room-details02"
                : "/room-details03"
            }
            className="bg-[color:var(--greenish)] hover:bg-[color:var(--limeish)] text-white py-2 px-4 rounded-md flex items-center justify-center gap-2 transition-colors duration-200 w-full hover:text-black focus:outline-none focus:ring-2 focus:ring-[color:var(--greenish)]"
            tabIndex={0}
          >
            View Details <ChevronRight size={16} />
          </Link>
        </div>
      )}
    </div>
  );
}