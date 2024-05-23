import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FoodDropdown = () => {
  const [foods, setFoods] = useState([]);
  const [selectedFood, setSelectedFood] = useState('');

  useEffect(() => {
    // Fetch food items from the API using Axios
    axios.get('http://127.0.0.1:8000/food/')
      .then(response => {
        setFoods(response.data);
      })
      .catch(error => {
        console.error('Error fetching food items:', error);
      });
  }, []);

  const handleChange = (event) => {
    setSelectedFood(event.target.value);
  };

  return (
    <div>
      <label htmlFor="food-dropdown">Select Food:</label>
      <select id="food-dropdown" value={selectedFood} onChange={handleChange}>
        <option value="" disabled>Select a food item</option>
        {foods.map(food => (
          <option key={food.id} value={food.id}>
            {food.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FoodDropdown;