import React from 'react';
import './HomePage.css';
import { useUser } from '../../context/UserContext'; 

function HomePage() {
  const { user } = useUser();

  return (
    <div className="home-container">
      <div className="user-info">
        <h2>{user.fullName}</h2>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phoneNumber}</p>
      </div>
      <div className="main-content">
        <div className="card">{user.bio}</div>
      </div>
      <div className="extra-info">
        <h3>Social Media</h3>
        <p>Twitter: {user.socialMedia?.twitter || 'N/A'}</p>
        <p>GitHub: {user.socialMedia?.github || 'N/A'}</p>
        <p>
          Address: {user.address?.street}, {user.address?.city} - {user.address?.state}, {user.address?.country}
        </p>
      </div>
    </div>
  );
}

export default HomePage;
