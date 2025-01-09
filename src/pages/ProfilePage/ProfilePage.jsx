import React, { useState } from 'react';
import { useUser } from '../../context/UserContext';
import './ProfilePage.css';

const ProfilePage = () => {
  const { user, updateFullName, updateBio } = useUser();
  const [newFullName, setNewFullName] = useState(user.fullName);
  const [newBio, setNewBio] = useState(user.bio);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateFullName(newFullName);
    updateBio(newBio);
  };

  return (
    <div className="profile-container">
      <h1>Profile Settings</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>Full Name:</label>
        <input
          type="text"
          value={newFullName}
          onChange={(e) => setNewFullName(e.target.value)}
        />
        <label>Bio:</label>
        <textarea
          value={newBio}
          onChange={(e) => setNewBio(e.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProfilePage;
