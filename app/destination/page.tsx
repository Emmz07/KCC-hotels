'use client'

import React, { useState } from 'react';
import { Search, MapPin, Users, Star, ChevronDown, ChevronUp, Globe, Camera, Mountain, Trees, Clock, Award, Activity } from 'lucide-react';
import Image from 'next/image';


interface Destination {
  id: number;
  name: string;
  location: string;
  image: string;
  description: string;
  detailedDescription: string;
  category: 'wildlife' | 'cultural' | 'adventure' | 'beach' | 'mountain';
  rating: number;
  bestTime: string;
  duration: string;
  price: string;
  highlights: string[];
  activities: string[];
  accommodation: string[];
  transportation: string;
  difficulty: string;
  groupSize: string;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: "Saadani National Park",
    location: "Tanzania, East Africa",
    image: "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "The only coastal national park in East Africa, offering unique wildlife experiences.",
    detailedDescription: "Saadani National Park is Tanzania's only coastal wildlife sanctuary, where the Indian Ocean meets the African bush. This unique ecosystem offers visitors the rare opportunity to see elephants, lions, and buffalo against a backdrop of pristine beaches and coral reefs. The park spans 1,100 square kilometers and provides an unparalleled combination of beach relaxation and traditional safari experiences. Visitors can witness the spectacular sight of elephants walking along the beach at sunset, making it one of the most photographed wildlife destinations in Africa.",
    category: 'wildlife',
    rating: 4.8,
    bestTime: "June to October (Dry season)",
    duration: "3-5 days",
    price: "$180/day",
    highlights: ["Beach and bush combination", "Elephant herds on beaches", "Bird watching paradise", "Boat safaris on Wami River", "Pristine coral reefs"],
    activities: ["Game drives", "Beach relaxation", "Boat excursions", "Walking safaris", "Snorkeling", "Cultural village visits"],
    accommodation: ["Luxury beach lodges", "Eco-friendly camps", "Budget guesthouses"],
    transportation: "4WD safari vehicles, boat transfers",
    difficulty: "Easy to Moderate",
    groupSize: "2-12 people"
  },
  {
    id: 2,
    name: "Selous National Park",
    location: "Tanzania, East Africa",
    image: "https://images.pexels.com/photos/1598073/pexels-photo-1598073.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Africa's largest game reserve with unspoiled wilderness and diverse wildlife.",
    detailedDescription: "The Selous Game Reserve is one of Africa's largest protected areas, covering over 50,000 square kilometers of pristine wilderness. This UNESCO World Heritage site offers unparalleled wildlife viewing opportunities in a completely untouched environment. The reserve is famous for its large populations of elephants, wild dogs, and hippos. The Rufiji River system creates a network of channels, lakes, and swamps that support incredible biodiversity. Unlike other parks, Selous allows walking safaris and boat safaris, providing intimate wildlife encounters.",
    category: 'wildlife',
    rating: 4.9,
    bestTime: "June to November (Dry season)",
    duration: "4-7 days",
    price: "$220/day",
    highlights: ["African wild dogs", "Massive hippo pools", "Remote wilderness", "Photography opportunities", "UNESCO World Heritage site"],
    activities: ["Walking safaris", "Boat safaris", "Game drives", "Photography tours", "Fly camping", "Fishing"],
    accommodation: ["Luxury safari camps", "Mobile camps", "River lodges"],
    transportation: "Light aircraft, 4WD vehicles, boats",
    difficulty: "Moderate",
    groupSize: "4-8 people"
  },
  {
    id: 3,
    name: "Ruaha National Park",
    location: "Tanzania, East Africa",
    image: "https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Tanzania's largest national park, famous for its large elephant population.",
    detailedDescription: "Ruaha National Park is Tanzania's largest national park and East Africa's largest elephant sanctuary, home to over 12,000 elephants. The park's diverse landscapes, from rolling hills to the Great Ruaha River, support an incredible variety of wildlife including over 400 bird species. The ancient baobab trees create a mystical landscape, especially during golden hour. Ruaha is renowned for its large prides of lions and significant populations of leopards, cheetahs, and wild dogs. The park offers excellent game viewing year-round with fewer crowds than northern circuit parks.",
    category: 'wildlife',
    rating: 4.7,
    bestTime: "May to December (Dry season)",
    duration: "3-6 days",
    price: "$200/day",
    highlights: ["Largest elephant herds", "Ancient baobab trees", "Great Ruaha River", "Big cats", "Over 400 bird species"],
    activities: ["Game drives", "Bird watching", "Bush walks", "Cultural visits", "Photography", "Night drives"],
    accommodation: ["Safari lodges", "Tented camps", "Budget campsites"],
    transportation: "Charter flights, 4WD vehicles",
    difficulty: "Easy to Moderate",
    groupSize: "2-10 people"
  },
  {
    id: 4,
    name: "Bagamoyo Historic Town",
    location: "Tanzania, East Africa",
    image: "https://images.pexels.com/photos/32502281/pexels-photo-32502281/free-photo-of-old-mardin-cityscape-with-historic-castle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Historic Swahili town with rich cultural heritage and German colonial architecture.",
    detailedDescription: "Bagamoyo was once one of the most important trading ports along the East African coast and the final stop for slave caravans before crossing to Zanzibar. This UNESCO World Heritage site showcases centuries of Swahili, Arab, Persian, Indian, and European influences through its architecture, culture, and traditions. The town features well-preserved German colonial buildings, ancient mosques, and traditional Swahili houses. Visitors can explore the old slave market, German Boma, and numerous art galleries showcasing contemporary African art.",
    category: 'cultural',
    rating: 4.5,
    bestTime: "Year-round (Best: June-October)",
    duration: "1-2 days",
    price: "$80/day",
    highlights: ["Historic architecture", "Slave trade history", "Art galleries", "Traditional crafts", "German colonial buildings"],
    activities: ["Walking tours", "Museum visits", "Art workshops", "Cultural performances", "Traditional dhow sailing", "Local market visits"],
    accommodation: ["Historic hotels", "Guesthouses", "Beach resorts"],
    transportation: "Walking tours, bicycle rentals, local transport",
    difficulty: "Easy",
    groupSize: "Any size"
  },
  {
    id: 5,
    name: "Mikumi National Park",
    location: "Tanzania, East Africa",
    image: "https://images.pexels.com/photos/631292/pexels-photo-631292.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Accessible savannah park with diverse wildlife and stunning mountain backdrops.",
    detailedDescription: "Mikumi National Park offers visitors an authentic African safari experience with its vast savannahs reminiscent of the Serengeti. The park is easily accessible from Dar es Salaam and provides excellent wildlife viewing opportunities against the dramatic backdrop of the Uluguru Mountains. The Mkata floodplain is the park's centerpiece, hosting large herds of buffalo, wildebeest, and zebra. The park is home to over 400 bird species and offers some of the best wildlife photography opportunities in Tanzania with its open landscapes and abundant wildlife.",
    category: 'wildlife',
    rating: 4.6,
    bestTime: "June to October (Dry season)",
    duration: "2-4 days",
    price: "$150/day",
    highlights: ["Mkata floodplain", "Hippo pools", "Mountain views", "Easy accessibility", "Diverse birdlife"],
    activities: ["Game drives", "Photography", "Bush camping", "Nature walks", "Bird watching", "Cultural visits"],
    accommodation: ["Safari camps", "Lodges", "Camping sites"],
    transportation: "Road access, 4WD vehicles",
    difficulty: "Easy",
    groupSize: "2-15 people"
  },
  {
    id: 6,
    name: "Stone Town, Zanzibar",
    location: "Tanzania, Indian Ocean",
    image: "https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "UNESCO World Heritage site with narrow alleys, spice markets, and stunning architecture.",
    detailedDescription: "Stone Town is the cultural heart of Zanzibar, a labyrinth of narrow alleys, bustling bazaars, mosques, and grand Arab houses. This UNESCO World Heritage site represents a unique fusion of African, Arab, Indian, and European cultures spanning over a millennium. The town's architecture tells the story of its rich trading history, with intricately carved wooden doors, coral stone buildings, and beautiful courtyards. The spice markets fill the air with aromatic scents of cardamom, cinnamon, and cloves that made Zanzibar famous as the 'Spice Island'.",
    category: 'cultural',
    rating: 4.8,
    bestTime: "June to October (Dry season)",
    duration: "2-3 days",
    price: "$120/day",
    highlights: ["Spice markets", "Historic architecture", "Freddie Mercury Museum", "Rooftop restaurants", "Traditional dhow harbor"],
    activities: ["Spice tours", "Cultural walks", "Market visits", "Sunset dhow cruises", "Cooking classes", "Art gallery visits"],
    accommodation: ["Boutique hotels", "Historic palaces", "Rooftop guesthouses"],
    transportation: "Walking, bicycle rickshaws, local buses",
    difficulty: "Easy",
    groupSize: "Any size"
  },
  {
    id: 7,
    name: "Mount Kilimanjaro",
    location: "Tanzania, East Africa",
    image: "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Africa's highest peak and world's tallest free-standing mountain.",
    detailedDescription: "Mount Kilimanjaro stands majestically at 5,895 meters, offering adventurers the ultimate climbing challenge. This dormant volcano features three distinct volcanic cones and five climate zones, from tropical base to arctic summit. The mountain attracts climbers from around the world who come to stand on the 'Roof of Africa'. The journey passes through lush rainforests, alpine meadows, and lunar-like landscapes before reaching the snow-capped summit. Multiple routes offer different experiences, from the popular Marangu route to the scenic Machame route.",
    category: 'adventure',
    rating: 4.9,
    bestTime: "January-March, June-October",
    duration: "5-9 days",
    price: "$1,200-2,500",
    highlights: ["Uhuru Peak summit", "Barranco Wall climb", "Sunrise from summit", "Five climate zones", "Glaciers and snow fields"],
    activities: ["Mountain climbing", "Photography", "Stargazing", "Wildlife viewing", "Cultural visits", "Acclimatization hikes"],
    accommodation: ["Mountain huts", "Camping", "Pre/post climb lodges"],
    transportation: "Trekking, porter support, 4WD to gates",
    difficulty: "Challenging",
    groupSize: "2-12 people"
  },
  {
    id: 8,
    name: "Pemba Island",
    location: "Tanzania, Indian Ocean",
    image: "https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Pristine coral reefs, spice plantations, and untouched beaches.",
    detailedDescription: "Pemba Island, known as 'The Green Island', offers visitors pristine coral reefs, lush spice plantations, and some of the most beautiful untouched beaches in the Indian Ocean. This hidden gem provides an authentic island experience away from crowds. The island is renowned for its world-class diving sites, including the famous Pemba Channel with its dramatic drop-offs and pelagic species. Traditional dhow building still takes place here, and visitors can witness craftsmen using techniques passed down through generations.",
    category: 'beach',
    rating: 4.7,
    bestTime: "June to October (Dry season)",
    duration: "3-7 days",
    price: "$160/day",
    highlights: ["Pristine coral reefs", "Spice plantations", "Secluded beaches", "Traditional dhow building", "World-class diving"],
    activities: ["Snorkeling", "Diving", "Spice tours", "Beach relaxation", "Dhow sailing", "Fishing"],
    accommodation: ["Beach resorts", "Eco-lodges", "Guesthouses"],
    transportation: "Flights, ferry, dhow boats",
    difficulty: "Easy",
    groupSize: "2-20 people"
  },
  {
    id: 9,
    name: "Ruaha National Park",
    location: "Tanzania, East Africa",
    image: "https://images.pexels.com/photos/30705257/pexels-photo-30705257/free-photo-of-majestic-lion-roaming-kenyan-grasslands.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Tanzania's largest national park, famous for its large elephant population.",
    detailedDescription: "Ruaha National Park is Tanzania's largest national park and East Africa's largest elephant sanctuary, home to over 12,000 elephants. The park's diverse landscapes, from rolling hills to the Great Ruaha River, support an incredible variety of wildlife including over 400 bird species. The ancient baobab trees create a mystical landscape, especially during golden hour. Ruaha is renowned for its large prides of lions and significant populations of leopards, cheetahs, and wild dogs. The park offers excellent game viewing year-round with fewer crowds than northern circuit parks.",
    category: 'wildlife',
    rating: 4.7,
    bestTime: "May to December (Dry season)",
    duration: "3-6 days",
    price: "$200/day",
    highlights: ["Largest elephant herds", "Ancient baobab trees", "Great Ruaha River", "Big cats", "Over 400 bird species"],
    activities: ["Game drives", "Bird watching", "Bush walks", "Cultural visits", "Photography", "Night drives"],
    accommodation: ["Safari lodges", "Tented camps", "Budget campsites"],
    transportation: "Charter flights, 4WD vehicles",
    difficulty: "Easy to Moderate",
    groupSize: "2-10 people"
  }
];

