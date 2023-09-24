export function setBodyBackground(isPreloaderNeeded: boolean) {
  const body = document.querySelector("body");

  if (!body) return;
  if (isPreloaderNeeded) {
    const absoluteZero = "var(--absolute-zero)";
    body.style.backgroundColor = absoluteZero;
  } else {
    const nomadColor = "var(--color-romance)";
    body.style.backgroundColor = nomadColor;
  }
}
