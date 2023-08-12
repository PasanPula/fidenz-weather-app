import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const APP_ID = import.meta.env.VITE_API_KEY;

export const getCityWeather = async (city) => {
    console.log("*************** API Called ******************");
    const response = await axios.get(BASE_URL,{params: {
        id:city,
        units: 'metric',
        APPID:APP_ID
    }})
    return response.data
}
