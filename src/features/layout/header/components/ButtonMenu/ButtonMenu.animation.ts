import gsap from "gsap";

export function masterAnimation() {
  const menuButton = document.querySelector("#button-menu");
  const menu = document.querySelector("#menu-mobile");
  const textMenu = document.querySelector("#text-menu");
  const textFermer = document.querySelector("#text-fermer");
  const navItems = document.querySelectorAll(".mobile__menu-item");

  // Hide fermer
  gsap.set(textFermer, {
    translateY: "100%",
  });

  if (!menuButton || !menu || !textMenu || !textFermer || !navItems.length)
    return;

  // Init position for item menu
  gsap.set(navItems, {
    y: "100%",
  });

  menuButton.addEventListener("click", () => {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";

    menuButton.classList.toggle("open");
    menu.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", String(!isExpanded));
    menu.setAttribute("aria-hidden", String(isExpanded));

    // Cancel animation if it's already animating
    const menuButtonClassList = String(menuButton.classList.toString());
    if (menuButtonClassList.includes("is-animating")) return;

    const tlMenu = gsap
      .timeline({ paused: true })
      .call(() => {
        menuButton.classList.toggle("is-animating");
      })
      // Opacity menu
      .set(menu, {
        autoAlpha: 1,
      })
      // Hide Word Menu
      .fromTo(
        textMenu,
        {
          translateY: "0",
        },
        {
          translateY: "-100%",
          duration: 0.5,
          ease: "expo.inOut",
        },
      )

      // Reveal Panel
      .fromTo(
        menu,
        {
          translateY: "100%",
        },
        {
          translateY: "0",
          ease: "expo.inOut",
          duration: 1.2,
          delay: -0.9,
        },
      )
      // Reveal Word Fermer
      .fromTo(
        textFermer,
        {
          translateY: "100%",
        },
        {
          translateY: "0%",
          duration: 0.5,
          ease: "expo.inOut",
          delay: -0.25,
        },
      )
      // Reveal items menu
      .fromTo(
        navItems,
        {
          translateY: "100%",
          skewX: 10,
        },
        {
          skewX: 0,
          translateY: "0%",
          duration: 0.5,
          ease: "power2.inOut",
          delay: -0.7,
          stagger: 0.1,
        },
      )
      .call(() => {
        menuButton.classList.toggle("is-animating");
      });

    if (isExpanded) {
      tlMenu.reverse(0);
    } else {
      tlMenu.play(0);
    }
  });
}
