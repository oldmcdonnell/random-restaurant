import { useEffect, useState } from "react";
import { fetchCustomers, fetchFoodItems, createOrder } from "./api";
import FoodDropDown from "./FoodDropDown";
import CustomerDropDown from "./CustomerDropDown";

function Order() {
  const [customers, setCustomers] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState('');
  const [selectedFood, setSelectedFood] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const customersData = await fetchCustomers();
      setCustomers(customersData);

      const foodData = await fetchFoodItems();
      setFoodItems(foodData);
    };

    fetchData();
  }, []);

  const addOrderItem = () => {
    if (!selectedFood) {
      alert("Please select a food item.");
      return;
    }

    const foodItem = foodItems.find(item => item.id === parseInt(selectedFood));
    if (foodItem) {
      setOrderItems([...orderItems, { food: foodItem.id, title: foodItem.title, quantity }]);
      setSelectedFood('');
      setQuantity(1);
    }
  };

  const submitOrder = async () => {
    if (!selectedCustomer) {
      alert("Please select a customer.");
      return;
    }

    if (orderItems.length === 0) {
      alert("Please add at least one food item to the order.");
      return;
    }

    const orderData = {
      customer: selectedCustomer,
      items: orderItems.map(item => ({ food: item.food, quantity: item.quantity }))
    };

    try {
      const newOrder = await createOrder(orderData);
      console.log('Order created:', newOrder);
      setSelectedCustomer('');
      setOrderItems([]);
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };

  return (
    <div className="p-5">
      <div>
        <CustomerDropDown customers={customers} setSelectedCustomer={setSelectedCustomer} />
        <FoodDropDown foodItems={foodItems} setSelectedFood={setSelectedFood} />
        <input
          type="number"
          value={quantity}
          onChange={e => setQuantity(e.target.value)}
          min="1"
        />
        <button onClick={addOrderItem}>Add Item</button>
      </div>
      <div>
        <h2>Order Items</h2>
        {orderItems.map((item, index) => (
          <div key={index}>
            {item.title} - Quantity: {item.quantity}
          </div>
        ))}
      </div>
      <button onClick={submitOrder}>Submit Order</button>
    </div>
  );
}

export default Order;
