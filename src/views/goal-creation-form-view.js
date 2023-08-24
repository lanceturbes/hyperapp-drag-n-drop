import { button, form, input, label, text } from "@hyperapp/html";

import AddGoal from "@/actions/add-goal.js";
import UpdateGoalEditValue from "@/actions/update-goal-edit-value.js";

export default function goalCreationFormView(props) {
  const { goalEditValue } = props;

  function handleSubmit(state, formEvent) {
    formEvent.preventDefault();
    return [AddGoal, state.goalEditValue];
  }

  function handleInput(_, inputEvent) {
    return [UpdateGoalEditValue, inputEvent.target.value];
  }

  return form({ onsubmit: handleSubmit }, [
    label({ for: "goal-edit-input" }, text("New Goal")),
    input({
      autocomplete: "off",
      autofocus: true,
      id: "goal-edit-input",
      oninput: handleInput,
      value: goalEditValue,
    }),
    button({ type: "submit" }, text("Add")),
  ]);
}
