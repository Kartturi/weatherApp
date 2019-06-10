/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/apikeys/api-keys.js":
/*!*********************************!*\
  !*** ./src/apikeys/api-keys.js ***!
  \*********************************/
/*! exports provided: apiKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"apiKey\", function() { return apiKey; });\nconst apiKey = \"0b93d225d28b653cc3d90b866ec3d67c\";\r\n\n\n//# sourceURL=webpack:///./src/apikeys/api-keys.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_searchView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/searchView */ \"./src/views/searchView.js\");\n/* harmony import */ var _views_clock_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/clock-time */ \"./src/views/clock-time.js\");\n/* harmony import */ var _views_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/base */ \"./src/views/base.js\");\n/* harmony import */ var _models_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/Search */ \"./src/models/Search.js\");\n/* harmony import */ var _models_Initial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/Initial */ \"./src/models/Initial.js\");\n/* harmony import */ var _views_initialView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/initialView */ \"./src/views/initialView.js\");\n/* harmony import */ var _views_hoursView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/hoursView */ \"./src/views/hoursView.js\");\n/* harmony import */ var _models_Hours__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./models/Hours */ \"./src/models/Hours.js\");\n/* harmony import */ var _views_foreCastView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/foreCastView */ \"./src/views/foreCastView.js\");\n/* harmony import */ var _models_Forecast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./models/Forecast */ \"./src/models/Forecast.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet city = \"vaasa\";\r\n\r\nconst state = {};\r\n\r\nconst controlInitialize = async () => {\r\n  //get initial api info\r\n  const init = await Object(_models_Initial__WEBPACK_IMPORTED_MODULE_4__[\"initialApiCall\"])();\r\n  const hoursInit = await Object(_models_Initial__WEBPACK_IMPORTED_MODULE_4__[\"initialApiCallHours\"])();\r\n  state.initial = init;\r\n  state.initialHours = hoursInit;\r\n\r\n  //render initial api\r\n  Object(_views_initialView__WEBPACK_IMPORTED_MODULE_5__[\"renderInitial\"])(state.initial);\r\n  Object(_views_hoursView__WEBPACK_IMPORTED_MODULE_6__[\"renderHours\"])(state.initialHours);\r\n\r\n  Object(_views_clock_time__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\n  _views_searchView__WEBPACK_IMPORTED_MODULE_0__[\"iconChoser\"](\r\n    state.initial.weather[0].main.toLowerCase(),\r\n    state.initial.weather[0].description.toLowerCase()\r\n  );\r\n};\r\n\r\ncontrolInitialize();\r\n\r\nconst controlHours = async e => {\r\n  //get current time :: view\r\n  //round it to neares future api time\r\n  //let currentHour = renderCurrentHour();\r\n\r\n  //Get input value\r\n  const query = _views_searchView__WEBPACK_IMPORTED_MODULE_0__[\"getInput\"]();\r\n\r\n  //New search object and add to state\r\n  if (query) {\r\n    state.hours = new _models_Hours__WEBPACK_IMPORTED_MODULE_7__[\"default\"](query);\r\n\r\n    await state.hours.getResults();\r\n    //make adjustments to later sections\r\n    //render hours\r\n\r\n    Object(_views_hoursView__WEBPACK_IMPORTED_MODULE_6__[\"renderHours\"])(state.hours.results);\r\n    //render forecast section\r\n  }\r\n};\r\n\r\n//EventListener\r\n\r\n_views_base__WEBPACK_IMPORTED_MODULE_2__[\"elements\"].inputValue.addEventListener(\"keydown\", e => {\r\n  if (e.keyCode === 13) {\r\n    _views_base__WEBPACK_IMPORTED_MODULE_2__[\"elements\"].inputSubmit.click();\r\n  }\r\n});\r\n\r\n_views_base__WEBPACK_IMPORTED_MODULE_2__[\"elements\"].inputSubmit.addEventListener(\"click\", e => {\r\n  e.preventDefault();\r\n  controlHours();\r\n\r\n  controlSearch();\r\n});\r\n\r\n_views_base__WEBPACK_IMPORTED_MODULE_2__[\"hourElements\"].allhours.forEach(hour =>\r\n  hour.addEventListener(\"mouseover\", e => {\r\n    console.log();\r\n\r\n    _views_searchView__WEBPACK_IMPORTED_MODULE_0__[\"changeCenterView\"](e, state.initialHours.list);\r\n  })\r\n);\r\n\r\n_views_base__WEBPACK_IMPORTED_MODULE_2__[\"hourElements\"].allhours.forEach(hour =>\r\n  hour.addEventListener(\"mouseleave\", e => {\r\n    Object(_views_initialView__WEBPACK_IMPORTED_MODULE_5__[\"renderInitial\"])(state.initial);\r\n  })\r\n);\r\n\r\n//Eventlisteners end\r\n\r\nconst controlSearch = async e => {\r\n  //get query from view\r\n  const query = _views_searchView__WEBPACK_IMPORTED_MODULE_0__[\"getInput\"]();\r\n\r\n  if (query) {\r\n    //New search object and add to state\r\n    state.search = new _models_Search__WEBPACK_IMPORTED_MODULE_3__[\"default\"](query);\r\n\r\n    //Prepare Ui for results\r\n    //clear input\r\n    _views_searchView__WEBPACK_IMPORTED_MODULE_0__[\"clearInput\"]();\r\n    _views_searchView__WEBPACK_IMPORTED_MODULE_0__[\"clearIcon\"]();\r\n\r\n    //make api call\r\n    await state.search.getResults();\r\n    //render results to UI\r\n    _views_searchView__WEBPACK_IMPORTED_MODULE_0__[\"changeWeather\"](state.search.result);\r\n\r\n    _views_searchView__WEBPACK_IMPORTED_MODULE_0__[\"iconChoser\"](\r\n      state.search.result.weather[0].main.toLowerCase(),\r\n      state.search.result.weather[0].description.toLowerCase()\r\n    );\r\n  }\r\n};\r\n\r\nconst foreCastController = () => {\r\n  //no good api found\r\n\r\n  //Get search input\r\n  const query = _views_searchView__WEBPACK_IMPORTED_MODULE_0__[\"getInput\"]();\r\n  console.log(query);\r\n\r\n  //Get forecast data\r\n  const foreCastInformation = new _models_Forecast__WEBPACK_IMPORTED_MODULE_9__[\"FutureDay\"](query);\r\n  console.log(foreCastInformation.getResults());\r\n  // //Put forecast data to state\r\n  // state.foreCast = foreCastInformation;\r\n};\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/models/Forecast.js":
/*!********************************!*\
  !*** ./src/models/Forecast.js ***!
  \********************************/
