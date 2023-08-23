export default function AddGoal(state, goalDescription) {
  return {
    ...state,
    goalList: state.goalList.concat({
      id: Date.now(),
      description: goalDescription,
    }),
    goalEditValue: "",
  };
}
