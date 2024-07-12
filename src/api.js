import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000';

export const fetchCustomers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/customers/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching customers:', error);
    return [];
  }
};

export const fetchFoodItems = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/food/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching food items:', error);
    return [];
  }
};

export const createOrder = async (orderData) => {
  try {
    const response = await axios.post(`${BASE_URL}/orders/`, orderData);
    return response.data;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};
