import { ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";
import React from "react";

const currentTime = new Date();
const hours = currentTime.getHours().toString().padStart(2, '0');

const options = [
    {
      label: "Tapas",
      value: "Tapas",
      id: 1,
    },
    {
      label: "Edible",
      value: "Edible",
      id: 2,
    },
    {
      label: "Gruel",
      value: "Gruel",
      id: 3,
    },
    {
      label: "Alcohol",
      value: "Alcohol",
      id: 4,
    },
  ];

    const CategorySelect = (props)=> {
        console.log('Prpos in cat select',props)
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