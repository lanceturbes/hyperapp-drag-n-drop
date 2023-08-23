export default function DeleteGoal(state, goalId) {
  return {
    ...state,
    goalList: state.goalList.filter((goal) => goal.id !== goalId),
  };
}
