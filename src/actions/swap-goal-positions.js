import saveGoalList from "@/effects/save-goal-list.js";
import swapItemsInArray from "@/utils/swap-items-in-array.js";

export default function SwapGoalPositions(state) {
  const { goalList, currentDragIndex, dragoverIndex } = state;
  const newGoalList = swapItemsInArray(
    goalList,
    currentDragIndex,
    dragoverIndex
  );
  return [
    {
      ...state,
      goalList: newGoalList,
      currentDragIndex: null,
      dragoverIndex: null,
    },
    [saveGoalList, { goalList: newGoalList }],
  ];
}
