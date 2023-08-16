const CACHE_KEY = 'weatherCache';
const CACHE_EXPIRATION = 5 * 60 * 1000; // 5 minutes in milliseconds

export function storeInCache(key, data) {
  const cache = JSON.parse(localStorage.getItem(CACHE_KEY)) || {};
  cache[key] = {
    data,
    timestamp: Date.now(),
  };
  localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
}

export function getFromCache(key) {
  const cache = JSON.parse(localStorage.getItem(CACHE_KEY));
  if (cache && cache[key] && Date.now() - cache[key].timestamp < CACHE_EXPIRATION) {
    return cache[key].data;
  }
  return null;
}