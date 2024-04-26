import healthcode from '../img/commonwealth_logo.jpg'

function About() {
  return (
    <div className="container">
      <div className="p-3"></div>
      <div className="col-4 mx-auto p-bottom-3">
      <p>Welcome to a Lexington place that has "food"</p>
      <p>We are generally located close at 348 E Main St. Lexington Ky</p>
      <p>To Make a reservation call my beeper at 555-123-4578 and leave your phone number</p>
      <p>Feel free to bring your own meat from the side of the road and we will cook it!</p>
      </div>
      <div><img src={healthcode}></img></div>
    </div>
  )
}


export default About