import React from 'react';

const Description: React.FC = () => {
  return (
    <div className="bg-white dark:bg-black/40 rounded-lg shadow-md p-6 overflow-hidden border">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Description</h2>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        Our rooms were created with you, our guest in mind, a tranquil setting and utilizing harmonious design elements to make you feel at home. 
        All rooms include individually controlled air conditioned, en-suite with hot shower and a work-desk. 
        All rooms are serviced daily.
      </p>
    </div>
  );
};

export default Description;