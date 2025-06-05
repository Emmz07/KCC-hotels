import React from 'react';
import { ClipboardCheck, Minimize as Swimming, Car, Wifi, Tv } from 'lucide-react';

const ServiceItem: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => {
  return (
    <div className="flex items-center space-x-3 mb-3">
      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center">
        <div className="text-lime-500">{icon}</div>
      </div>
      <span className="text-gray-700 dark:text-gray-300">{text}</span>
    </div>
  );
};

const ServiceCard: React.FC = () => {
  return (
    <div className="bg-white dark:bg-black/40 rounded-lg shadow-md p-6 overflow-hidden border">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Room Services</h2>
      <div className="space-y-2">
        <ServiceItem icon={<ClipboardCheck size={16} />} text="Daily Cleaning" />
        <ServiceItem icon={<Swimming size={16} />} text="Telephone Service" />
        <ServiceItem icon={<Car size={16} />} text="Free Parking" />
        <ServiceItem icon={<Wifi size={16} />} text="Free In-room WiFi" />
        <ServiceItem icon={<Tv size={16} />} text="Cable TV" />
      </div>
    </div>
  );
};

export default ServiceCard;