import swapItemsInArray from "../utils/swap-items-in-array.js";

export default function SwapGoalPositions(state) {
  const { goalList, currentDragIndex, dragoverIndex } = state;
  return {
    ...state,
    goalList: swapItemsInArray(goalList, currentDragIndex, dragoverIndex),
    currentDragIndex: null,
    dragoverIndex: null,
  };
}
