import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);

/**
 * Split text into chars or lines
 * @param selector - selector of element to split
 * @param typeSplit - type of split
 * @returns array of chars / lines
 */
export function splitText(
  selector: string | HTMLElement,
  typeSplit: "chars" | "lines" | "words" = "chars",
) {
  let elementToSplit: HTMLElement | null;

  if (typeof selector === `string`) {
    elementToSplit = document.querySelector(selector);
  } else {
    elementToSplit = selector;
  }

  if (!elementToSplit) return [];

  const elementSplited = new SplitText(elementToSplit, {
    type: `lines`,
  });

  const elementReSplited = new SplitText(elementSplited.lines, {
    type: typeSplit,
  });

  return elementReSplited[typeSplit];
}
