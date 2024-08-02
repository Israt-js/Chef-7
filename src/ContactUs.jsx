import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    // Handle form submission, e.g., send data to an API
    console.log('Form submitted:', formData);
    // Optionally, reset form fields after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full bg-white p-10 rounded-3xl shadow-2xl transform transition-transform duration-300 hover:scale-105">
        <div className="text-center mb-8">
          <h2 className="text-5xl font-extrabold text-gray-900 tracking-wide mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-700">
            We'd love to hear from you! Fill out the form below and we'll respond as soon as we can.
          </p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition duration-300 ease-in-out"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition duration-300 ease-in-out"
                placeholder="john.doe@example.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
              className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition duration-300 ease-in-out"
              placeholder="Your message..."
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-3 px-6 border border-transparent text-lg font-semibold rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
