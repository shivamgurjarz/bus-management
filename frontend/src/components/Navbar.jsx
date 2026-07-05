import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">🚌 Bus Management</Link>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-blue-200">Home</Link></li>
          <li><Link to="/dashboard" className="hover:text-blue-200">Dashboard</Link></li>
          <li><Link to="/bookings" className="hover:text-blue-200">My Bookings</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
