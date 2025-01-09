import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFullName, updateBio } from '../../features/user/userSlice';
import './ProfilePage.css';

const ProfilePage = () => {
  const { fullName, bio } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [newFullName, setNewFullName] = useState(fullName);
  const [newBio, setNewBio] = useState(bio);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateFullName(newFullName));
    dispatch(updateBio(newBio));
  };

  return (
    <div className="profile-container">
      <h1>Hello {fullName.split(" ")[0]}!</h1>
      <h2>Profile Settings</h2>
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
