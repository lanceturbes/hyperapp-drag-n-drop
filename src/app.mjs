import { div, ul } from "@hyperapp/html";
import { app } from "hyperapp";

import getStoredGoals from "./utils/get-stored-goals.js";
import goalCreationFormView from "./views/goal-creation-form-view.js";
import goalView from "./views/goal-view.js";

const init = {
  currentDragIndex: null,
  goalList: getStoredGoals(),
  goalEditValue: "",
};

function view(state) {
  const { goalEditValue, goalList } = state;
  return div([
    goalCreationFormView({ goalEditValue }),
    ul(
      { class: "goal-list" },
      goalList.map((goal, index) => goalView({ goal, index }))
    ),
  ]);
}

const node = document.getElementById("app");

app({ init, view, node });
