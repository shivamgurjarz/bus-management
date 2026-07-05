import React from 'react';

function Home() {
  return (
    <div className="container mx-auto p-8">
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-12 rounded-lg text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Bus Management System</h1>
        <p className="text-xl mb-6">Book your tickets online with ease</p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100">
          Book Now
        </button>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-2">🚌 Easy Booking</h3>
          <p>Book your bus tickets online in just a few clicks</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-2">💳 Secure Payment</h3>
          <p>Multiple payment options with secure transactions</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-2">📱 Mobile App</h3>
          <p>Access your bookings anytime, anywhere</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
