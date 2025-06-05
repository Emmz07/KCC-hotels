import React from 'react';

const PricingTable: React.FC = () => {
  const prices = {
    Mon: "$120",
    Tue: "$120",
    Wed: "$120",
    Thu: "$150",
    Fri: "$180",
    Sat: "$200",
    Sun: "$180"
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            {Object.keys(prices).map((day) => (
              <th 
                key={day} 
                className="px-4 py-3 text-center text-sm font-medium text-gray-700 bg-gray-50"
              >
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            {Object.values(prices).map((price, index) => (
              <td 
                key={index} 
                className="px-4 py-3 text-center text-gray-900 font-medium"
              >
                {price}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PricingTable;