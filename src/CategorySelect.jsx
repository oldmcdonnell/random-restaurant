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