import { button, form, input, label, text } from "@hyperapp/html";

import AddGoal from "../actions/add-goal.js";
import UpdateGoalEditValue from "../actions/update-goal-edit-value.js";

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
      id: "goal-edit-input",
      value: goalEditValue,
      oninput: handleInput,
    }),
    button({ type: "submit" }, text("Add")),
  ]);
}
