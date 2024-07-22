import gsap from "gsap";

export function revealTitle() {
  const spans = document.querySelectorAll("#title-hero .split-text span");
  if (spans.length) {
    gsap.set(spans, {
      yPercent: "-100",
    });
  }
  document.addEventListener("introductionAnimationComplete", () => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "title-hero",
          endTrigger: "footer",
          start: "top 50%",
        },
      })
      .to(spans, {
        yPercent: 0,
        stagger: 0.2,
        duration: 0.5,
        ease: "expo.inOut",
      });
  });
}
