function updateTitle(title) {
  const newURL = new URL(window.location.href);
  newURL.searchParams.set("title", title ?? "");
  history.pushState(null, "", newURL);
}

function updateFavicon(favicon) {
  const newURL = new URL(window.location.href);
  newURL.searchParams.set("favicon", favicon ?? "");
  history.pushState(null, "", newURL);
}

function updateColor(color) {
  const newURL = new URL(window.location.href);
  newURL.searchParams.set("color", color ?? "");
  history.pushState(null, "", newURL);
}
