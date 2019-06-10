import { apiKey } from "../apikeys/api-keys";

export function FutureDay(query) {
  this.query = query;
  this.getResults = async function(query) {
    const results = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast/daily?q=${
        this.query
      }&units=metric&appid=${apiKey}`
    )
      .then(data => data.json())
      .catch(data => console.log("Error:", data));
    console.log(results, this);
    this.result = results;
  };
}