/*! exports provided: FutureDay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FutureDay\", function() { return FutureDay; });\n/* harmony import */ var _apikeys_api_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apikeys/api-keys */ \"./src/apikeys/api-keys.js\");\n\r\n\r\nfunction FutureDay(query) {\r\n  this.query = query;\r\n  this.getResults = async function(query) {\r\n    const results = await fetch(\r\n      `http://api.openweathermap.org/data/2.5/forecast/daily?q=${\r\n        this.query\r\n      }&units=metric&appid=${_apikeys_api_keys__WEBPACK_IMPORTED_MODULE_0__[\"apiKey\"]}`\r\n    )\r\n      .then(data => data.json())\r\n      .catch(data => console.log(\"Error:\", data));\r\n    console.log(results, this);\r\n    this.result = results;\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack:///./src/models/Forecast.js?");

/***/ }),

/***/ "./src/models/Hours.js":
/*!*****************************!*\
  !*** ./src/models/Hours.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Hours; });\n/* harmony import */ var _apikeys_api_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apikeys/api-keys */ \"./src/apikeys/api-keys.js\");\n\r\n\r\nclass Hours {\r\n  constructor(query) {\r\n    this.query = query;\r\n  }\r\n\r\n  async getResults(query) {\r\n    let HoursInfo = await fetch(\r\n      `http://api.openweathermap.org/data/2.5/forecast?q=${\r\n        this.query\r\n      }&units=metric&appid=${_apikeys_api_keys__WEBPACK_IMPORTED_MODULE_0__[\"apiKey\"]}`\r\n    )\r\n      .then(data => data.json())\r\n\r\n      .catch(error => {\r\n        console.log(error);\r\n      });\r\n\r\n    this.results = HoursInfo;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/models/Hours.js?");

/***/ }),

/***/ "./src/models/Initial.js":
/*!*******************************!*\
  !*** ./src/models/Initial.js ***!
  \*******************************/
