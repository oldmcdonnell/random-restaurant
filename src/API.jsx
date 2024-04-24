import axios from "axios"

async function promiseApiData(){
    const menuDataLink = `https://www.jsonkeeper.com/b/MDXW`
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
    //console.log('API:', result)
    return result
}

export default API