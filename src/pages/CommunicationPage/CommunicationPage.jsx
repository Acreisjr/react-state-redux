import React, { useState } from 'react';
import { useUser } from '../../context/UserContext';
import './CommunicationPage.css';

const CommunicationPage = () => {
  const { user, updateEmail, updatePhoneNumber } = useUser();
  const [newEmail, setNewEmail] = useState(user.email);
  const [newPhoneNumber, setNewPhoneNumber] = useState(user.phoneNumber);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEmail(newEmail);
    updatePhoneNumber(newPhoneNumber);
  };

  return (
    <div className="communication-container">
      <h1>Communication Settings</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
        />
        <label>Phone Number:</label>
        <input
          type="tel"
          value={newPhoneNumber}
          onChange={(e) => setNewPhoneNumber(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CommunicationPage;
