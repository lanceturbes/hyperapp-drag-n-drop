import { button, li, text } from "@hyperapp/html";

import DeleteGoal from "@/actions/delete-goal.js";
import SwapGoalPositions from "@/actions/swap-goal-positions.js";
import UpdateDragIndex from "@/actions/update-drag-index.js";
import UpdateDragoverIndex from "@/actions/update-dragover-index.js";

export default function goalView(props) {
  const { goal, index, isHighlighted } = props;
  const { id, description } = goal;

  function handleDragEnter(state, event) {
    event.preventDefault();
    return state;
  }

  function handleDragOver(state, event) {
    event.preventDefault();
    const { dragoverIndex } = state;
    return index === dragoverIndex ? state : [UpdateDragoverIndex, index];
  }

  return li(
    {
      class: { "goal-item": true, highlight: isHighlighted },
      draggable: "true",
      ondragstart: [UpdateDragIndex, index],
      ondragend: SwapGoalPositions,
      ondragenter: handleDragEnter,
      ondragover: handleDragOver,
      ondragleave: [UpdateDragoverIndex, null],
      ondrop: [SwapGoalPositions, index],
    },
    [text(description), button({ onclick: [DeleteGoal, id] }, text("Delete"))]
  );
}
