import axios from "axios";

const api = axios.create({
    baseURL: 'https://api-h-appy.herokuapp.com/',
})

export default api;
