import React from 'react';
import { Refrigerator, Wind, Waves, Car, Coffee, Tv, Wifi } from 'lucide-react';

const AmenityItem: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => {
  return (
    <div className="flex items-center space-x-3 mb-3">
      <div className="text-lime-500">{icon}</div>
      <span className="text-gray-700 dark:text-gray-300">{text}</span>
    </div>
  );
};

const AmenitiesCard: React.FC = () => {
  return (
    <div className="bg-white dark:bg-black/40 rounded-lg shadow-md p-6 overflow-hidden border">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Amenities</h2>
      <div className="space-y-2 dark:text-gray-200">
        <AmenityItem icon={<Refrigerator size={20} />} text="Refrigerator and water" />
        <AmenityItem icon={<Wind size={20} />} text="Air Conditioner Facilities" />
        <AmenityItem icon={<Waves size={20} />} text="Toilets are always available" />
        <AmenityItem icon={<Car size={20} />} text="Parking" />
        <AmenityItem icon={<Coffee size={20} />} text="Room Service" />
        <AmenityItem icon={<Tv size={20} />} text="Television" />
        <AmenityItem icon={<Wifi size={20} />} text="Wi-Fi" />
      </div>
    </div>
  );
};

export default AmenitiesCard;