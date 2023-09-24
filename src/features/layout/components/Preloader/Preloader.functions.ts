import gsap from "gsap";
import { shouldAnimatePreloader } from "@functions/.";

function preloaderIsOver() {
  const preloaderOverCompleteEvent = new Event("preloaderIsOver");

  document.dispatchEvent(preloaderOverCompleteEvent);
}

export function animatePreloader(
  preloaderWrapper: Element,
  body: HTMLBodyElement,
) {
  const delay = 0;

  gsap
    .timeline()
    .call(() => {
      body.classList.add("o-hidden");
      preloaderWrapper?.classList.remove("d-none");
      body.style.backgroundColor = "#f4f0e6";
      body.style.opacity = "1";
    })
    .to(".preloader__item.one", {
      autoAlpha: 1,
      duration: 0,
      delay: delay,
    })
    .to(".preloader__item.one", {
      autoAlpha: 0,
      duration: 0,
      delay: 0.5,
    })
    .to(".preloader__item.two", {
      autoAlpha: 1,
      duration: 0,
      delay: 0,
    })
    .to(".preloader__item.two", {
      autoAlpha: 0,
      duration: 0,
      delay: 0.5,
    })
    .to(".preloader__item.three", {
      autoAlpha: 1,
      duration: 0,
      delay: 0,
    })
    .to(".preloader__item.three", {
      autoAlpha: 0,
      duration: 0,
      delay: 0.5,
    })
    // Hide preloader
    .to("#preloader", {
      y: "100%",
      duration: 0.75,
      ease: "power2.inOut",
    })
    // Reveal content
    .from("main", {
      scale: 1.01,
      y: "-5%",
      duration: 0.5,
      delay: -0.4,
      ease: "power1.inOut",
    })
    .call(() => {
      body.classList.remove("o-hidden");
      sessionStorage.setItem("isPreloaderSeen", "true");
      preloaderIsOver();
    });
}

export function setDefaultBodyStyle(body: HTMLBodyElement) {
  body.style.backgroundColor = "var(--color-romance)";
  body.style.opacity = "1";
}

export function masterFunction() {
  const isPreloaderAnimationNeeded = shouldAnimatePreloader();
  const body = document.querySelector("body");
  if (!body) return;

  if (isPreloaderAnimationNeeded) {
    const preloaderWrapper = document.querySelector("#preloader");
    if (!preloaderWrapper) return;

    animatePreloader(preloaderWrapper, body);
  } else {
    setDefaultBodyStyle(body);
    preloaderIsOver();
  }
}
