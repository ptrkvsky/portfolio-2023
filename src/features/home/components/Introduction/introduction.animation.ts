import { gsap } from "gsap";
import { splitText } from "src/utils/splitText";

export function animateTitle() {
  const titreSplited = splitText(".titre", "words");
  const introSplited = splitText(".introduction .text", "words");
  const fullText = [titreSplited, introSplited];
  const staggerIntro = introSplited?.length / 2000;

  gsap.set(fullText, { yPercent: -105 });

  //nameChars.length / 1000
  gsap
    .timeline({
      scrollTrigger: {
        trigger: "h1",
        endTrigger: "footer",
        start: "top 75%",
      },
    })
    // Titre
    .to(titreSplited, {
      duration: 0.5,
      yPercent: 0,
      stagger: 0.08,
      ease: "expo.inOut",
    })
    // Introduction
    .to(introSplited, {
      duration: 0.5,
      yPercent: 0,
      delay: -0.4,
      stagger: staggerIntro,
      ease: "expo.inOut",
    });
}
