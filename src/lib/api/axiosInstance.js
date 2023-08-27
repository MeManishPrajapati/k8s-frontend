import axios from "axios";

export const initAxios = () => {
    axios.defaults.baseURL = "http://127.0.0.1:9090"
}