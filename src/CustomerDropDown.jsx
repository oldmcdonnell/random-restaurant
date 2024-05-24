import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CustomerDropDown = ({ selectedCustomer, setSelectedCustomer }) => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    // Fetch food items from the API using Axios
    axios.get('http://127.0.0.1:8000/customers/')
      .then(response => {
        setCustomers(response.data);
        console.log(' Customers ', response)
      })
      .catch(error => {
        console.error('Error fetching customer:', error);
      });
  }, []);

  const handleChange = (event) => {
    setSelectedCustomer(event.target.value);
    console.log(event.target.value)
  };

  return (
    <div>
      <label htmlFor="customer-dropdown">Select Customer:</label>
      <select id="customer-dropdown" value={selectedCustomer} onChange={handleChange}>
        <option value="" disabled>Select a customer</option>
        {customers.map(customer => (
          <option key={customer.id} value={customer.id}>
            {customer.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomerDropDown;