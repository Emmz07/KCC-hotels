"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";

const categories = ["All", "Coastal", "Mainland", "Desserts", "Beverages"];

const dishes = [
  {
    id: 1,
    name: "Grilled Fish with Coconut Rice",
    description: "Fresh fish grilled to perfection, served with coconut-infused rice and vegetables.",
    price: 18.99,
    image: "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Coastal",
    popular: true,
  },
  {
    id: 2,
    name: "Ugali with Sukuma Wiki",
    description: "Traditional cornmeal porridge served with sautéed collard greens and caramelized onions.",
    price: 14.99,
    image: "https://images.pexels.com/photos/29889183/pexels-photo-29889183/free-photo-of-traditional-zanzibar-seafood-platter-with-tropical-fruits.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Mainland",
    popular: true,
  },
  {
    id: 3,
    name: "Zanzibar Pilau",
    description: "Fragrant rice cooked with a blend of spices, meat, and vegetables in the Zanzibari tradition.",
    price: 16.99,
    image: "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Coastal",
    popular: true,
  },
  {
    id: 4,
    name: "Mandazi",
    description: "Sweet, fluffy East African donuts flavored with cardamom and coconut milk.",
    price: 8.99,
    image: "https://images.pexels.com/photos/4553031/pexels-photo-4553031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Desserts",
    popular: false,
  },
  {
    id: 5,
    name: "Nyama Choma",
    description: "Slow-roasted meat seasoned with African spices, served with kachumbari salad.",
    price: 22.99,
    image: "https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Mainland",
    popular: true,
  },
  {
    id: 6,
    name: "Tangawizi Chai",
    description: "Strong ginger tea brewed with aromatic spices and sweetened with honey.",
    price: 5.99,
    image: "https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Beverages",
    popular: false,
  },
];

export default function PopularDishesSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredDishes = activeCategory === "All" 
    ? dishes 
    : dishes.filter(dish => dish.category === activeCategory);

  return (
    <section id="menu" className="py-20 mt-9">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className=" text-3xl font-bold mb-4">Our Popular Dishes</h2>
          <p className="text-muted-foreground">
            Explore our most beloved dishes that have captivated the hearts and palates of our guests.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDishes.map((dish) => (
            <div 
              key={dish.id} 
              className="group bg-background rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-105"
                    />
                {dish.popular && (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    Popular
                  </Badge>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg">{dish.name}</h3>
                  <span className="font-serif font-bold text-primary">${dish.price}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{dish.description}</p>
                <div className="flex justify-between items-center">
                  <Badge variant="outline" className={cn(
                    "rounded-full",
                    dish.category === "Coastal" && "bg-chart-1/10 text-chart-1 border-chart-1/20",
                    dish.category === "Mainland" && "bg-chart-2/10 text-chart-2 border-chart-2/20",
                    dish.category === "Desserts" && "bg-chart-4/10 text-chart-4 border-chart-4/20",
                    dish.category === "Beverages" && "bg-chart-5/10 text-chart-5 border-chart-5/20"
                  )}>
                    {dish.category}
                  </Badge>
                  <Button variant="ghost" size="sm">
                    Order Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
}