// Handle Raw weather data formatting
// Params: weather data json
// return filtered weather data array for each city
import moment from "moment/moment";

const weatherFilter = (data) => {
  let filteredData = data.list.map((item) => {
    const data = {
      id: item.id,
      dt: item.dt,
      time: new Date(item.dt * 1000)
        .toLocaleTimeString("en-IN", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
        .replace(" ", ""),
      date: moment(new Date(item.dt * 1000)).format("MMM D"),
      name: item.name,
      country: item.sys.country,
      temp: item.main.temp,
      temp_min: item.main.temp_min,
      temp_max: item.main.temp_max,
      description: item.weather[0].description,
      pressure: item.main.pressure + "hpa",
      humidity: item.main.humidity + "%",
      visibility: (item.visibility /1000)+"km",
      wind_speed:item.wind.speed+"m/s",
      wind_deg:item.wind.deg+"Degree",
      sunrise: new Date(item.sys.sunrise  * 1000)
      .toLocaleTimeString("en-IN", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }),
      sunset:new Date(item.sys.sunset  * 1000)
      .toLocaleTimeString("en-IN", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }),
      icon: getWeatherIcon(item.weather[0].description),
    };
    return data;
  });
  return filteredData;
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

export default weatherFilter;
