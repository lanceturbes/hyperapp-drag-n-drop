import { div, ul } from "@hyperapp/html";
import { app } from "hyperapp";

import getStoredGoals from "./utils/get-stored-goals.js";
import goalCreationFormView from "./views/goal-creation-form-view.js";
import goalView from "./views/goal-view.js";

const init = {
  currentDragIndex: null,
  dragoverIndex: null,
  goalEditValue: "",
  goalList: getStoredGoals(),
};

function view(state) {
  const { goalEditValue, goalList, dragoverIndex } = state;
  return div([
    goalCreationFormView({ goalEditValue }),
    ul(
      { class: "goal-list" },
      goalList.map((goal, index) =>
        goalView({ goal, index, isHighlighted: dragoverIndex === index })
      )
    ),
  ]);
}

const node = document.getElementById("app");
app({ init, view, node });
