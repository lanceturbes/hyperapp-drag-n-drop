export default function toggleTheme() {
  const { documentElement } = document
  const currentTheme = documentElement.getAttribute("data-theme")
  const nextTheme = currentTheme === "light" ? "dark" : "light"
  documentElement.setAttribute("data-theme", nextTheme)
  localStorage.setItem("theme", nextTheme)
}