/*! exports provided: initialApiCall, initialApiCallHours */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialApiCall\", function() { return initialApiCall; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialApiCallHours\", function() { return initialApiCallHours; });\n/* harmony import */ var _apikeys_api_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apikeys/api-keys */ \"./src/apikeys/api-keys.js\");\n\r\n\r\nconst initialApiCall = async () => {\r\n  //set default\r\n  let city = \"vaasa\";\r\n  let initialWeather = await fetch(\r\n    `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${_apikeys_api_keys__WEBPACK_IMPORTED_MODULE_0__[\"apiKey\"]}`\r\n  )\r\n    .then(data => data.json())\r\n    .catch(error => {\r\n      console.log(\"Error\", error);\r\n    });\r\n\r\n  return initialWeather;\r\n};\r\n\r\nconst initialApiCallHours = async () => {\r\n  //set default\r\n  let city = \"vaasa\";\r\n  let initialWeatherHours = await fetch(\r\n    `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${_apikeys_api_keys__WEBPACK_IMPORTED_MODULE_0__[\"apiKey\"]}`\r\n  )\r\n    .then(data => data.json())\r\n    .catch(error => {\r\n      console.log(\"Error\", error);\r\n    });\r\n\r\n  return initialWeatherHours;\r\n};\r\n\n\n//# sourceURL=webpack:///./src/models/Initial.js?");

/***/ }),

/***/ "./src/models/Search.js":
/*!******************************!*\
  !*** ./src/models/Search.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Search; });\n/* harmony import */ var _apikeys_api_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apikeys/api-keys */ \"./src/apikeys/api-keys.js\");\n\r\n\r\nclass Search {\r\n  constructor(query) {\r\n    this.query = query;\r\n  }\r\n\r\n  async getResults(query) {\r\n    let weatherInfo = await fetch(\r\n      `http://api.openweathermap.org/data/2.5/weather?q=${\r\n        this.query\r\n      }&units=metric&appid=${_apikeys_api_keys__WEBPACK_IMPORTED_MODULE_0__[\"apiKey\"]}`\r\n    )\r\n      .then(data => data.json())\r\n\r\n      .catch(error => {\r\n        console.log(\"Error\", error);\r\n        return \"Not found\";\r\n      });\r\n\r\n    this.result = weatherInfo;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/models/Search.js?");

/***/ }),

/***/ "./src/views/base.js":
/*!***************************!*\
  !*** ./src/views/base.js ***!
  \***************************/
/*! exports provided: elements, hourElements, foreCast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"elements\", function() { return elements; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hourElements\", function() { return hourElements; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"foreCast\", function() { return foreCast; });\nconst elements = {\r\n  inputSubmit: document.querySelector(\".city-submit\"),\r\n  inputValue: document.querySelector(\".city-input\"),\r\n  city: document.querySelector(\".city\"),\r\n  weatherInfo: document.querySelector(\".weather-info-degree\"),\r\n  windInfo: document.querySelector(\".wind-text-p\"),\r\n  windContainer: document.querySelector(\".wind-container\"),\r\n  timeDisplay: document.querySelector(\".time\"),\r\n  currentHour: document.querySelector(\".dayhours-current p\"),\r\n  icon: document.querySelector(\".weather-icon\"),\r\n  showCurrentHour: document.querySelector(\".weather-current-hour\")\r\n};\r\n\r\nconst hourElements = {\r\n  allhours: document.querySelectorAll(\".dayhours\"),\r\n  dayhour1: document.querySelector(\".dayhours-1 p\"),\r\n  dayhour2: document.querySelector(\".dayhours-2 p\"),\r\n  dayhour3: document.querySelector(\".dayhours-3 p\"),\r\n  dayhour4: document.querySelector(\".dayhours-4 p\"),\r\n  dayhour5: document.querySelector(\".dayhours-5 p\"),\r\n  dayhour6: document.querySelector(\".dayhours-6 p\"),\r\n  dayhour7: document.querySelector(\".dayhours-7 p\"),\r\n  dayhour8: document.querySelector(\".dayhours-8 p\")\r\n};\r\n\r\nconst foreCast = {\r\n  tommorrow: {\r\n    top: {\r\n      icon: document.querySelector(\r\n        \".weather-small-1 .weather-small-top .weather-small-icon\"\r\n      ),\r\n      degree: document.querySelector(\r\n        \".weather-small-1 .weather-small-top .weather-small-degree\"\r\n      )\r\n    },\r\n    bot: document.querySelector(\".weather-small-1 .weather-small-bot p\")\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/views/base.js?");

/***/ }),

