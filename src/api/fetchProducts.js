const API_FETCH = 'https://dummyjson.com/products';
// const API_ENDPOINT = 'https://api.apify.com/v2/actor-tasks/<taskId>/runs/last/dataset/items?token=<your-api-token>';

export const fetchProducts = async () => {
  try {
    const response = await fetch(API_FETCH);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
      const data = await response.json();
      console.log(data);
    return data; // Adjust this if the API response structure is different
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};
