import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: "123456",
  fullName: "John Doe",
  username: "johndoe",
  email: "johndoe@example.com",
  phoneNumber: "+1-234-567-890",
  address: {
    street: "123 Main Street",
    city: "Springfield",
    state: "IL",
    postalCode: "62704",
    country: "United States",
  },
  profilePictureUrl: "https://example.com/profile-pictures/johndoe.jpg",
  bio: "Frontend Developer passionate about React and TypeScript. Loves hiking and photography.",
  preferences: {
    language: "en-US",
    theme: "dark",
    notifications: {
      email: true,
      sms: false,
      push: true,
    },
  },
  roles: ["user", "admin"],
  dateOfBirth: "1990-01-15",
  createdAt: "2020-05-01T10:30:00Z",
  lastLogin: "2025-01-08T12:15:00Z",
  socialMedia: {
    twitter: "@johndoe",
    linkedin: "https://www.linkedin.com/in/johndoe",
    github: "https://github.com/johndoe",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateEmail(state, action) {
        state.email = action.payload;
      },
      updatePhoneNumber(state, action) {
        state.phoneNumber = action.payload;
      },
      updateFullName(state, action) {
        state.fullName = action.payload;
      },
      updateBio(state, action) {
        state.bio = action.payload;
      },
  },
});

export const { updateEmail, updatePhoneNumber, updateFullName, updateBio } = userSlice.actions;

export default userSlice.reducer;
