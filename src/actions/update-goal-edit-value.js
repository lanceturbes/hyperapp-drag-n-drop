export default function UpdateGoalEditValue(state, nextValue) {
  return {
    ...state,
    goalEditValue: nextValue,
  };
}
