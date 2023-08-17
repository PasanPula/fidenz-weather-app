export const BASE_URL = import.meta.env.VITE_BASE_URL;
export const APP_ID = import.meta.env.VITE_API_KEY;
export const UNIT = import.meta.env.VITE_WEATHER_UNIT;

export const CARD_COLORS = [
    "cardBlue",
    "cardOrange",
    "cardGreen",
    "cardPurple",
    "cardRed",
];

export const CACHE_KEY = 'weatherCache';
export const CACHE_EXPIRATION = 5 * 60 * 1000; 
export const CACHE_TIME_KEY = 'timeStamp';

export const DISPLAY_METRIC = {
    pressure: "hpa",
    humidity: "%",
    distance: "km",
    speed: "m/s",
    direction: " Degree"
}