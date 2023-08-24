import { div } from "@hyperapp/html";
import { app } from "hyperapp";

import ChangeRoute from "@/actions/change-route.mjs";
import setInitialTheme from "@/effects/set-initial-theme.mjs";
import onEveryURLChange from "@/subscriptions/on-every-url-change.mjs";
import getStoredGoals from "@/utils/get-stored-goals.mjs";
import headerView from "@/views/header-view.mjs";
import routerView from "@/views/router-view.mjs";

const init = {
  location: window.location.pathname,
  currentDragIndex: null,
  dragoverIndex: null,
  goalEditValue: "",
  goalList: getStoredGoals(),
};

function view(state) {
  return div({ class: "layout" }, [
    headerView(),
    div({ class: "content" }, [routerView(state)]),
  ]);
}

function subscriptions(_) {
  return [onEveryURLChange(ChangeRoute)];
}

const node = document.getElementById("app");
app({ init: [init, setInitialTheme], view, node, subscriptions });
