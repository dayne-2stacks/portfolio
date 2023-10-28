import { useState } from "react";
import { useSwipeable } from "react-swipeable";

export const useSwipeHorizontal = (currentSlide, slides) => {
  const [current, setCurrent] = useState(currentSlide);
  const handlers = useSwipeable({
    onSwiped: (e) => {
      console.log("You Swiped", e);
      if (e.deltaX > 0) {
        if (current === 0) {
          setCurrent(slides.length - 1);
        } else {
          setCurrent(Math.abs(current - 1) % slides.length); // Swipe right, go to the previous slide
        }
      } else if (e.deltaX < 0) {
        setCurrent((current + 1) % slides.length); // Swipe left, go to the next slide
      }
    },
    delta: 60,
    trackMouse: true,
  });
  return [handlers, current];
};
