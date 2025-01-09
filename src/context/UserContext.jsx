import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: "123456",
    fullName: "John Doe",
    bio: "Frontend Developer passionate about React and TypeScript.",
    email: "johndoe@example.com",
    phoneNumber: "+1-234-567-890",
    socialMedia: {
      twitter: "@johndoe",
      linkedin: "https://www.linkedin.com/in/johndoe",
      github: "https://github.com/johndoe",
    },
    address: {
      street: "123 Main Street",
      city: "Springfield",
      state: "IL",
      postalCode: "62704",
      country: "United States",
    },
  });

  const updateEmail = (email) => setUser((prev) => ({ ...prev, email }));
  const updatePhoneNumber = (phoneNumber) =>
    setUser((prev) => ({ ...prev, phoneNumber }));
  const updateFullName = (fullName) =>
    setUser((prev) => ({ ...prev, fullName }));
  const updateBio = (bio) => setUser((prev) => ({ ...prev, bio }));

  return (
    <UserContext.Provider
      value={{ user, updateEmail, updatePhoneNumber, updateFullName, updateBio }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
