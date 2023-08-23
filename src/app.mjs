import { div, text } from "@hyperapp/html";
import { app } from "hyperapp";

import goalCreationFormView from "./views/goal-creation-form-view.js";
import goalView from "./views/goal-view.js";

const init = {
  dragoverIndex: null,
  currentDragIndex: null,
  goalList: [
    { id: Date.now() - 1, description: "Cool" },
    { id: Date.now() - 2, description: "Beans" },
  ],
  goalEditValue: "",
};

function view(state) {
  const { goalEditValue, currentDragIndex } = state;
  return div({}, [
    text(currentDragIndex ?? "none"),
    goalCreationFormView({ goalEditValue }),
    ...state.goalList.map((goal, index) => goalView({ goal, index })),
  ]);
}

const node = document.getElementById("app");

app({ init, view, node });
