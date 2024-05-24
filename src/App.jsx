import { useEffect, useState } from "react";
import axios from "axios";
import CustomerDropDown from "./CustomerDropDown";
import FoodDropDown from "./FoodDropDown"
import { compile } from "sass";

const ReviewsList = ({ reviews }) => {
  return reviews.length > 0 ? (
    <div>
      {reviews.map(review => {
        return (   
          <div key={review.id}><h3>{review.customer_name} - {review.food_name} </h3>
          <p> {review.review} </p> </div>
        )
      })}
    </div>
  ) : (
    <div> Loading… </div>
  )
}

const NewReview = ({ getReviews, selectedFood, selectedCustomer }) => {
  const [review, setReview] = useState('')

  const createReview = () => {
    console.log('parameters ', selectedCustomer, selectedFood, review);
    axios.post('http://127.0.0.1:8000/customer-reviews/', {
      customer: selectedCustomer,
      food: selectedFood,
      rating: 0,
      review: review,
    })
    .then(response => {
      console.log('review: ', response)
      // if (response.status === 200) {
        getReviews()
        setReview('')
      // }
    })
    .catch(error => console.log('ERROR: ', error))
  }
return (
  <div style={{ marginTop: 20 }}>
    <h2> Make a Complaint</h2>
    <input
      onChange={e => setReview(e.target.value)}
      placeholder="Enter review here"
      value={review}
    />
    <button onClick={() => createReview()}> 
    Submit Complaint 
    </button>
  </div>
)
}

const App = () => {
  const [selectedFood, setSelectedFood] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState('');
  const [reviews, setReviews ] = useState([])



  useEffect(() => {
    getReviews()
  }, [])


  const getReviews = () => {
    console.log('get reviews list pulled ')
    axios.get('http://127.0.0.1:8000/customer-reviews/')
      .then(response => {
        setReviews(response.data)
        console.log('data', response.data)
      })
    .catch(error => console.error('ERROR: ', error))
  }



  return (
    <div className="container">
        <div className="col-4 mx-auto">
          <h4>Complaints</h4>
        </div>
        <div className="col-4 mx-auto">
          <ReviewsList reviews={reviews} />
          <CustomerDropDown selectedCustomer={selectedCustomer} setSelectedCustomer={setSelectedCustomer} />
          <FoodDropDown selectedFood={selectedFood} setSelectedFood={setSelectedFood} />
          <NewReview selectedCustomer = {selectedCustomer} selectedFood={selectedFood} getReviews={getReviews} />
        </div>
    </div>
  );
};

export default App;