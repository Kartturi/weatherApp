import { elements, hourElements } from "./base";

export const changeWeather = data => {
  elements.weatherInfo.textContent = Math.round(data.main.temp) + "\xB0";
  elements.windInfo.textContent = Math.round(data.wind.speed);
  elements.city.textContent = data.name;
  elements.showCurrentHour.textContent = new Date(data.dt * 1000).getHours();

  elements.windContainer.style.transform = `rotate(${data.wind.deg}deg)`;
};

export const getInput = () => elements.inputValue.value;

export const clearInput = () => {
  elements.inputValue.value = "";
};

export const clearIcon = () => {
  elements.icon.innerHTML = "";
};

export const clearChangeCenterView = () => {
  changeWeather();
};

export const iconChoser = (icon, desc) => {
  let markup;
  let classWeather = `<p class="weather-icon-desc f18">${desc}</p>`;

  switch (icon) {
    case "rain":
      markup = `<i class="fas fa-umbrella f200"></i>${classWeather}`;
      break;
    case "clouds":
      markup = `<i class="fas fa-cloud f200"></i>${classWeather}`;
      break;
    case "clear":
      markup = `<i class="fas fa-sun f200"></i>${classWeather}`;
      break;
    default:
      markup = `<i class="fas fa-ban f200"></i>${classWeather}`;
  }

  elements.icon.insertAdjacentHTML("beforeend", markup);
};

export const changeCenterView = (e, data) => {
  //change main view to match current view
  let current = e.target.classList[1];
  let text = e.target.textContent;

  matchAndChange(current, data);
};

function matchAndChange(current, data) {
  let num = current.slice(-1);
  let arrData = data[num - 1];
  let clockTime = () => {
    let time = new Date(arrData.dt * 1000).getHours();
    if (time < 10) {
      return "0" + time;
    }
    return time;
  };
  let iconName = arrData.weather[0].main;
  let desc = arrData.weather[0].description;

  elements.weatherInfo.textContent = Math.round(arrData.main.temp) + "\xB0";
  elements.showCurrentHour.textContent = clockTime();
  elements.windContainer.style.transform = `rotate(${arrData.wind.deg}deg)`;
  clearIcon();
  iconChoser(iconName.toLowerCase(), desc);
}
