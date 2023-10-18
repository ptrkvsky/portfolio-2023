import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function changeColor() {
  ScrollTrigger.create({
    trigger: "#section-projets",
    start: "140px bottom",
    endTrigger: "footer",
    onToggle: ({ direction }) => {
      if (direction == 1) {
        document.documentElement.style.setProperty(
          "--color-absolute-zero",
          "hsl(42.86deg 38.89% 92.94%)",
        );

        document.documentElement.style.setProperty(
          "--color-romance",
          "hsl(214 100% 35% / 100%)",
        );
      }
      if (direction == -1) {
        // Hide
        document.documentElement.style.setProperty(
          "--color-absolute-zero",
          "hsl(214 100% 35% / 100%)",
        );

        document.documentElement.style.setProperty(
          "--color-romance",
          "hsl(42.86deg 38.89% 92.94%)",
        );
      }
    },
  });
}
