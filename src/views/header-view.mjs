import html from "hyperlit"

import darkModeToggleView from "@/views/dark-mode-toggle-view.mjs"

const handleNavigate = pathname => (state, event) => {
  event.preventDefault()
  if (location.pathname !== pathname) {
    history.pushState({}, "", pathname)
    dispatchEvent(new CustomEvent("pushstate"))
  }
  return state
}

const headerView = () => html`
  <header class="header">
    <a onclick=${handleNavigate("/")}>Home</a>
    <a onclick=${handleNavigate("/about")}>About</a>
    <${darkModeToggleView} />
  </header>
`

export default headerView
