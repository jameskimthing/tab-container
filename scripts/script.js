function setTitle(title) {
  if (!title) title = emptyTitle;
  document.title = title;
  updateTitle(title);
}

function setFavicon(favicon) {
  updateFavicon(favicon);
  const link = document.querySelector("link");
  currentSvg = null;

  if (favicon.match(isASite)) {
    if (!favicon.startsWith("https://")) favicon = "https://" + favicon;
    if (favicon.endsWith("/")) favicon += "favicon.ico";
    else favicon += "/favicon.ico";

    link.href = favicon;
  } else link.href = emptyFavicon;
}
