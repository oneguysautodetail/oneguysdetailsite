import React from "react";
import { useInView } from "react-intersection-observer"
import "./scroll-reveal.styles.scss";

const ScrollReveal = ({ threshold = 0.15, triggerOnce = false, distance = 100, ...remainingProps }) => {
  const [ref, inView] = useInView({ threshold, triggerOnce })
  let { index } = remainingProps;
  return (
    <div
      className="scroll-reveal"
      ref={ref}
      style={{
        // adjust these as desired
        transition: `all 300ms ${50 * index}ms`,
        opacity: inView ? 1 : 0,
        transform: `translateY(${inView ? 0 : distance}px)`,
      }}
      {...remainingProps}
    />
  )
}

export default ScrollReveal