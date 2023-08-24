import { a, header, text } from "@hyperapp/html";

import darkModeToggleView from "./dark-mode-toggle-view.mjs";

export default function headerView() {
  function handleNavigate(path) {
    return (state, event) => {
      event.preventDefault();
      if (window.location.pathname !== path) {
        history.pushState({}, "", path);
        window.dispatchEvent(new CustomEvent("pushstate"));
      }
      return state;
    };
  }

  return header({ class: "header" }, [
    a({ onclick: handleNavigate("/") }, text("Home")),
    a({ onclick: handleNavigate("/about") }, text("About")),
    darkModeToggleView(),
  ]);
}
