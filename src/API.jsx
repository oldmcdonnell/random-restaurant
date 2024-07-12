import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL


// Function to fetch data from the API
async function fetchMenuData() {
    const menuDataLink = `${baseUrl}/food/`;
    try {
        const response = await axios.get(menuDataLink);
        return response.data;
    } catch (error) {
        console.error('Error fetching data from API: ', error);
        return [];
    }
}

// Wrapper function to call the fetch function and log the result
async function API() {
    const result = await fetchMenuData();
    console.log('API result:', result);
    return result;
}

export default API;
//vercel version 