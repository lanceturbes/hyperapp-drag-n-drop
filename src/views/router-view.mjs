import aboutView from "./about-view.mjs";
import homeView from "./home-view.mjs";

export default function routerView(state) {
  const { location } = state;
  switch (location) {
    case "/about":
      return aboutView();
    default:
      return homeView(state);
  }
}
