let currentColor = colors[0];

const svgs = [];
let currentSvg;
async function initializeIcons() {
  const container = document.getElementById("favicons");
  let faviconParam = urlParams.get("favicon");

  for (const favicon of favicons) {
    const svgText = await (await fetch(`icons/${favicon}.svg`)).text();
    const newSvg = new DOMParser().parseFromString(
      svgText,
      "image/svg+xml"
    ).documentElement;
    newSvg.style.height = "2.5rem";
    newSvg.style.width = "2.5rem";
    newSvg.classList.add("favicon");
    newSvg.setAttribute("stroke", currentColor);
    newSvg
      .querySelectorAll("*")
      .forEach((element) => element.setAttribute("stroke", currentColor));
    newSvg.addEventListener("pointerup", () => {
      setIcon(newSvg);
      currentSvg = newSvg;
      updateFavicon(`[fav]icons/${favicon}.svg`);
    });
    svgs.push(newSvg);
    container.appendChild(newSvg);

    if (faviconParam === `[fav]icons/${favicon}.svg`) {
      currentSvg = newSvg;
      setIcon(currentSvg);
    }
  }
}

function setIcon(svg) {
  const svgString = new XMLSerializer().serializeToString(svg);
  const svgDataUrl = "data:image/svg+xml," + encodeURIComponent(svgString);
  document.querySelector("link").href = svgDataUrl;
}

function setIconColors() {
  for (const svg of svgs) {
    svg.setAttribute("stroke", currentColor);
    svg
      .querySelectorAll("*")
      .forEach((element) => element.setAttribute("stroke", currentColor));
  }
}

function initializeColors() {
  const container = document.getElementById("colors");

  for (const color of colors) {
    const element = document.createElement("div");
    element.classList.add("color");
    element.style.height = "2.5rem";
    element.style.width = "2.5rem";
    element.style.backgroundColor = color;
    element.addEventListener("pointerup", () => {
      currentColor = color;
      updateColor(color);
      setIconColors();
      if (currentSvg) setIcon(currentSvg);
    });
    container.appendChild(element);
  }
}
