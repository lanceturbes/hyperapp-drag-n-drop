import html from "hyperlit"

import AddGoal from "@/actions/add-goal.mjs"
import UpdateGoalEditValue from "@/actions/update-goal-edit-value.mjs"

const goalCreationFormView = ({ goalEditValue }) => html`
  <form
    class="form"
    onsubmit=${({ goalEditValue }, event) => {
      event.preventDefault()
      return [AddGoal, goalEditValue]
    }}
  >
    <label for="goal-edit-input">New Goal</label>
    <div class="form__input-control">
      <input
        class="form__input"
        autocomplete="off"
        autofocus="true"
        id="goal-edit-input"
        oninput=${(_state, event) => [UpdateGoalEditValue, event.target.value]}
        value=${goalEditValue}
      />
      <button type="submit" disabled=${goalEditValue === ""}>Add</button>
    </div>
  </form>
`

export default goalCreationFormView
