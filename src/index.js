import * as searchView from "./views/searchView";
import clockTimeStart from "./views/clock-time";
import { elements, hourElements } from "./views/base";
import Search from "./models/Search";
import { initialApiCall, initialApiCallHours } from "./models/Initial";
import { renderInitial } from "./views/initialView";
import { renderCurrentHour, renderHours } from "./views/hoursView";
import Hours from "./models/Hours";
import { createForeCast } from "./views/foreCastView";
import { FutureDay } from "./models/Forecast";

let city = "vaasa";

const state = {};

const controlInitialize = async () => {
  //get initial api info
  const init = await initialApiCall();
  const hoursInit = await initialApiCallHours();
  state.initial = init;
  state.initialHours = hoursInit;

  //render initial api
  renderInitial(state.initial);
  renderHours(state.initialHours);

  clockTimeStart();

  searchView.iconChoser(
    state.initial.weather[0].main.toLowerCase(),
    state.initial.weather[0].description.toLowerCase()
  );
};

controlInitialize();

const controlHours = async e => {
  //get current time :: view
  //round it to neares future api time
  //let currentHour = renderCurrentHour();

  //Get input value
  const query = searchView.getInput();

  //New search object and add to state
  if (query) {
    state.hours = new Hours(query);

    await state.hours.getResults();
    //make adjustments to later sections
    //render hours

    renderHours(state.hours.results);
    //render forecast section
  }
};

//EventListener

elements.inputValue.addEventListener("keydown", e => {
  if (e.keyCode === 13) {
    elements.inputSubmit.click();
  }
});

elements.inputSubmit.addEventListener("click", e => {
  e.preventDefault();
  controlHours();

  controlSearch();
});

hourElements.allhours.forEach(hour =>
  hour.addEventListener("mouseover", e => {
    console.log();

    searchView.changeCenterView(e, state.initialHours.list);
  })
);

hourElements.allhours.forEach(hour =>
  hour.addEventListener("mouseleave", e => {
    renderInitial(state.initial);
  })
);

//Eventlisteners end

const controlSearch = async e => {
  //get query from view
  const query = searchView.getInput();

  if (query) {
    //New search object and add to state
    state.search = new Search(query);

    //Prepare Ui for results
    //clear input
    searchView.clearInput();
    searchView.clearIcon();

    //make api call
    await state.search.getResults();
    //render results to UI
    searchView.changeWeather(state.search.result);

    searchView.iconChoser(
      state.search.result.weather[0].main.toLowerCase(),
      state.search.result.weather[0].description.toLowerCase()
    );
  }
};

const foreCastController = () => {
  //no good api found

  //Get search input
  const query = searchView.getInput();
  console.log(query);

  //Get forecast data
  const foreCastInformation = new FutureDay(query);
  console.log(foreCastInformation.getResults());
  // //Put forecast data to state
  // state.foreCast = foreCastInformation;
};
