import { button, text } from "@hyperapp/html";

import toggleTheme from "@/effects/toggle-theme.mjs";

export default function darkModeToggleView() {
  return button(
    {
      onclick: (state, event) => {
        return [state, toggleTheme];
      },
    },
    text("Theme")
  );
}
