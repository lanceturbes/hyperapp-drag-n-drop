export default function UpdateDragIndex(state, payload) {
  const newIndex = payload
  return { ...state, currentDragIndex: newIndex }
}
