import { div, ul } from "@hyperapp/html";
import { app } from "hyperapp";

import setInitialTheme from "@/effects/set-initial-theme.mjs";
import getStoredGoals from "@/utils/get-stored-goals.mjs";
import goalCreationFormView from "@/views/goal-creation-form-view.mjs";
import goalView from "@/views/goal-view.mjs";
import darkModeToggleView from "./views/dark-mode-toggle-view.mjs";

const init = {
  location: location.pathname,
  currentDragIndex: null,
  dragoverIndex: null,
  goalEditValue: "",
  goalList: getStoredGoals(),
};

function view(state) {
  const { goalEditValue, goalList, dragoverIndex } = state;
  return div(
    {
      class: "layout",
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        width: "100%",
      },
    },
    [
      darkModeToggleView(),
      goalCreationFormView({ goalEditValue }),
      ul(
        { class: "goals__list" },
        goalList.map((goal, index) =>
          goalView({ goal, index, isHighlighted: dragoverIndex === index })
        )
      ),
    ]
  );
}

function subscriptions(_) {
  return [];
}

const node = document.getElementById("app");
app({ init: [init, setInitialTheme], view, node, subscriptions });
