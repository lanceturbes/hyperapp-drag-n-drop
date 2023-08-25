import html from "hyperlit"

import aboutView from "@/pages/about-view.mjs"
import homeView from "@/pages/home-view.mjs"

const routes = {
  "/about": aboutView,
  "/": homeView
}

const routerView = state =>
  state.location in routes
    ? html`<${routes[state.location]} ...${state} />`
    : html`<${homeView} ...${state} />`

export default routerView
