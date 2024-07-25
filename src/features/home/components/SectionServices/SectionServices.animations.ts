import gsap from "gsap";

export function animateService() {
  const services = document.querySelectorAll("#service-list .service-item");
  const backgroundImageContainer: HTMLDivElement | null =
    document.querySelector("#service-background-image");
  if (!backgroundImageContainer) return;

  services.forEach((service) => {
    service.addEventListener("mouseenter", () => {
      const image = service.getAttribute("data-image");

      gsap
        .timeline()
        // DECALAGE DU TEXTE
        .to(service, {
          translateX: 20,
          duration: 0.33,
          ease: "expo.out",
        })
        // FERMETURE DU VOLET
        .to(
          "#service-image-cover",
          {
            x: "0",
            duration: 0.3,
            ease: "expo.out",
          },

          "-=0.33",
        )
        // Changement de la source de l'image
        .set("#service-background-image", {
          backgroundImage: `url(${image})`,
        })

        // OUVERTURE DU VOLET
        .to("#service-image-cover", {
          x: "-100%",
          duration: 0.3,
          ease: "expo.out",
        })
        // DEZOOM IMAGE
        .fromTo(
          "#service-background-image",
          {
            scale: 1.2,
          },
          {
            scale: 1.0,
            duration: 0.3,
            ease: "linear",
            delay: -0.3,
          },
        );
    });
    service.addEventListener("mouseleave", () => {
      gsap
        .timeline()
        // position originale du texte
        .to(service, {
          translateX: 0,
          duration: 0.33,
          ease: "expo.in",
        });
    });
  });
}

export function hideImageOnSectionOut() {
  const section = document.querySelector("#section-services");

  if (!section) return;
  section.addEventListener("mouseleave", () => {
    gsap // FERMETURE DU VOLET
      .to("#service-image-cover", {
        x: "0",
        duration: 0.3,
        ease: "expo.out",
      });
  });
}
