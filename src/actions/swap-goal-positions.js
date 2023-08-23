import swapItemsInArray from "../utils/swap-items-in-array.js";

export default function SwapGoalPositions(state, dropIndex) {
  const { goalList, currentDragIndex } = state;
  return {
    ...state,
    goalList: swapItemsInArray(goalList, currentDragIndex, dropIndex),
    currentDragIndex: null,
  };
}
