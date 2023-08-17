import axios from "axios";
import { BASE_URL, UNIT, APP_ID } from "../configs/Constants";

// Handle API Call via Axios
export const getCityWeather = async (city) => {
    const response = await axios.get(BASE_URL,{params: {
        id:city,
        units: UNIT,
        APPID:APP_ID
    }})
    return response.data
}
