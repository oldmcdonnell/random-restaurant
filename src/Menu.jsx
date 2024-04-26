import API from "./API";
import CategorySelect from "./CategorySelect"
import { useEffect, useState } from 'react';



function Menu() {
    const [foodItemList, setFoodItemList] = useState([])
    const [catSelect, setCatSelect] = useState({meal:"Appetizer"})
    const [menuFilter, setMenuFilter] = useState(foodItemList.filter(x=> x.category===catSelect))

    useEffect(() => {
    (async ()=> {const initialMenu = await API()
    setFoodItemList(initialMenu)
    })()
    }, [])
    
    let spiceSymbol = "🌶️"
    useEffect(()=>{
        setMenuFilter(foodItemList.filter(x=> x.category===catSelect.meal))
    }, [catSelect, foodItemList])
    console.log(menuFilter)
    return(
        <div className="container">
            <div className="p-2"></div>
            <div className="col-4 mx-auto p-bottom-3">
            <CategorySelect
            catSelect={catSelect}
            setCatSelect={setCatSelect} />
            </div>
            <div className="p-2"></div>
            {menuFilter.map(x=> 
                <div key={`item-${x.id}`} className="col-4 mx-auto"> 
                    <h4>{x.title}</h4>
                    <p>{x.description}</p>
                    <p>${x.price}</p>
                    {/* <p>{x.spicy_level * spiceSymbol}</p> */}
                </div>)}

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