const categories = [
  { id: 'all', name: 'All Destinations', icon: Globe },
  { id: 'wildlife', name: 'Wildlife', icon: Camera },
  { id: 'cultural', name: 'Cultural', icon: MapPin },
  { id: 'adventure', name: 'Adventure', icon: Mountain },
  { id: 'beach', name: 'Beach', icon: Trees }
];

function DestinationPage() {
  const [isDark, setIsDark] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());


  const filteredDestinations = destinations.filter(destination => {
    const matchesSearch = destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         destination.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         destination.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || destination.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const toggleCardExpansion = (cardId: number) => {
    const newExpandedCards = new Set(expandedCards);
    if (newExpandedCards.has(cardId)) {
      newExpandedCards.delete(cardId);
    } else {
      newExpandedCards.add(cardId);
    }
    setExpandedCards(newExpandedCards);
  };

  const getCategoryIcon = (category: string) => {
    const categoryObj = categories.find(cat => cat.id === category);
    return categoryObj ? categoryObj.icon : Globe;
  };

  return (
    <div>
    
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 mt-17 bg-gray-200 dark:bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-[color:var(--greenish)]">
            Discover Amazing Destinations
          </h2>
          <p className={`text-xl mb-12 max-w-2xl mx-auto  ${
            isDark ? 'text-gray-300' : 'dark:text-white'
          }`}>
            Get a holiday deal the whole family can enjoy as you spend quality time at incredible destinations. 
            Experience unforgettable adventures and create lasting memories.
          </p>
          
          {/* Search and Filter Bar */}
          <div className="max-w-2xl mx-auto space-y-4">
            <div className={`relative rounded-lg border transition-colors duration-200 ${
              isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'
            }`}>
              <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 ${
                isDark ? 'text-gray-400' : 'text-gray-500'
              }`} />
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-12 pr-4 py-3 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition-colors duration-200 ${
                  isDark 
                    ? 'bg-transparent text-white placeholder-gray-400' 
                    : 'bg-transparent text-gray-800 placeholder-gray-900'
                }`}
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 ${
                      selectedCategory === category.id
                        ? isDark 
                          ? 'bg-[color:var(--greenish)] text-white' 
                          : 'bg-[color:var(--greenish)] text-white'
                        : isDark
                          ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                          : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-300'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="text-sm font-medium">{category.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {filteredDestinations.map((destination, index) => {
              const Icon = getCategoryIcon(destination.category);
              const isExpanded = expandedCards.has(destination.id);
              
              return (
                <div
                  key={destination.id}
                  className={`group rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    isDark 
                      ? 'bg-gray-800 shadow-lg hover:shadow-emerald-500/20' 
                      : 'bg-white shadow-lg hover:shadow-gray-400/20'
                  }`}
                  style={{
                    animationName: 'fadeInUp',
                    animationDuration: '0.6s',
                    animationTimingFunction: 'ease-out',
                    animationFillMode: 'forwards',
                    animationDelay: `${index * 100}ms`
                    }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={destination.image}
                      alt={destination.name}
                      width={800}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        isDark ? 'bg-gray-900/80 text-emerald-400' : 'bg-white/90 text-[color:var(--greenish)]'
                      }`}>
                        <Icon className="h-3 w-3 mr-1" />
                        {destination.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className={`flex items-center space-x-1 px-2 py-1 rounded-full ${
                        isDark ? 'bg-gray-900/80' : 'bg-white/90'
                      }`}>
                        <Star className="h-3 w-3 text-yellow-500 fill-current" />
                        <span className="text-xs font-medium">{destination.rating}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-3">
                      <h3 className="text-xl font-bold mb-1">{destination.name}</h3>
                      <p className={`text-sm flex items-center ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        <MapPin className="h-4 w-4 mr-1" />
                        {destination.location}
                      </p>
                    </div>
                    
                    <p className={`text-sm mb-4 line-clamp-2 ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {destination.description}
                    </p>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Best Time:</span>
                        <span className="font-medium">{destination.bestTime.split(' ')[0]}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Duration:</span>
                        <span className="font-medium">{destination.duration}</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2">Highlights:</h4>
                      <div className="flex flex-wrap gap-1">
                        {destination.highlights.slice(0, 3).map((highlight, idx) => (
                          <span
                            key={idx}
                            className={`px-2 py-1 text-xs rounded-full ${
                              isDark 
                                ? 'bg-gray-700 text-gray-300' 
                                : 'bg-gray-100 text-gray-700'
                            }`}
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Expandable Details Section */}
                    <div className={`transition-all duration-300 overflow-hidden ${
                      isExpanded ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      {isExpanded && (
                        <div className="space-y-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                          {/* Detailed Description */}
                          <div>
                            <h4 className="text-sm font-semibold mb-2 flex items-center">
                              <Globe className="h-4 w-4 mr-2" />
                              About This Destination
                            </h4>
                            <p className={`text-sm leading-relaxed ${
                              isDark ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                              {destination.detailedDescription}
                            </p>
                          </div>

                          {/* Extended Details Grid */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <h5 className="text-xs font-semibold mb-2 flex items-center">
                                <Clock className="h-3 w-3 mr-1" />
                                Best Time to Visit
                              </h5>
                              <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                {destination.bestTime}
                              </p>
                            </div>
                            <div>
                              <h5 className="text-xs font-semibold mb-2 flex items-center">
                                <Users className="h-3 w-3 mr-1" />
                                Group Size
                              </h5>
                              <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                {destination.groupSize}
                              </p>
                            </div>
                            <div>
                              <h5 className="text-xs font-semibold mb-2 flex items-center">
                                <Award className="h-3 w-3 mr-1" />
                                Difficulty
                              </h5>
                              <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                {destination.difficulty}
                              </p>
                            </div>
                            <div>
                              <h5 className="text-xs font-semibold mb-2 flex items-center">
                                <MapPin className="h-3 w-3 mr-1" />
                                Transportation
                              </h5>
                              <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                {destination.transportation}
                              </p>
                            </div>
                          </div>

                          {/* Activities */}
                          <div>
                            <h4 className="text-sm font-semibold mb-2 flex items-center">
                              <Activity className="h-4 w-4 mr-2" />
                              Activities & Experiences
                            </h4>
                            <div className="flex flex-wrap gap-1">
                              {destination.activities.map((activity, idx) => (
                                <span
                                  key={idx}
                                  className={`px-2 py-1 text-xs rounded-full ${
                                    isDark 
                                      ? 'bg-emerald-900/30 text-emerald-300 border border-emerald-700' 
                                      : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                                  }`}
                                >
                                  {activity}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Accommodation */}
                          <div>
                            <h4 className="text-sm font-semibold mb-2">Accommodation Options</h4>
                            <div className="space-y-1">
                              {destination.accommodation.map((acc, idx) => (
                                <div key={idx} className={`text-xs flex items-center ${
                                  isDark ? 'text-gray-400' : 'text-gray-600'
                                }`}>
                                  <div className="w-1 h-1 bg-emerald-500 rounded-full mr-2"></div>
                                  {acc}
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* All Highlights */}
                          <div>
                            <h4 className="text-sm font-semibold mb-2">All Highlights</h4>
                            <div className="flex flex-wrap gap-1">
                              {destination.highlights.map((highlight, idx) => (
                                <span
                                  key={idx}
                                  className={`px-2 py-1 text-xs rounded-full ${
                                    isDark 
                                      ? 'bg-blue-900/30 text-blue-300 border border-blue-700' 
                                      : 'bg-blue-50 text-blue-700 border border-blue-200'
                                  }`}
                                >
                                  {highlight}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Toggle Button */}
                    <button 
                      onClick={() => toggleCardExpansion(destination.id)}
                      className={`w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-lg font-medium transition-all duration-200 mt-4 ${
                        isDark
                          ? 'bg-[color:var(--greenish)] hover:bg-lime-600 text-white dark:hover:text-black'
                          : 'bg-[color:var(--greenish)] hover:bg-lime-600 text-white dark:hover:text-black'
                      } group-hover:shadow-lg`}
                    >
                      <span>{isExpanded ? 'Show Less' : 'Read More'}</span>
                      {isExpanded ? (
                        <ChevronUp className="h-4 w-4 transition-transform" />
                      ) : (
                        <ChevronDown className="h-4 w-4 transition-transform" />
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          
          {filteredDestinations.length === 0 && (
            <div className="text-center py-12">
              <Globe className={`h-16 w-16 mx-auto mb-4 ${
                isDark ? 'text-gray-600' : 'text-gray-400'
              }`} />
              <h3 className="text-xl font-semibold mb-2">No destinations found</h3>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default DestinationPage;