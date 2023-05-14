export const random = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;

export const roundTo = (n: number, place: number) => {
  return +(Math.round(n + "e+" + place) + "e-" + place);
};

export const scrollDistance = (callback: CallableFunction, refresh: number = 66) => {
  // Make sure a valid callback was provided
  if (!callback || typeof callback !== "function") return;

  // Listen for scroll events
  window.addEventListener(
    "scroll",
    function (event) {
      // Variables
      let isScrolling: NodeJS.Timeout | undefined;
      let start: number | null = null;
      let end: number | null = null;
      let distance: number | null = null;
      let direction: number | null = null;

      // Set starting position
      if (!start) {
        start = window.pageYOffset;
      }

      // Clear our timeout throughout the scroll
      window.clearTimeout(isScrolling);

      // Set a timeout to run after scrolling ends
      isScrolling = setTimeout(function () {
        if (!start) return;
        // Calculate distance
        end = window.pageYOffset;

        distance = end - start;

        // Direcion
        if (start < end) {
          direction = 1;
        } else if (start === end) {
          direction = 0;
        } else {
          direction = -1;
        }

        // Run the callback
        callback(distance, start, end, direction);

        // Reset calculations
        start = null;
        end = null;
        distance = null;
        direction = null;
      }, refresh || 66);
    },
    false
  );
};

export const MathUtils = {
  // map number x from range [a, b] to [c, d]
  map: (x: number, a: number, b: number, c: number, d: number) => ((x - a) * (d - c)) / (b - a) + c,
  // linear interpolation
  lerp: (a: number, b: number, n: number) => (1 - n) * a + n * b,
};
