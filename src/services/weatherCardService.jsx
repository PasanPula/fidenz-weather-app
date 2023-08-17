// Weather Card Component Generator Service
// ARGS: isFromCache: Boolean
// RETURN: Card Components Array

import { CARD_COLORS } from "../configs/Constants";
import WeatherCard from "../components/WeatherCard";
import cityList from '../configs/cities.json';
import { getFromCache, storeInCache } from "../util/cachingHandler";
import { getCityWeather } from "../api/weatherApi";
import tempweatherFilter from "../util/weatherJsonFilter";


export async function getWeatherCards (isFromCache) {
  let colorIndex = 0;
  let cardArr = [];

  for (let i = 0; i < cityList.List.length; i++) {
    if (colorIndex >= CARD_COLORS.length) {
      colorIndex = 0;
    }

    const cityCode = cityList.List[i].CityCode;
    let cachedCity = getFromCache(cityList.List[i].CityCode);

    //referesh the cache
    if(!isFromCache){
      let response = await getCityWeather(cityCode);
      storeInCache(cityCode, tempweatherFilter(response.list[0]));
      cachedCity = tempweatherFilter(response.list[0]);
      storeInCache('timeStamp',Date.now());
    } 

    cardArr.push(
      <WeatherCard
        key={i}
        weather={cachedCity}
        cardColor={CARD_COLORS[colorIndex++]}
      />
    );
  }

  isFromCache ? console.log("*************** Restored from cache ******************") : console.log("*************** Restored from API ******************");
  return cardArr;
}