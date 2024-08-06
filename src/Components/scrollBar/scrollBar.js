import React from "react";
import "./scrollBar.scss";

const ScrollBar = (props) => {
  let displayScrollBar = props.shouldDisplay;
  const mobileView = (window.innerWidth <= 800);
  const viewWindowHeight = window.innerHeight;
  const [scrollBarHeight, setScrollBarHeight] = React.useState([]);
  const [sectionHeightArr, setSectionHeightArr] = React.useState([]);
  const [labelMouseIn, setLabelMouseIn] = React.useState(false);
  const barFillRef = React.useRef(null);

  const initScrollBar = () => {
    if (!document.querySelector("#about-me-outter-wrap")) return;
    let documentHeight = document.documentElement.scrollHeight;
    let tempSectionHeightArr = [];
    let aboutMeWrapperDiv = document.querySelectorAll(
      "#about-me-outter-wrap > div"
    );

    let firstDivElementHeight = 0;
    let currentAccumHeight = 0;
    aboutMeWrapperDiv.forEach((divElement, index) => {
      currentAccumHeight = document.querySelector(`#${divElement.id}`)
        .offsetTop;
      if (index === 0) {
        firstDivElementHeight = currentAccumHeight;
        document.querySelector(".bar").style.marginTop = `${(
          (currentAccumHeight / documentHeight) *
          viewWindowHeight
        ).toFixed(2)}px`;
      }

      tempSectionHeightArr.push({
        elementHeight: (
          (currentAccumHeight / documentHeight) *
          viewWindowHeight
        ).toFixed(2),
        elementIndex: `00${String(index + 1)}`,
        elementName: divElement.id,
        accumulateHeight: currentAccumHeight,
        labelTitle: divElement.firstElementChild.firstElementChild.innerText.split(
          "\n"
        ),
      });
      if (index > 0) {
        scrollBarHeight.push(
          tempSectionHeightArr[index].elementHeight -
            tempSectionHeightArr[index - 1].elementHeight
        );
      }
    });

    document.querySelector(".bar").style.height = `${(
      ((currentAccumHeight - firstDivElementHeight) / documentHeight) *
      viewWindowHeight
    ).toFixed(2)}px`;
    setScrollBarHeight(scrollBarHeight);
    setSectionHeightArr(tempSectionHeightArr);
  };

  React.useEffect(() => {
    if (sectionHeightArr.length === 0) {
      initScrollBar();
    }
    window.addEventListener("scroll", pageScrollFunc);
    window.addEventListener("resize", initScrollBar);
    return (_) => {
      window.removeEventListener("resize", initScrollBar);
      window.removeEventListener("scroll", pageScrollFunc);
    };
  });

  const pageJumpFunc = (elementId) => {
    document.querySelector(`#${elementId}`).scrollIntoView();
  };

  const pageScrollFunc = () => {
    if (!displayScrollBar) return;
    let currentPosition = Math.ceil(window.pageYOffset);
    for (let index = 0; index < sectionHeightArr.length; index++) {
      let prevElement = index > 0 ? sectionHeightArr[index - 1] : null;
      let currentElement = sectionHeightArr[index];

      if (currentPosition >= currentElement.accumulateHeight) {
        if (index === 0) {
          document
            .querySelector(`#scrollBarPoint${index}`)
            .classList.remove("point--complete");
          document
            .querySelector(`#scrollBarPoint${index}`)
            .classList.add("point--active");
        }
        if (index > 0) {
          document
            .querySelector(`#scrollBarPoint${index - 1}`)
            .classList.remove("point--active");
          document
            .querySelector(`#scrollBarPoint${index - 1}`)
            .classList.add("point--complete");
        }
        if (index === sectionHeightArr.length - 1) {
          document
            .querySelector(`#scrollBarPoint${index}`)
            .classList.remove("point--active");
          document
            .querySelector(`#scrollBarPoint${index}`)
            .classList.add("point--complete");
          document.querySelector(`#scrollBarPoint${index}`);
        }
        continue;
      }

      if (prevElement) {
        document
          .querySelector(`#scrollBarPoint${index - 1}`)
          .classList.add("point--active");
        let intervalHeight =
          currentElement.accumulateHeight - prevElement.accumulateHeight;
        let currentPercentage =
          (currentPosition - prevElement.accumulateHeight) / intervalHeight;
        let barFillHeight = currentPercentage * scrollBarHeight[index - 1];
        let baseHeight = scrollBarHeight
          .slice(0, index - 1)
          .reduce((acc, cur) => {
            return acc + parseFloat(cur);
          }, 0);
        barFillHeight += baseHeight;
        barFillRef.current.style.height = `${barFillHeight.toFixed(2)}px`;
      }

      // remove the active and complete point class
      for (
        let tempIndex = index;
        tempIndex < sectionHeightArr.length;
        tempIndex++
      ) {
        document
          .querySelector(`#scrollBarPoint${tempIndex}`)
          .classList.remove("point--active");
        document
          .querySelector(`#scrollBarPoint${tempIndex}`)
          .classList.remove("point--complete");
      }
      break;
    }
  };

  return (
    <div className={"progress " + (displayScrollBar ? "active" : "")}>
      <div className="bar">
        <div className="bar__fill" ref={barFillRef} />
      </div>
      <div
          className={"blur-section " + (labelMouseIn ? "active" : "")}
          onMouseEnter={() => setLabelMouseIn(true)}
          onMouseLeave={() => setLabelMouseIn(false)}
        />
      <div className="point-group">
        {sectionHeightArr.map((el, index) => {
          return (
            <div
              className="point"
              id={`scrollBarPoint${index}`}
              key={el.elementName}
              style={{ marginTop: `${el.elementHeight}px` }}
              onClick={() => {
                pageJumpFunc(el.elementName);
              }}
            >
              <div className="bullet"></div>
              <div>
                <label
                  className={"label " + (labelMouseIn ? "active" : "")}
                  onMouseEnter={() => setLabelMouseIn(true)}
                  onMouseLeave={() => setLabelMouseIn(false)}
                >
                  {el.labelTitle[0]} <br />
                  <span>
                    {labelMouseIn ? el.labelTitle.slice(1).join(" ") : ""}
                  </span>
                </label>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScrollBar;
