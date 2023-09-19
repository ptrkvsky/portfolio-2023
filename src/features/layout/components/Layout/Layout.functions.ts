export function setBodyBackground(isPreloaderNeeded: boolean) {
  const body = document.querySelector("body");

  if (!body) return;
  if (isPreloaderNeeded) {
    const absoluteZero = "hsl(214 100% 35% / 100%)";
    body.style.backgroundColor = absoluteZero;
  } else {
    const nomadColor = "hsl(42.86deg 38.89% 92.94%)";
    body.style.backgroundColor = nomadColor;
  }
}
