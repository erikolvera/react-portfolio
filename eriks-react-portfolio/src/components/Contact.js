import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="h-screen max-w-lg mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">Contact Me!</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2">
            Message
          </label>
          <textarea
            id="message"
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            rows="4"
            value={message}
            onChange={handleMessageChange}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
