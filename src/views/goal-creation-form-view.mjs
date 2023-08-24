import { button, div, form, input, label, text } from "@hyperapp/html";

import AddGoal from "@/actions/add-goal.mjs";
import UpdateGoalEditValue from "@/actions/update-goal-edit-value.mjs";

export default function goalCreationFormView(props) {
  const { goalEditValue } = props;

  function handleSubmit(state, formEvent) {
    formEvent.preventDefault();
    return [AddGoal, state.goalEditValue];
  }

  function handleInput(_, inputEvent) {
    return [UpdateGoalEditValue, inputEvent.target.value];
  }

  return form({ class: "form", onsubmit: handleSubmit }, [
    label({ for: "goal-edit-input" }, text("New Goal")),
    div({ class: "form__input-control" }, [
      input({
        class: "form__input",
        autocomplete: "off",
        autofocus: true,
        id: "goal-edit-input",
        oninput: handleInput,
        value: goalEditValue,
      }),
      button({ type: "submit", disabled: goalEditValue === "" }, text("Add")),
    ]),
  ]);
}
