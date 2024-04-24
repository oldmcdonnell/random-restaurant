import axios from "axios"

async function promiseApiData(){
    const menuDataLink = `https://www.jsonkeeper.com/b/MDXW `
    try {
        const response = await axios.get(menuDataLink)
        const menuInfo = await response
        return menuInfo
        console.log("success", menuInfo)
    } catch (error){
        console.log('get From API Error: ', error)
        return []
    }
}


async function API (){
    const result = await promiseApiData()
}

export default API