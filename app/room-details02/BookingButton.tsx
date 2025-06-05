import React from 'react';

const BookingButton: React.FC = () => {
  return (
    <button 
      className="inline-block text-base text-black font-bold text-sm border-lime-500 bg-lime-400 transition-colors duration-700 border-white hover:bg-lime-500 hover:text-white px-6 py-3 rounded-md"
    >
      Book Now
    </button>
  );
};

export default BookingButton;