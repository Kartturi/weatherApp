import { elements, hourElements } from "./base";

export const getCurrentHour = new Date().getHours();

export const renderHours = hour => {
  hourElements.dayhour1.textContent = setTime(hour, 0);
  hourElements.dayhour2.textContent = setTime(hour, 1);
  hourElements.dayhour3.textContent = setTime(hour, 2);
  hourElements.dayhour4.textContent = setTime(hour, 3);
  hourElements.dayhour5.textContent = setTime(hour, 4);
  hourElements.dayhour6.textContent = setTime(hour, 5);
  hourElements.dayhour7.textContent = setTime(hour, 6);
  hourElements.dayhour8.textContent = setTime(hour, 7);
};

const setTime = (hour, stamp) => {
  if (new Date(hour.list[stamp].dt * 1000).getHours() < 10) {
    return "0" + new Date(hour.list[stamp].dt * 1000).getHours();
  }
  return new Date(hour.list[stamp].dt * 1000).getHours();
};

const renderCenterWeather = () => {};