/***/ "./src/views/clock-time.js":
/*!*********************************!*\
  !*** ./src/views/clock-time.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return startTime; });\nfunction startTime() {\r\n  let today = new Date();\r\n  let h = today.getHours();\r\n  let m = today.getMinutes();\r\n\r\n  m = checkTime(m);\r\n\r\n  document.querySelector(\".time\").innerHTML = +h + \":\" + m;\r\n  let t = setTimeout(startTime, 500);\r\n}\r\nfunction checkTime(i) {\r\n  if (i < 10) {\r\n    i = \"0\" + i;\r\n  } // add zero in front of numbers < 10\r\n  return i;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/views/clock-time.js?");

/***/ }),

/***/ "./src/views/foreCastView.js":
/*!***********************************!*\
  !*** ./src/views/foreCastView.js ***!
  \***********************************/
/*! exports provided: createForeCast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createForeCast\", function() { return createForeCast; });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/views/base.js\");\n\r\n\r\nconst createForeCast = icon => {\r\n  _base__WEBPACK_IMPORTED_MODULE_0__[\"foreCast\"].tommorrow.top.icon.innerHTML = foreCastIconChoser(icon);\r\n};\r\n\r\nconst foreCastIconChoser = icon => {\r\n  let markup;\r\n  //todo, forecast model and view with 16 days api\r\n  console.log(icon);\r\n  switch (icon) {\r\n    case \"rain\":\r\n      markup = `<i class=\"fas fa-umbrella f36\"></i>`;\r\n      break;\r\n    case \"clouds\":\r\n      markup = `<i class=\"fas fa-cloud f36\"></i>`;\r\n      break;\r\n    case \"clear\":\r\n      markup = `<i class=\"fas fa-sun f36\"></i>`;\r\n      break;\r\n    default:\r\n      markup = `<i class=\"fas fa-ban f36\"></i>`;\r\n  }\r\n  return markup;\r\n};\r\n\n\n//# sourceURL=webpack:///./src/views/foreCastView.js?");

/***/ }),

/***/ "./src/views/hoursView.js":
/*!********************************!*\
  !*** ./src/views/hoursView.js ***!
  \********************************/
/*! exports provided: getCurrentHour, renderHours */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCurrentHour\", function() { return getCurrentHour; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderHours\", function() { return renderHours; });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/views/base.js\");\n\r\n\r\nconst getCurrentHour = new Date().getHours();\r\n\r\nconst renderHours = hour => {\r\n  _base__WEBPACK_IMPORTED_MODULE_0__[\"hourElements\"].dayhour1.textContent = setTime(hour, 0);\r\n  _base__WEBPACK_IMPORTED_MODULE_0__[\"hourElements\"].dayhour2.textContent = setTime(hour, 1);\r\n  _base__WEBPACK_IMPORTED_MODULE_0__[\"hourElements\"].dayhour3.textContent = setTime(hour, 2);\r\n  _base__WEBPACK_IMPORTED_MODULE_0__[\"hourElements\"].dayhour4.textContent = setTime(hour, 3);\r\n  _base__WEBPACK_IMPORTED_MODULE_0__[\"hourElements\"].dayhour5.textContent = setTime(hour, 4);\r\n  _base__WEBPACK_IMPORTED_MODULE_0__[\"hourElements\"].dayhour6.textContent = setTime(hour, 5);\r\n  _base__WEBPACK_IMPORTED_MODULE_0__[\"hourElements\"].dayhour7.textContent = setTime(hour, 6);\r\n  _base__WEBPACK_IMPORTED_MODULE_0__[\"hourElements\"].dayhour8.textContent = setTime(hour, 7);\r\n};\r\n\r\nconst setTime = (hour, stamp) => {\r\n  if (new Date(hour.list[stamp].dt * 1000).getHours() < 10) {\r\n    return \"0\" + new Date(hour.list[stamp].dt * 1000).getHours();\r\n  }\r\n  return new Date(hour.list[stamp].dt * 1000).getHours();\r\n};\r\n\r\nconst renderCenterWeather = () => {};\r\n\n\n//# sourceURL=webpack:///./src/views/hoursView.js?");

