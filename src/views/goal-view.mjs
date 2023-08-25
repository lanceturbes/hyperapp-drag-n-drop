import html from "hyperlit"

import DeleteGoal from "@/actions/delete-goal.mjs"
import SwapGoalPositions from "@/actions/swap-goal-positions.mjs"
import UpdateDragIndex from "@/actions/update-drag-index.mjs"
import UpdateDragoverIndex from "@/actions/update-dragover-index.mjs"

const goalView = ({ goal: { id, description }, index, isHighlighted }) => html`
  <li
    class=${{ "goals__list-item": true, highlight: isHighlighted }}
    draggable="true"
    ondragstart=${[UpdateDragIndex, index]}
    ondragend=${SwapGoalPositions}
    ondragenter=${(state, event) => {
      event.preventDefault()
      return state
    }}
    ondragover=${(state, event) => {
      event.preventDefault()
      return index === state.dragoverIndex
        ? state
        : [UpdateDragoverIndex, index]
    }}
    ondragleave=${[UpdateDragoverIndex, null]}
    ondrop=${[SwapGoalPositions, index]}
  >
    <span class="goals__list-item-text">${description}</span>
    <button onclick=${[DeleteGoal, id]}>Delete</button>
  </li>
`

export default goalView
