import axios from "axios";

import { BASE_URL } from "../utils/api_base_url_configration";

// booking create api

export const appointmentCreateServ = async (formData) => {
  try {
    const response = await axios.post(BASE_URL + "appointment/create",formData );
    return response.data;
  } catch (error) {
    console.error("appointment Error:", error);
    throw error;
  }
};

// booking list api 

export const bookingListServ = async (id) => {
  try {
    const response = await axios.get(BASE_URL + `appointment/user/${id}` );
    return response.data;
  } catch (error) {
    console.error("appointment list error:", error);
    throw error;
  }
};

// appointent details api

export const appointmentDetailsServ = async (id) => {
  try {
    const response = await axios.get(BASE_URL + `appointment/details/${id}` );
    return response.data;
  } catch (error) {
    console.error("appointment details error:", error);
    throw error;
  }
};


// support api

export const supportContactServ = async (formData) => {
  try {
    const response = await axios.post(BASE_URL + "support/add-contact-query", formData );
    return response.data;
  } catch (error) {
    console.error("Contact Error:", error);
    throw error;
  }
};
