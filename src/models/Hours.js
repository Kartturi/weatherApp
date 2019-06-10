import { apiKey } from "../apikeys/api-keys";

export default class Hours {
  constructor(query) {
    this.query = query;
  }

  async getResults(query) {
    let HoursInfo = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${
        this.query
      }&units=metric&appid=${apiKey}`
    )
      .then(data => data.json())

      .catch(error => {
        console.log(error);
      });

    this.results = HoursInfo;
  }
}
