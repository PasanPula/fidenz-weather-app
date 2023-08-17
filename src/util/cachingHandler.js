//Handle Local Storage cache Operations
import { CACHE_KEY } from "../configs/Constants";

const cache = JSON.parse(localStorage.getItem(CACHE_KEY)) || {};

export function storeInCache(key, data) {
  cache[key] = data
  localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
}

export function getFromCache(key) {
  if (cache && cache[key]) {
    return cache[key];
  }
  return null;
}