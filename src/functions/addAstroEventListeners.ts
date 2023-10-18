export function addAstroEventListeners(animationFunction: () => void) {
  document.addEventListener("astro:after-swap", animationFunction);
  document.addEventListener("astro:page-load", animationFunction);
}
