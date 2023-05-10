export const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;

export const scrollDistance = (callback: Function, refresh: number = 66) => {
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
