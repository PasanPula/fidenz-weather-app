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
