import API from "./API";

const listItemsFromAPI = ()=>{
    const listItems = API()
    console.log(result)
    console.log('more exact result',result.data[0])
}

function Menu() {
    const foodItemList =  API()
    console.log('list', foodItemList)
}

export default Menu