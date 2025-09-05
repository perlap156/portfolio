export function disableHoverOnTouch() {
  const isTouch =
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0;

  if (isTouch) {
    document.body.classList.add("no-hover");
  }
}
