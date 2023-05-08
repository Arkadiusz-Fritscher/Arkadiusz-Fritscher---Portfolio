import { gsap } from "gsap";

export const observe = (selector: string, cb: IntersectionObserverCallback) => {
  const options = {
    threshold: 0,
  };
  const observer = new IntersectionObserver(cb, options);
  const elements = document.querySelectorAll(selector);

  if (!elements || !elements.length) {
    console.error("Can't find element to observe");
  }

  const elementsArray = Array.from(elements);

  elementsArray.forEach((element) => {
    observer.observe(element);
  });

  return observer;
};

export const cardTilt = (event) => {};
