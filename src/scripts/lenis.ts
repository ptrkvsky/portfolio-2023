import Lenis from "@studio-freight/lenis";

const lenis = new Lenis({
  lerp: 0.075,
  smoothWheel: true,
});
const scrollFn = (time: number) => {
  lenis.raf(time);
  requestAnimationFrame(scrollFn);
};
requestAnimationFrame(scrollFn);