/***/ }),

/***/ "./src/views/initialView.js":
/*!**********************************!*\
  !*** ./src/views/initialView.js ***!
  \**********************************/
/*! exports provided: renderInitial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderInitial\", function() { return renderInitial; });\n/* harmony import */ var _searchView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchView */ \"./src/views/searchView.js\");\n\r\n\r\nconst renderInitial = item => {\r\n  Object(_searchView__WEBPACK_IMPORTED_MODULE_0__[\"changeWeather\"])(item);\r\n};\r\n\n\n//# sourceURL=webpack:///./src/views/initialView.js?");

/***/ }),

/***/ "./src/views/searchView.js":
/*!*********************************!*\
  !*** ./src/views/searchView.js ***!
  \*********************************/
/*! exports provided: changeWeather, getInput, clearInput, clearIcon, clearChangeCenterView, iconChoser, changeCenterView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeWeather\", function() { return changeWeather; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getInput\", function() { return getInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearInput\", function() { return clearInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearIcon\", function() { return clearIcon; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearChangeCenterView\", function() { return clearChangeCenterView; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"iconChoser\", function() { return iconChoser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeCenterView\", function() { return changeCenterView; });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/views/base.js\");\n\r\n\r\nconst changeWeather = data => {\r\n  _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].weatherInfo.textContent = Math.round(data.main.temp) + \"\\xB0\";\r\n  _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].windInfo.textContent = Math.round(data.wind.speed);\r\n  _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].city.textContent = data.name;\r\n  _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].showCurrentHour.textContent = new Date(data.dt * 1000).getHours();\r\n\r\n  _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].windContainer.style.transform = `rotate(${data.wind.deg}deg)`;\r\n};\r\n\r\nconst getInput = () => _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].inputValue.value;\r\n\r\nconst clearInput = () => {\r\n  _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].inputValue.value = \"\";\r\n};\r\n\r\nconst clearIcon = () => {\r\n  _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].icon.innerHTML = \"\";\r\n};\r\n\r\nconst clearChangeCenterView = () => {\r\n  changeWeather();\r\n};\r\n\r\nconst iconChoser = (icon, desc) => {\r\n  let markup;\r\n  let classWeather = `<p class=\"weather-icon-desc f18\">${desc}</p>`;\r\n\r\n  switch (icon) {\r\n    case \"rain\":\r\n      markup = `<i class=\"fas fa-umbrella f200\"></i>${classWeather}`;\r\n      break;\r\n    case \"clouds\":\r\n      markup = `<i class=\"fas fa-cloud f200\"></i>${classWeather}`;\r\n      break;\r\n    case \"clear\":\r\n      markup = `<i class=\"fas fa-sun f200\"></i>${classWeather}`;\r\n      break;\r\n    default:\r\n      markup = `<i class=\"fas fa-ban f200\"></i>${classWeather}`;\r\n  }\r\n\r\n  _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].icon.insertAdjacentHTML(\"beforeend\", markup);\r\n};\r\n\r\nconst changeCenterView = (e, data) => {\r\n  //change main view to match current view\r\n  let current = e.target.classList[1];\r\n  let text = e.target.textContent;\r\n\r\n  matchAndChange(current, data);\r\n};\r\n\r\nfunction matchAndChange(current, data) {\r\n  let num = current.slice(-1);\r\n  let arrData = data[num - 1];\r\n  let clockTime = () => {\r\n    let time = new Date(arrData.dt * 1000).getHours();\r\n    if (time < 10) {\r\n      return \"0\" + time;\r\n    }\r\n    return time;\r\n  };\r\n  let iconName = arrData.weather[0].main;\r\n  let desc = arrData.weather[0].description;\r\n\r\n  _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].weatherInfo.textContent = Math.round(arrData.main.temp) + \"\\xB0\";\r\n  _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].showCurrentHour.textContent = clockTime();\r\n  _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].windContainer.style.transform = `rotate(${arrData.wind.deg}deg)`;\r\n  clearIcon();\r\n  iconChoser(iconName.toLowerCase(), desc);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/views/searchView.js?");

/***/ })

/******/ });