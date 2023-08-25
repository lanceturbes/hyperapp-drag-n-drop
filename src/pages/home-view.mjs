import html from "hyperlit"

import goalCreationFormView from "@/views/goal-creation-form-view.mjs"
import goalListView from "@/views/goal-list-view.mjs"

const homeView = ({ goalEditValue, dragoverIndex, goalList }) => html`
  <div class="goals__list">
    <${goalCreationFormView} goalEditValue=${goalEditValue} />
    <${goalListView} goalList=${goalList} dragoverIndex=${dragoverIndex} />
  </div>
`

export default homeView
