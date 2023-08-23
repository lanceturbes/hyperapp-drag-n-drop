import saveGoalList from "../effects/save-goal-list.js";
import swapItemsInArray from "../utils/swap-items-in-array.js";

export default function SwapGoalPositions(state, dropIndex) {
  const { goalList, currentDragIndex } = state;
  const newGoalList = swapItemsInArray(goalList, currentDragIndex, dropIndex);
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
