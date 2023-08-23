export default function AddNewGoal(state, goalDescription) {
  return {
    ...state,
    goalList: state.goalList.concat({
      id: Date.now(),
      description: goalDescription,
    }),
    goalEditValue: "",
  };
}
