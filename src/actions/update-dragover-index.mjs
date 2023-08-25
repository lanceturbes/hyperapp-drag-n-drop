export default function UpdateDragoverIndex(state, payload) {
  const newIndex = payload
  return { ...state, dragoverIndex: newIndex }
}
