export const elements = {
  inputSubmit: document.querySelector(".city-submit"),
  inputValue: document.querySelector(".city-input"),
  city: document.querySelector(".city"),
  weatherInfo: document.querySelector(".weather-info-degree"),
  windInfo: document.querySelector(".wind-text-p"),
  windContainer: document.querySelector(".wind-container"),
  timeDisplay: document.querySelector(".time"),
  currentHour: document.querySelector(".dayhours-current p"),
  icon: document.querySelector(".weather-icon"),
  showCurrentHour: document.querySelector(".weather-current-hour")
};

export const hourElements = {
  allhours: document.querySelectorAll(".dayhours"),
  dayhour1: document.querySelector(".dayhours-1 p"),
  dayhour2: document.querySelector(".dayhours-2 p"),
  dayhour3: document.querySelector(".dayhours-3 p"),
  dayhour4: document.querySelector(".dayhours-4 p"),
  dayhour5: document.querySelector(".dayhours-5 p"),
  dayhour6: document.querySelector(".dayhours-6 p"),
  dayhour7: document.querySelector(".dayhours-7 p"),
  dayhour8: document.querySelector(".dayhours-8 p")
};

export const foreCast = {
  tommorrow: {
    top: {
      icon: document.querySelector(
        ".weather-small-1 .weather-small-top .weather-small-icon"
      ),
      degree: document.querySelector(
        ".weather-small-1 .weather-small-top .weather-small-degree"
      )
    },
    bot: document.querySelector(".weather-small-1 .weather-small-bot p")
  }
};
