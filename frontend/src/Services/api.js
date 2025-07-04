import axios from 'axios';

// Replace with your actual backend URL
const API_URL = 'http://localhost:5000'; 

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