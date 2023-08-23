import { div } from "@hyperapp/html";
import { app } from "hyperapp";

import goalCreationFormView from "./views/goal-creation-form-view.js";
import goalView from "./views/goal-view.js";

const init = {
  currentDragIndex: null,
  goalList: [
    { id: Date.now() - 1, description: "Cool" },
    { id: Date.now() - 2, description: "Beans" },
  ],
  goalEditValue: "",
};

function view(state) {
  const { goalEditValue } = state;
  return div([
    goalCreationFormView({ goalEditValue }),
    ...state.goalList.map((goal, index) => goalView({ goal, index })),
  ]);
}

const node = document.getElementById("app");

app({ init, view, node });
