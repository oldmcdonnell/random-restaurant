import { useEffect, useState } from "react";
import axios from "axios";
import CustomerDropdown from "./CustomerDropDown";


// const ReviewsList = ({ reviews }) => {
//   return reviews.length > 0 ? (
//     <div>
//       <h2>Customer Reviews</h2>
//       {reviews.map(review => {
//         return (
//           <div key={review.id}>{review.food} - {review.rating} - {review.review} </div>
//         )
//       })}
//     </div>
//   ) : null
// }


const ReviewsList = ({ reviews }) => {
  return reviews.length > 0 ? (
    <div>
      {reviews.map(review => {
        return (
          <>
          <div key={review.id}>{review.food} - {review.rating} - {review.review} </div>
          </>
        )
      })}
    </div>
  ) : (
    <div> Loading… </div>
  )
}


const NewReview = ({ getReviews }) => {
  const [review, setReview] = useState('')

  const createReview = () => {
    axios.post('http://127.0.0.1:8000/customer-reviews/', {
      review: review
    })
    .then(response => {
      console.log('review ', response)
      if (response.status == 200) {
        getReviews()
      }
    })
    .catch(error => console.log('ERROR: ', error))
  }
return (
  <div style={({ marginTop: 20 })}>
    <h2> Make a Complaint</h2>
    <input
    onChange={e => setReview(e.target.value)}
    placeholder="Enter review here"
    value={review}/>

  </div>

)

}

const App = () => {
  const [reviews, setReviews ] = useState([])

  useEffect(() => {
    getReviews()
  }, [])


  const getReviews = () => {
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
          <CustomerDropdown />
          <ReviewsList reviews={reviews} />
        </div>
    </div>
  );
};

export default App;