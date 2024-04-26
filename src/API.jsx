import axios from "axios"

async function promiseApiData(){
    const menuDataLink = 'https://raw.githubusercontent.com/oldmcdonnell/restaurant_JSON/main/foodList.json'
    //const menuDataLink = `https://raw.githubusercontent.com/bootcamp-students/random-restaurant-json/main/foodList.json`
    try {
        const response = await axios.get(menuDataLink)
        const menuInfo = response
        return menuInfo
        console.log("success", menuInfo)
    } catch (error){
        console.log('get From API Error: ', error)
        return []
    }
}


async function API (){
    const result = await promiseApiData()
    console.log('API:', result)
    return result?.data
    
}

export default API