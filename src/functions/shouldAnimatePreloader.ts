/**
 * Determines whether the preloader animation should be triggered based on specific conditions.
 *
 * The function checks if the preloader has been seen (stored in sessionStorage) and if the
 * current window's inner width is greater than 1024 pixels. If both conditions are met,
 * it returns `true` to indicate that the preloader animation is needed; otherwise, it returns `false`.
 *
 * @returns {boolean} `true` if the preloader animation is needed, `false` otherwise.
 */
export function shouldAnimatePreloader() {
  let isPreloaderAnimationNeeded = true;
  if (sessionStorage.getItem("isPreloaderSeen")) {
    isPreloaderAnimationNeeded = false;
  }
  if (window.innerWidth < 1025) {
    isPreloaderAnimationNeeded = false;
  }

  return isPreloaderAnimationNeeded;
}
