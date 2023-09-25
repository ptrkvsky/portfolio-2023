export function setBodyBackground(isPreloaderNeeded: boolean) {
  const body = document.querySelector("body");

  if (!body) return;
  if (isPreloaderNeeded) {
    body.style.backgroundColor = "var(--absolute-zero)";
  } else {
    body.style.backgroundColor = "var(--color-romance)";
  }
}
