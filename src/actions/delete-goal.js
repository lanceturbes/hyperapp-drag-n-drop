import saveGoalList from "@/effects/save-goal-list.js";

export default function DeleteGoal(state, payload) {
  const goalId = payload;
  const newGoalList = state.goalList.filter((goal) => goal.id !== goalId);
  return [
    { ...state, goalList: newGoalList },
    [saveGoalList, { goalList: newGoalList }],
  ];
}
