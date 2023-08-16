import axios from "axios";

// Handle API Call vai Axios

const BASE_URL = import.meta.env.VITE_BASE_URL;
const APP_ID = import.meta.env.VITE_API_KEY;
const UNIT = import.meta.env.VITE_WEATHER_UNIT;

export const getCityWeather = async (city) => {
    console.log("*************** API Called ******************");
    const response = await axios.get(BASE_URL,{params: {
        id:city,
        units: UNIT,
        APPID:APP_ID
    }})
    return response.data
}
