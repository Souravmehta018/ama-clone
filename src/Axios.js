import axios from "axios";

const instance = axios.create({
    baseURL: '...'      //the API URL cloud functionality
})

export default instance;