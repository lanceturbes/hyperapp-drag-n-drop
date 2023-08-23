import { div } from "@hyperapp/html";
import { app } from "hyperapp";

import goalCreationFormView from "./views/goal-creation-form-view.js";
import goalView from "./views/goal-view.js";

const init = {
  goalList: [],
  goalEditValue: "",
};

function view(state) {
  return div([
    goalCreationFormView({ goalEditValue: state.goalEditValue }),
    ...state.goalList.map(goalView),
  ]);
}

const node = document.getElementById("app");

app({ init, view, node });
