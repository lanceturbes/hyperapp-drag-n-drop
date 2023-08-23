export default function DeleteGoal(state, goalId) {
  const newGoalList = state.goalList.filter((goal) => goal.id !== goalId);

  localStorage.setItem("goal-list", JSON.stringify(newGoalList));

  return {
    ...state,
    goalList: newGoalList,
  };
}
