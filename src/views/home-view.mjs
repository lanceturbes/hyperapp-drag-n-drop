import { div, ul } from "@hyperapp/html";

import goalCreationFormView from "./goal-creation-form-view.mjs";
import goalView from "./goal-view.mjs";

export default function homeView(state) {
  const { goalEditValue, dragoverIndex, goalList } = state;
  return div([
    goalCreationFormView({ goalEditValue }),
    ul(
      { class: "goals__list" },
      goalList.map((goal, index) =>
        goalView({ goal, index, isHighlighted: dragoverIndex === index })
      )
    ),
  ]);
}
