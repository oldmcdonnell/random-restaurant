import React, { useEffect, useState } from 'react';

const CustomerDropdown = () => {
    const [customers, setCustomers] = useState([]);
    const [selectedCustomer, setSelectedCustomer] = useState('');
  
    useEffect(() => {
      // Fetch customers from the API
      fetch('http://127.0.0.1:8000/customers/')
        .then(response => response.json())
        .then(data => setCustomers(data))
        .catch(error => console.error('Error fetching customers:', error));
    }, []);
  
    const handleChange = (event) => {
      setSelectedCustomer(event.target.value);
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
  
  export default CustomerDropdown;