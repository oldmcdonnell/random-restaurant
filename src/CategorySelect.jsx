import { ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";
import React from "react";

const currentTime = new Date();
const hours = currentTime.getHours().toString().padStart(2, '0');

const options = [
    {
      label: "Appetizer",
      value: "Appetizer",
      key: "Appetizer",
    },
    {
      label: "Breakfast",
      value: "Breakfast",
      key: "Breakfast",
    },
    {
      label: "Lunch",
      value: "Lunch",
      key: "Lunch",
    },
    {
      label: "Dinner",
      value: "Dinner",
      key: "Dinner",
    },
  ];

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
        return (
            <div id="CategorySelect">
                <div className="select-container">
                    <select value={this.state.meal} onChange={this.handleChange}>
                    {options.map((option) => (
                        <option value={option.value}>{option.label}</option>
                    ))}
                    </select>
                </div>
            </div>
        );
    }
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