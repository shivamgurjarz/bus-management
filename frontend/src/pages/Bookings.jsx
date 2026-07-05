import React from 'react';

function Bookings() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">My Bookings</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <p className="text-gray-500">No bookings yet</p>
      </div>
    </div>
  );
}

export default Bookings;
