import axios from "axios";

import { BASE_URL } from "../utils/api_base_url_configration";

// review list api

export const reviewListServ = async () => {
  try {
    const response = await axios.post(BASE_URL + "doctor-review/list" );
    return response.data;
  } catch (error) {
    console.error("review list error:", error);
    throw error;
  }
};