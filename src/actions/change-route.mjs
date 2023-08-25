export default function ChangeRoute(state, payload) {
  const pathname = payload
  return { ...state, location: pathname }
}
