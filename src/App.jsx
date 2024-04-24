import { Link } from "react-router-dom"
import API from './API'

const Title = () => {
  return (
    <h1>
      Hello World!
    </h1>
  )
}

function App() {
  API()
  return (
    <div className="p-5">
      <Link to='/about'>About</Link>
      <Title />
    </div>
  )
}


export default App
