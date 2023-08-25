export default function UpdateGoalEditValue(state, payload) {
  const nextValue = payload
  return { ...state, goalEditValue: nextValue }
}
