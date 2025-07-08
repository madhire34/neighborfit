import axios from 'axios';

// ✅ Use the deployed backend URL
const API_URL = 'https://neighborfit-cwx9.onrender.com';

export const fetchNeighborhoods = async () => {
  try {
    const response = await axios.get(`${API_URL}/neighborhoods`);
    return response.data;
  } catch (error) {
    console.error('Error fetching neighborhoods:', error);
    throw error;
  }
};

export const matchNeighborhood = async (userPreferences) => {
  try {
    const response = await axios.post(`${API_URL}/match`, userPreferences);
    return response.data;
  } catch (error) {
    console.error('Error matching neighborhood:', error);
    throw error;
  }
};
