import Lenis from "@studio-freight/lenis";

document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth > 1024) {
    const lenis = new Lenis({
      lerp: 0.075,
      smoothWheel: true,
    });
    const scrollFn = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(scrollFn);
    };
    requestAnimationFrame(scrollFn);
  }
});
