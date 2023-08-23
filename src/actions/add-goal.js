export default function AddGoal(state, goalDescription) {
  const { goalList } = state;

  const newGoalList = goalList.concat({
    id: Date.now(),
    description: goalDescription,
  });

  localStorage.setItem("goal-list", JSON.stringify(newGoalList));

  return {
    ...state,
    goalList: newGoalList,
    goalEditValue: "",
  };
}
