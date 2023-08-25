import html from "hyperlit"

import goalView from "@/views/goal-view.mjs"
import isEqual from "@/utils/is-equal.mjs"

const goalListView = ({ dragoverIndex, goalList }) => html`
  <ul class="goals__list">
    ${goalList.map(
      (goal, index) => html`
        <${goalView}
          goal=${goal}
          index=${index}
          isHighlighted=${isEqual(index, dragoverIndex)}
        />
      `
    )}
  </ul>
`

export default goalListView
