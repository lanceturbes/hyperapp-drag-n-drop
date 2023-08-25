export default function setInitialTheme() {
  const lastTheme = localStorage.getItem("theme")
  if (lastTheme === "dark" || lastTheme === "light") {
    document.documentElement.setAttribute("data-theme", lastTheme)
  } else {
    document.documentElement.setAttribute("data-theme", "light")
    localStorage.setItem("theme", "light")
  }
}
