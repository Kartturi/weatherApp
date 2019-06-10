const apiKey = require("./apikeys");
let weatherObject;
//let city = Vaasa;

function getWeatherInfo(city = "Vaasa") {
  let request = new XMLHttpRequest();
  let parsed;
  request.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      parsed = JSON.parse(this.responseText);
      weatherObject = parsed;
      //document.querySelector(".not-found").textContent = "";
      current();
    } else {
      //document.querySelector(".not-found").textContent = "Not found";
    }
  };
  request.open(
    "GET",
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=0b93d225d28b653cc3d90b866ec3d67c`,
    true
  );
  request.send();
}

getWeatherInfo();

let inputValue = document.querySelector(".city-submit");

inputValue.addEventListener("click", e => {
  let city = document.querySelector(".city-input").value;
  getWeatherInfo(city);
});

let currentDayValues = () => {
  let temp = weatherObject.main.temp;
  let wind = weatherObject.wind.speed;
  let deg = weatherObject.wind.deg;
  let desc = weatherObject.weather[0].main;
  let city = weatherObject.name;

  return {
    temp,
    wind,
    deg,
    desc,
    city
  };
};

export function current(weatherObject) {
  console.log("working");

  let degree = document.querySelector(".weather-info-degree");
  let wind = document.querySelector(".wind-text-p");
  let city = document.querySelector(".city");
  let asd = currentDayValues();
  console.log(asd);
  degree.textContent = Math.round(asd.temp) + "\xB0";
  wind.textContent = Math.round(asd.wind);
  wind.textContent = Math.round(asd.wind);

  city.textContent = asd.city;
}

function Day(temp, wind, deg, desc) {
  this.temp = temp;
  this.wind = wind;
  this.deg = deg;
  this.desc = desc;
}

let time = new Date();

let clockTime =
  time.getHours() + "." + time.getMinutes() + "." + time.getSeconds();
