import { apiKey } from "../apikeys/api-keys";

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults(query) {
    let weatherInfo = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${
        this.query
      }&units=metric&appid=${apiKey}`
    )
      .then(data => data.json())

      .catch(error => {
        console.log("Error", error);
        return "Not found";
      });

    this.result = weatherInfo;
  }
}
