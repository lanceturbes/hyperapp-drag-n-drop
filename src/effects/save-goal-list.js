import GOAL_LIST_STORAGE_KEY from "../constants/goal-list-storage-key.js";

export default function saveGoalList(_, payload) {
  const { goalList } = payload;
  const goalListString = JSON.stringify(goalList);
  localStorage.setItem(GOAL_LIST_STORAGE_KEY, goalListString);
}
