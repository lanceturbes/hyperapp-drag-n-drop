import { div } from "@hyperapp/html";
import { app } from "hyperapp";

import setInitialTheme from "@/effects/set-initial-theme.mjs";
import getStoredGoals from "@/utils/get-stored-goals.mjs";
import aboutView from "@/views/about-view.mjs";
import darkModeToggleView from "@/views/dark-mode-toggle-view.mjs";
import headerView from "@/views/header-view.mjs";
import homeView from "@/views/home-view.mjs";
import onUrlChange from "./subscriptions/on-url-change.mjs";

const init = {
  location: window.location.pathname,
  currentDragIndex: null,
  dragoverIndex: null,
  goalEditValue: "",
  goalList: getStoredGoals(),
};

function view(state) {
  const { location } = state;
  return div({ class: "layout" }, [
    headerView(),
    div({ class: "content" }, [
      location === "/about" ? aboutView() : homeView(state),
    ]),
  ]);
}

function subscriptions(state) {
  return [[onUrlChange]];
}

const node = document.getElementById("app");
app({ init: [init, setInitialTheme], view, node, subscriptions });
