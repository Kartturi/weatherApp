import { apiKey } from "../apikeys/api-keys";

export const initialApiCall = async () => {
  //set default
  let city = "vaasa";
  let initialWeather = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  )
    .then(data => data.json())
    .catch(error => {
      console.log("Error", error);
    });

  return initialWeather;
};

export const initialApiCallHours = async () => {
  //set default
  let city = "vaasa";
  let initialWeatherHours = await fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
  )
    .then(data => data.json())
    .catch(error => {
      console.log("Error", error);
    });

  return initialWeatherHours;
};
