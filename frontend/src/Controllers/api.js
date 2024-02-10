// apiService.js
import axios from 'axios';
import { ENDPOINTS } from './constants';

const api = {
    createUser: async (userData) => {
        try {


            console.log("endpoint")
            console.log(ENDPOINTS.CREATE_USER)
            console.log("endpoint")
            console.log("userData.................")
            console.log(userData)
            console.log("userData.................")
            const response = await axios.post(ENDPOINTS.CREATE_USER, userData);
            return response.data; // You might want to return the response or handle it accordingly
        } catch (error) {
            throw error; // You might want to handle errors in a specific way
        }
    },
    // Add more API calls as needed


    allUser: async () => {
        try {
            const response = await axios.get(ENDPOINTS.ALL_USER);
            return response.data; // You might want to return the response or handle it accordingly
        } catch (error) {
            throw error; // You might want to handle errors in a specific way
        }
    },
};

export default api;
