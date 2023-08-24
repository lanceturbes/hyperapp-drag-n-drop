import { button, li, text } from "@hyperapp/html";

import DeleteGoal from "@/actions/delete-goal.mjs";
import SwapGoalPositions from "@/actions/swap-goal-positions.mjs";
import UpdateDragIndex from "@/actions/update-drag-index.mjs";
import UpdateDragoverIndex from "@/actions/update-dragover-index.mjs";

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
