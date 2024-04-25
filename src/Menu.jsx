import API from "./API";
import CategorySelect from "./CategorySelect"
import { useEffect, useState } from 'react';


const listItemsFromAPI = ()=>{
    const listItems = API()
    //console.log(result)
   // console.log('more exact result',result.data[0])
}

function Menu() {
    const [foodItemList, setFoodItemList] = useState([])
    useEffect(() => {
        API(setFoodItemList)
    }, [])
    let catVal = "Breakfast"
    let spicyLevel = "3"
    console.log('list', foodItemList)
    let foodCat = foodItemList.filter(x=> x.category===catVal)
    
    //console.log('test', foodCat[0]?.id)
    let foodSpice = foodItemList.filter(x=> x.spicy_level> spicyLevel)
    //console.log('spicy', foodSpice)
    
    // let mapTest = foodItemList.map((item, value) => item.category)
    // console.log(mapTest)

    return(
        <div>
            <CategorySelect />
            <div>{foodCat.map(x=> <div className="col-4"> <p key="{title}">{x.title}</p> <p key="{description}"> {x.description}</p></div>)}</div>
        </div>
    )
}

export default Menu

    /*-
    for(let i = 0; i < foodItemList.length; i++){
        if(foodItemList.[i].spicy_level > 3){
            spicyList.push()
        }
        //console.log(i.spicy_level)
        return spicyList;
    }
    -*/
    //console.log('spicy list', spicyList)
    // const firstItem = foodItemList?.data?.[0]
    // console.log['first item', firstItem]