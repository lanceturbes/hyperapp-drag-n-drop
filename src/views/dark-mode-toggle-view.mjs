import html from "hyperlit"

import toggleTheme from "@/effects/toggle-theme.mjs"

const darkModeToggleView = () => html`
  <button onclick=${state => [state, toggleTheme]}>Theme</button>
`

export default darkModeToggleView
