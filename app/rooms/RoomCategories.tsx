"use client";

import { roomCategories } from "@/lib/rooms";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function RoomCategories() {
  const [activeCategory, setActiveCategory] = useState("classic");

  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-6 mt-8 mb-12">
      {roomCategories.map((category) => (
        <button
          key={category.id}
          className={cn(
            "px-4 py-2 text-sm sm:text-base font-medium transition-colors duration-300 border-b-2",
            activeCategory === category.id
              ? "border-lime-500 text-lime-500"
              : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted"
          )}
          onClick={() => setActiveCategory(category.id)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}