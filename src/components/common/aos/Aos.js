// Available AOS animation names:
//
// Fade:
// - fade
// - fade-up
// - fade-down
// - fade-left
// - fade-right
// - fade-up-right
// - fade-up-left
// - fade-down-right
// - fade-down-left
//
// Flip:
// - flip-up
// - flip-down
// - flip-left
// - flip-right
//
// Slide:
// - slide-up
// - slide-down
// - slide-left
// - slide-right
//
// Zoom:
// - zoom-in
// - zoom-in-up
// - zoom-in-down
// - zoom-in-left
// - zoom-in-right
// - zoom-out
// - zoom-out-up
// - zoom-out-down
// - zoom-out-left
// - zoom-out-right
//
// AOS additional attributes:
// - data-aos-delay="300"
// - data-aos-duration="1000"
// - data-aos-easing="ease-in-out"
// - data-aos-offset="200"
// - data-aos-anchor-placement="top-bottom"

import { useCallback, useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import Aos from "aos";
import "./aos.css";
import "aos/dist/aos.css";

function AosContainer({
  delay,
  children,
  dataaos,
  style,
  animation_name_scroll_down,
  animation_name_scroll_up,
  ...rest
}) {
  const [scrollDirection, setScrollDirection] = useState("down");
  const [lastScroll, setLastScroll] = useState(window.scrollY);

  const handleScroll = useCallback(() => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll) {
      setScrollDirection("down");
    } else {
      setScrollDirection("up");
    }

    setLastScroll(currentScroll);
  }, [lastScroll]);

  useEffect(() => {
    Aos.init({
      duration: 300,
      easing: "ease-in-out",
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      sm={12}
      data-aos={
        dataaos
          ? dataaos
          : scrollDirection === "down"
          ? animation_name_scroll_down
          : animation_name_scroll_up
      }
      style={style}
      {...rest}
    >
      {children}
    </div>
  );
}

export default AosContainer;
