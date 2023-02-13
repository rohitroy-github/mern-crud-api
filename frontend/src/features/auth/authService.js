// fileFunction => {strictly for sending http request and sending data back and setting any data in localStorage}

import axios from "axios";

const API_URL = "/api/users/";

// registerUserFunction
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const authService = {
  register,
};

export default authService;
