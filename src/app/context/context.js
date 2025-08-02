'use client';

import React, { createContext, useState, useEffect } from 'react';

// Create Context
export const LoggedDataContext = createContext();

// Provider Component
export const LoggedDataProvider = ({ children }) => {
  const [loggedUserData, setLoggedUserData] = useState(null); // Store user data
 

  // Function to update user data globally and persist it in localStorage
  // const updateLoggedUserData = (data) => {
  //   setLoggedUserData(data);

  //   // Save data to localStorage
  //   if (data) {
  //     localStorage.setItem('user', JSON.stringify(data));
  //   } 

  // console.log('Logged-in user data stored in context and localStorage:', data);  
  // };

  const updateLoggedUserData = (data, remember = false) => {
  setLoggedUserData(data);

  const storage = remember ? localStorage : sessionStorage;

  if (data) {
    storage.setItem('user', JSON.stringify(data));
  }

  console.log('User data stored in:', remember ? 'localStorage' : 'sessionStorage');
};


  // Load user data from localStorage when app loads
  // useEffect(() => {
  //   const storedUser = localStorage.getItem('user');
  //   if (storedUser) {
  //     setLoggedUserData(JSON.parse(storedUser)); // Restore context state from localStorage
  //     console.log('User data restored from localStorage:', JSON.parse(storedUser));
  //   }
  // }, []);

  useEffect(() => {
  const storedUser =
    localStorage.getItem('user') || sessionStorage.getItem('user');
  if (storedUser) {
    setLoggedUserData(JSON.parse(storedUser));
    console.log('User data restored from storage:', JSON.parse(storedUser));
  }
}, []);



  return (
    <LoggedDataContext.Provider value={{  setLoggedUserData , loggedUserData, updateLoggedUserData}}>
      {children}
    </LoggedDataContext.Provider>
  );
};