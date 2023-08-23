import { button, li, div, text } from "@hyperapp/html";

import DeleteGoal from "../actions/delete-goal.js";
import SwapGoalPositions from "../actions/swap-goal-positions.js";
import UpdateDragIndex from "../actions/update-drag-index.js";
import UpdateDragoverIndex from "../actions/update-dragover-index.js";

export default function goalView({ goal, index }) {
  const { id, description } = goal;

  return div(
    {
      draggable: "true",
      ondragstart: [UpdateDragIndex, index],
      ondragend: SwapGoalPositions,
      ondragover: [UpdateDragoverIndex, index],
    },
    [text(description), button({ onclick: [DeleteGoal, id] }, [text("Delete")])]
  );
}
