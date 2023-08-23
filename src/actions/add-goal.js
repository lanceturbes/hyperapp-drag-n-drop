import saveGoalList from "../effects/save-goal-list.js";

export default function AddGoal(state, description) {
  const { goalList } = state;
  const newGoal = { id: Date.now(), description };
  const newGoalList = goalList.concat(newGoal);
  return [
    {
      ...state,
      goalList: newGoalList,
      goalEditValue: "",
    },
    [saveGoalList, { goalList: newGoalList }],
  ];
}
