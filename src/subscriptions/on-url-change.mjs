import ChangeRoute from "@/actions/change-route.mjs";

export default function onUrlChange(dispatch) {
  function handleUrlChange() {
    dispatch(ChangeRoute, window.location.pathname);
  }

  addEventListener("popstate", handleUrlChange);
  addEventListener("pushstate", handleUrlChange);

  return () => {
    removeEventListener("popstate", handleUrlChange);
    removeEventListener("pushstate", handleUrlChange);
  };
}
