import React from 'react';

const BookingButton: React.FC = () => {
  return (
    <button 
      className="inline-block text-base text-white font-bold text-sm border-[color:var(--greenish)] bg-[color:var(--greenish)] transition-colors duration-700 border-white hover:bg-[color:var(--limeish)] hover:text-black px-6 py-3 rounded-md"
    >
      Book Now
    </button>
  );
};

export default BookingButton;