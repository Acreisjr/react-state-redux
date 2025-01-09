import React from 'react';
import './HomePage.css';
import { useSelector } from 'react-redux'

function HomePage() {

    const user = useSelector((state) => state.user)
    console.log(user);
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
            <p>Twitter: {user.socialMedia.twitter}</p>
            <p>GitHub: {user.socialMedia.github}</p>
            <p>Address: {user.address.street}, {user.address.city} - {user.address.state}, {user.address.country}</p>
          </div>
        </div>
      );
}

export default HomePage;
