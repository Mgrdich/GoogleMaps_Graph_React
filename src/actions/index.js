import axios from 'axios'
export const FETCH_WEATHER = 'FETCH_WEATHER';
const API_KEY ='59c1aebcc02d44be35186293d0bca482';
const RootUrl = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
//check with the official website their how you can manipulate the url to get what you wnat out of it it this case we changed city to the end

export function fetchWeather(CityName){
    const url =`${RootUrl}&q=${CityName},us`;
    const request = axios.get(url);
return{
    type: FETCH_WEATHER,
    payload:request
}
}