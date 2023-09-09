import axios from "axios"
console.log(process.env.REACT_APP_API_URL)
const makeRequest = axios.create({
    baseURL:process.env.REACT_APP_API_URL,
    headers:{
        Authorization:"bearer" + process.env.REACT_APP_API_TOKEN,
    }
})
export default makeRequest
