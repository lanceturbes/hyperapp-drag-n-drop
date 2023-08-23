import swapItemsInArray from "../utils/swap-items-in-array.js";

export default function SwapGoalPositions(state, dropIndex) {
  const { goalList, currentDragIndex } = state;

  const newGoalList = swapItemsInArray(goalList, currentDragIndex, dropIndex);

  localStorage.setItem("goal-list", JSON.stringify(newGoalList));

  return {
    ...state,
    goalList: newGoalList,
    currentDragIndex: null,
  };
}
