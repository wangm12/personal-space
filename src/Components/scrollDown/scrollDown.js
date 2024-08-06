import React, { useState, useEffect } from "react";
import "./scrollDown.scss";

const ScrollDown = (props) => {
  let displayScrollDown = props.shouldDisplay;
  const [mobileCheck, setMobileCheck] = useState(window.innerWidth <= 800);

  // change scroll down effect based on the window width
  useEffect(() => {
    const handleResize = () => {
      if (mobileCheck === (window.innerWidth <= 800)) return;

      setMobileCheck(window.innerWidth <= 800);
    };

    window.addEventListener("resize", handleResize);
    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className={"scrollDownWrapper " + (displayScrollDown ? "active" : "")}>
      {mobileCheck ? (
        <section id="scroll01">
          <a href="#about-me-div">
            <span></span>
            <span></span>
            <span></span>
          </a>
        </section>
      ) : (
        <section id="scroll02">
          <a href="#about-me-div">
            <span></span>
          </a>
        </section>
      )}
    </div>
  );
};
export default ScrollDown;
