import React from 'react';

const Description: React.FC = () => {
  return (
    <div className="bg-white dark:bg-black/40 rounded-lg shadow-md p-6 overflow-hidden border">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Description</h2>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        Our Deluxe With Balcony offers a perfect blend of comfort and luxury, featuring a spacious layout, modern amenities, and elegant decor. Enjoy a restful night's sleep on our plush king-size bed, and take advantage of the in-room facilities designed to make your stay as enjoyable as possible.
      </p>
    </div>
  );
};

export default Description;