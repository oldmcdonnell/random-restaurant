//import Comments from "./comments/Comments"
//import Comments from "./comments/Comments";

function MyForm() {
  const [formData, setFormdata] = useState({
    name: "",
    review: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormdata({...formData, [name]: value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    //submit the form data

    alert(`Submitted data: ${JSON.stringify(formData)}`)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        />
        <input
        type="text"
        name="review"
        placeholder="Review"
        value={formData.review}
        onChange={handleChange}
        />
        <button type="submit">Submit</button>
    </form>
  )
}

const App = () => {
  return (
    <div>
      <h1>Hello monsterlessons</h1>
    </div>
  );
};

export default App;[]