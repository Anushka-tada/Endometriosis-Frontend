import axios from "axios";

import { BASE_URL } from "../utils/api_base_url_configration";

// sign up api

export const signUp = async (formData) => {
  try {
    const response = await axios.post(BASE_URL + "user/sign-up",formData );
    return response.data;
  } catch (error) {
    console.error("Signup Error:", error);
    throw error;
  }
};

// login api
export const loginServ = async (formData) => {
  try {
    const response = await axios.post(BASE_URL + "user/login",formData );
    return response.data;
  } catch (error) {
    console.error("login error:", error);
    throw error;
  }
};


// user details update
export const userDetailsUpdateServ = async (formData , token) => {
  try {
    const response = await axios.put(BASE_URL + "user/update",formData , {
    headers: {
      Authorization: `Bearer ${token}`,  // <-- very important
    },
  }
 );
    return response.data;
  } catch (error) {
    console.error("login error:", error);
    throw error;
  }
};

//change password

export const changePasswordServ = async (formData , token) => {
  try {
    const response = await axios.post(BASE_URL + "user/change-password", formData , {
    headers: {
      Authorization: `Bearer ${token}`,  
    },
  });
    return response.data;
  } catch (error) {
    console.error("Signup Error:", error);
    throw error;
  }
};

// forget password 

export const forgotPasswordServ = async (formData) => {
  try {
    const response = await axios.post(BASE_URL + "user/forgot-password", formData );
    return response.data;
  } catch (error) {
    console.error("Signup Error:", error);
    throw error;
  }
};

