import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateEmail, updatePhoneNumber } from '../../features/user/userSlice';
import './CommunicationPage.css';

const CommunicationPage = () => {
  const { email, phoneNumber } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [newEmail, setNewEmail] = useState(email);
  const [newPhoneNumber, setNewPhoneNumber] = useState(phoneNumber);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateEmail(newEmail));
    dispatch(updatePhoneNumber(newPhoneNumber));
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
