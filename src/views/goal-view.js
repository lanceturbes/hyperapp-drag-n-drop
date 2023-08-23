import { button, li, text } from "@hyperapp/html";
import DeleteGoal from "../actions/delete-goal.js";

export default function goalView(goal) {
  const { id, description } = goal;

  return li([
    text(description),
    button({ onclick: [DeleteGoal, id] }, text("Delete")),
  ]);
}
