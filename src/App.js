import React, { useState, useEffect } from "react";
import PageEnterAnimation from "./Components/pageEnterAnimation/pageEnterAnimation";
import ScrollDown from "./Components/scrollDown/scrollDown";
import AboutMe from "./Components/aboutMe/aboutMe";
import ScrollBar from "./Components/scrollBar/scrollBar";
import "./App.scss";

const App = () => {
  const [display, setDisplay] = useState(false);
  const [displayScrollDown, setDisplayScrollDown] = useState(false);
  const [fullyLoaded, setFullyLoaded] = useState(false);

  const showContent = () => {
    setDisplay(true);
    // enable scroll function
    let el = document.querySelector("body");
    if (el && el.classList.contains("prevent-scroll"))
      el.classList.remove("prevent-scroll");
  };

  const showScrollDown = () => {
    setDisplayScrollDown(true);
  };

  // hide the scroll down button when user scrolls down
  useEffect(() => {
    const hideScrollDown = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;

      (winScroll > 0.55 * window.innerHeight) ? setDisplayScrollDown(false) : setDisplayScrollDown(true);
      (winScroll <= window.innerHeight) ? setFullyLoaded(false) : setFullyLoaded(true);
    };

    window.addEventListener("scroll", hideScrollDown);
    return () => {
      window.removeEventListener("scroll", hideScrollDown);
    };
  });

  return (
    <div className="full-page-container">
      <ScrollBar shouldDisplay={fullyLoaded} /> 

      <div>
        <PageEnterAnimation
          showContent={() => showContent()}
          showScrollDown={() => showScrollDown()}
        />
        {display ? (
          <>
            <ScrollDown shouldDisplay={displayScrollDown} />{" "}
          </>
        ) : null}
      </div>

      {display ? (
        <>
          <AboutMe />
        </>
      ) : null}
    </div>
  );
};

export default App;
