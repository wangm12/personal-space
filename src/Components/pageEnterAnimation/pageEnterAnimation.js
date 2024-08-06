import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import "./pageEnterAnimation.css";
var _ = require("lodash");

const PageEnterAnimation = ({ showContent, showScrollDown }) => {
  // set GSAP Timeline
  const [tl] = useState(new gsap.timeline());
  // name and dot animation
  useEffect(() => {
    tl.from(document.querySelector(".cover-name"), {
      opacity: 0,
      xPercent: -100,
      delay: 0.5,
      duration: 1,
      ease: "power1.out",
      yoyo: true,
    })
      .from(
        document.querySelector(".cover-dot"),
        {
          opacity: 0,
          yPercent: 100,
          delay: 0.5,
          repeatDelay: 1,
          duration: 1,
          ease: "power1.out",
        },
        0.01
      )
      .to(document.querySelector(".cover-dot"), {
        x: 30,
        duration: 1,
        ease: "power1.out",
      })
      .to(document.querySelector(".cover-dot"), {
        x: 0,
        duration: 0.5,
        ease: "power1.out",
      })
      .to(document.querySelector(".cover-name"), {
        opacity: 0,
        xPercent: -100,
        duration: 1,
        ease: "power1.out",
        yoyo: true,
      })
      .to(
        document.querySelector(".cover-dot"),
        {
          opacity: 0,
          duration: 1,
          ease: "expo.out",
        },
        3
      )
      .to(
        document.querySelector(".cover-1"),
        {
          xPercent: -100,
          duration: 1,
          ease: "power1.out",
        },
        3
      )
      .to(
        document.querySelector(".cover-2"),
        {
          xPercent: -100,
          duration: 1,
          ease: "power1.out",
        },
        3.2
      )
      .to(
        document.querySelector(".cover-3"),
        {
          xPercent: -100,
          duration: 1,
          ease: "power1.out",
        },
        3.4
      )
      .to(
        document.querySelector(".cover-4"),
        {
          xPercent: -100,
          duration: 1,
          ease: "power1.out",
        },
        3.6
      )
      .from(
        document.querySelector("#welcome-sentence01"),
        {
          xPercent: -100,
          duration: 1,
          ease: "power1.out",
          opacity: 0,
        },
        3.8
      )
      .from(
        document.querySelector("#welcome-sentence02"),
        {
          xPercent: -100,
          duration: 1,
          ease: "power1.out",
          opacity: 0,
        },
        4.0
      )
      .from(
        document.querySelector("#welcome-sentence03"),
        {
          xPercent: -100,
          duration: 1,
          ease: "power1.out",
          opacity: 0,
        },
        4.2
      )
      .from(
        document.querySelector("#welcome-sentence04"),
        {
          xPercent: -100,
          duration: 1,
          ease: "power1.out",
          opacity: 0,
          onComplete: () => {
            showScrollDown();
            showContent();
          },
        },
        4.4
      );
  }, [tl]);

  const elPercentDistanceToTop = (el) => {
    return el.getBoundingClientRect().top / window.innerHeight;
  };

  const welcomeSentenceAnimation = (i) => {
    let el1 = document.querySelector(`#welcome-sentence0${i}`);
    let tl1 = new gsap.timeline();
    if (
      elPercentDistanceToTop(el1) <= 0.04 &&
      !el1.classList.contains("hide-right")
    ) {
      tl1.clear();
      tl1.to(el1, {
        yPercent: -50,
        duration: 0.3,
        ease: "power1.inOut",
        opacity: 0,
        onComplete: () => {
          tl1.clear();
          el1.style.transform = "none";
          el1.classList.add("hide-right");
        },
      });
    } else if (
      elPercentDistanceToTop(el1) > 0.04 &&
      el1.classList.contains("hide-right")
    ) {
      tl1.clear();
      tl1.to(el1, {
        yPercent: 0,
        duration: 0.3,
        ease: "power1.inOut",
        opacity: 1,
        onComplete: () => {
          tl1.clear();
          el1.classList.remove("hide-right");
          el1.style.transform = "none";
          el1.classList.remove("hide-right");
        },
      });
    }
  }

  // hide the welcome sentence when user scrolls down
  useEffect(() => {
    const hideWelcomeSentence = () => {
      welcomeSentenceAnimation(1);
      welcomeSentenceAnimation(2);
      welcomeSentenceAnimation(3);
      welcomeSentenceAnimation(4);
    };

    const throttledCount = _.throttle(hideWelcomeSentence, 150);
    window.addEventListener("scroll", throttledCount);
    return () => window.removeEventListener("scroll", throttledCount);

  });

  return (
    <div className="page-enter-div">
      <div className="cover-4"></div>
      <div className="cover-3"></div>
      <div className="cover-2"></div>

      <div className="cover-1">
        <div className="cover-heading">
          <div className="cover-name">Mingjie Wang</div>
          <div className="cover-dot">.</div>
        </div>
      </div>

      <section className="welcome-sentence">
        <p id="welcome-sentence01">
          {" "}
          <span>W</span>ELCO<span>M</span>E TO{" "}
        </p>
        <p id="welcome-sentence02">
          {" "}
          <span>M</span>IN<span>G</span>JIE <span>WA</span>NG<span>'</span>S{" "}
        </p>
        <p id="welcome-sentence03">
          {" "}
          PE<span>R</span>SON<span>A</span>L SP<span>A</span>CE{" "}
        </p>
        <p id="welcome-sentence04"> (σ'ω')σ </p>
      </section>
    </div>
  );
};

export default PageEnterAnimation;
