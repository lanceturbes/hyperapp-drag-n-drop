export default function getStoredGoals() {
  const goalListString = localStorage.getItem("goal-list");
  return goalListString ? JSON.parse(goalListString) : [];
}
