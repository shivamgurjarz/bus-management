import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchBuses();
  }, []);

  const fetchBuses = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/api/buses');
      setBuses(response.data);
    } catch (error) {
      console.error('Error fetching buses:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {buses.length > 0 ? (
            buses.map(bus => (
              <div key={bus._id} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold">{bus.busName}</h3>
                <p>Number: {bus.busNumber}</p>
                <p>Capacity: {bus.capacity}</p>
              </div>
            ))
          ) : (
            <p>No buses available</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
