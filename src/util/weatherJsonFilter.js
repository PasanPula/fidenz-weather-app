// Handle Raw weather data formatting
// Params: weather data json
// return filtered weather data array for each city
import moment from "moment/moment";
import { DISPLAY_METRIC } from "../configs/Constants";

const tempweatherFilter = (item) => {
    const data = {
      id: item.id,
      dt: item.dt,
      time: localDateFormat(item.dt),
      date: moment(new Date(item.dt * 1000)).format("MMM D"),
      name: item.name,
      country: item.sys.country,
      temp: item.main.temp,
      temp_min: item.main.temp_min,
      temp_max: item.main.temp_max,
      description: item.weather[0].description,
      pressure: item.main.pressure + DISPLAY_METRIC.pressure,
      humidity: item.main.humidity + DISPLAY_METRIC.humidity,
      visibility: parseFloat(item.visibility /1000).toFixed(2)+DISPLAY_METRIC.distance,
      wind_speed:item.wind.speed+DISPLAY_METRIC.speed,
      wind_deg:item.wind.deg+DISPLAY_METRIC.direction,
      sunrise:localDateFormat(item.sys.sunrise),
      sunset:localDateFormat(item.sys.sunset),
      icon: getWeatherIcon(item.weather[0].description),
    };
    return data;
};

function getWeatherIcon(description) {
  if (description === "clear sky") {
    return "BsSun";
  } else if (description === "few clouds") {
    return "BsCloudy";
  } else if (description === "scattered clouds") {
    return "BsClouds";
  } else if (description === "broken clouds") {
    return "BsClouds";
  } else if (description === "overcast clouds") {
    return "BsCloudSun";
  } else if (description === "mist") {
    return "BsCloudFog";
  } else if (description === "light intensity drizzle") {
    return "BsCloudDrizzle";
  } else if (description === "moderate rain") {
    return "BsCloudDrizzle";
  } else if (description === "rain") {
    return "BsCloudDrizzle";
  } else if (description === "shower rain") {
    return "BsCloudDrizzle";
  } else {
    return "BsSun";
  }
}

function localDateFormat(utcTime){
 return new Date(utcTime * 1000)
 .toLocaleTimeString("en-IN", {
   hour: "numeric",
   minute: "2-digit",
   hour12: true,
 })
 .replace(" ", "");
}

export default tempweatherFilter;
