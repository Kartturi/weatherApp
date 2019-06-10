import { foreCast } from "./base";

export const createForeCast = icon => {
  foreCast.tommorrow.top.icon.innerHTML = foreCastIconChoser(icon);
};

const foreCastIconChoser = icon => {
  let markup;
  //todo, forecast model and view with 16 days api
  console.log(icon);
  switch (icon) {
    case "rain":
      markup = `<i class="fas fa-umbrella f36"></i>`;
      break;
    case "clouds":
      markup = `<i class="fas fa-cloud f36"></i>`;
      break;
    case "clear":
      markup = `<i class="fas fa-sun f36"></i>`;
      break;
    default:
      markup = `<i class="fas fa-ban f36"></i>`;
  }
  return markup;
};
