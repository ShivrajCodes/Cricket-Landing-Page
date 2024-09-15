import React, { useState } from 'react';
import formImage from '../assets/formimg.jpeg'; 

const RegisterTournaments = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    format: '5 over per side',
    players: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('Something went wrong');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold text-center">Thank you, we will contact you soon❤️❤️!</h1>
      </div>
    );
  }

  return (
    <div className="w-full h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="relative w-full h-full bg-white flex flex-col md:flex-row rounded-none shadow-lg border-8 border-white">
        {/* Left Image Section */}
        <div className="w-full md:w-1/2 h-full bg-[#ffe5c8] flex items-center justify-center">
          <img
            src={formImage}
            alt="Form"
            className="w-full h-full object-cover opacity-70"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 h-full p-8 flex flex-col">
          {/* Greeting Text */}
          <h1 className="text-4xl font-bold mb-4">Hey, Hello 👋</h1>
          <h2 className="text-lg mb-6">
            Welcome to our onboarding page, please enter your required details in the given form below, and BOOM! You are on the verge of some enthralling action.
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {error && <div className="text-red-500">{error}</div>}
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="p-2 border rounded"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone No"
              value={formData.phone}
              onChange={handleChange}
              className="p-2 border rounded"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="p-2 border rounded"
              required
            />
            <select
              name="format"
              value={formData.format}
              onChange={handleChange}
              className="p-2 border rounded"
            >
              <option value="5 over per side">5 over per side</option>
              <option value="10 over per side">10 over per side</option>
              <option value="20 over per side">20 over per side</option>
              <option value="50 over per side">50 over per side</option>
              <option value="Test Match">Test Match</option>
            </select>
            <input
              type="number"
              name="players"
              placeholder="Number of Players"
              value={formData.players}
              onChange={handleChange}
              className="p-2 border rounded"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded-lg self-center w-40"
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterTournaments;
