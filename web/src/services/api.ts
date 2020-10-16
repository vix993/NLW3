import axios from "axios";

const api = axios.create({
    baseURL: 'http://api-h-appy.herokuapp.com/',
})

export default api;