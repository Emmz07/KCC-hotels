import React from 'react';
import Description from './Description';
import AmenitiesCard from './AmenitiesCard';
import ServiceCard from './ServiceCard';
import BookingButton from './BookingButton';
import RoomImageSection from './RoomImageSection';

const RoomDetails: React.FC = () => {
  return (
    <div className="py-20 mt-9 px-4 bg-background mb-9">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Description />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AmenitiesCard />
            <ServiceCard />
          </div>
          
          
          <div className="flex justify-center pt-6">
            <BookingButton />
          </div>
        </div> 
        
        <RoomImageSection />
      </div>
    </div>
  );
};

export default RoomDetails;