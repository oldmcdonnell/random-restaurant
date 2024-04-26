import { ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";
import React from "react";

const currentTime = new Date();
const hours = currentTime.getHours().toString().padStart(2, '0');

const options = [
    {
      label: "Appetizer",
      value: "Appetizer",
      id: 1,
    },
    {
      label: "Breakfast",
      value: "Breakfast",
      id: 2,
    },
    {
      label: "Lunch",
      value: "Lunch",
      id: 3,
    },
    {
      label: "Dinner",
      value: "Dinner",
      id: 4,
    },
    {
      label: "Drink",
      value: "Drink",
      id: 5,
    },
  ];


/*-
class CategorySelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            meal: "Appetizer",
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
    console.log("Meal Selected", e.target.value);
    this.setState({ meal: e.target.value })
    }

    render() {
        -*/

    const CategorySelect = (props)=> {
        console.log(props)
        const handleChange = ((e) => {
            console.log("Meal Selected", e.target.value);
            props.setCatSelect({ meal: e.target.value })
            })

        return (
            <div id="CategorySelect">
                <div className="select-container">
                    <select value={props.catSelect.meal} onChange={handleChange}>
                    {options.map((option) => (
                        <option key={option.id} value={option.value}>{option.label}</option>
                    ))}
                    </select>
                </div>
            </div>
        );
    }

  
export default CategorySelect;

/*-
if (hours < 11){
        return "Breakfast"
    } else if ( hours > 11 && hours < 5){
        return "Lunch" 
    } else {
        return "Dinner"
    }



const catOptions = [

]

const CategoryButton = () => {
    //Appetizer Breakfast Dinner Lunch
    const [category, setCategory] = React.useState()
    return(
        <div className="relative m-4">
        <Dropdown>
            <Dropdown.Toggle variant="success" id="categoryButton">
                Category
            </Dropdown.Toggle>
        </Dropdown>
        </div>
    )
}

export default CategoryButton

-*/