export function smoothScroll(): void {
  const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
  anchors.forEach((anchor) => {
    anchor.addEventListener("click", function (e: MouseEvent) {
      e.preventDefault();

      const href = this.getAttribute("href");
      if (href && href !== "#") {
        const target = document.querySelector<HTMLElement>(href);
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    });
  });
}
