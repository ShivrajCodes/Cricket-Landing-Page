import React, { useState } from 'react';

const RegisterTournaments = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    format: '5 over per side',
    players: '',
    username: '',
    password: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log(formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return <div>Thank you, we will get in touch with you shortly.</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="p-2 border"
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone No"
        value={formData.phone}
        onChange={handleChange}
        className="p-2 border"
        required
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
        className="p-2 border"
        required
      />
      <select
        name="format"
        value={formData.format}
        onChange={handleChange}
        className="p-2 border"
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
        className="p-2 border"
        required
      />
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        className="p-2 border"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="p-2 border"
        required
      />
      <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">
        Submit
      </button>
    </form>
  );
};

export default RegisterTournaments;
