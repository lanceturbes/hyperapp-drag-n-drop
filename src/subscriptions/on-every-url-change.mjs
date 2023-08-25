function listenToURLChanges(dispatch, action) {
  function handleUrlChange() {
    requestAnimationFrame(() => {
      dispatch(action, window.location.pathname)
    })
  }

  window.addEventListener("popstate", handleUrlChange)
  window.addEventListener("pushstate", handleUrlChange)

  return () => {
    window.removeEventListener("popstate", handleUrlChange)
    window.removeEventListener("pushstate", handleUrlChange)
  }
}

function onEveryURLChange(action) {
  return [listenToURLChanges, action]
}

export default onEveryURLChange
