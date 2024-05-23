import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import FoodDropdown from "./FoodDropDown"
import CustomerDropdown from "./CustomerDropDown"

const Title = () => {
  return (
    <h1>
      React Jango test
    </h1>
  )
}





function Order() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    getFood()

  }, [])

  const getFood = () => {
    console.log('test')
    axios.get('http://127.0.0.1:8000/food/')
    .then(response => {
      setOrders(response.data)
      console.log('response', response)
    })
    .catch(error => console.log('Error: ', error))
  }

  return (
    <div className="p-5">
      {/* <FoodList food={food}/> */}
      <FoodDropdown />
      <CustomerDropdown />
    </div>
  )
}


export default Order
