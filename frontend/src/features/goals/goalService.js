// fileFunction => {strictly for sending http request and sending data back and setting any data in localStorage}

import axios from "axios";

const API_URL = "/api/goals/";

const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorizattion: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, goalData, config);
  return response.data;
};

const goalService = {
  createGoal,
};

export default goalService;
