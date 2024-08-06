import React, { useEffect } from "react";
import "@lottiefiles/lottie-player";
import emailjs from "emailjs-com";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import AOS from "aos";
import "./aboutMe.scss";
import "aos/dist/aos.css";

const AboutMe = (props) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [nameError, setNameError] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const [messageError, setMessageError] = React.useState(false);
  const [messageSent, setMessageSent] = React.useState(false);

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const checkNameInput = (event) => {
    checkSendButton();
    setNameError(event.target.value.trim() === "");
  };

  const checkEmailInput = (event) => {
    checkSendButton();
    let userEmail = event.target.value;
    setEmailError(!validateEmail(userEmail));
  };

  const checkMessageInput = (event) => {
    checkSendButton();
    setMessageError(event.target.value.trim() === "");
  };

  const checkSendButton = () => {
    let name = document.querySelector("#visitor-name").value;
    let email = document.querySelector("#visitor-email").value;
    let message = document.querySelector("#visitor-message").value;
    let check = name !== "" && validateEmail(email) && message !== "";
    let sendButton = document.querySelector("#send-button");
    if (!check) {
      if (sendButton.classList.contains("not-available")) return;
      sendButton.classList.add("not-available");
      return;
    }
    sendButton.classList.remove("not-available");
    return;
  };

  const startSendAnimation = () => {
    if (document.querySelector("#send-button"))
      document.querySelector("#send-button").classList.add("hidden");
    setMessageSent(true);
  };

  const endSendAnimation = () => {
    setMessageSent(false);
    if (document.querySelector("#send-button"))
      document.querySelector("#send-button").classList.remove("hidden");
  };

  const sendMessage = () => {
    let name = document.querySelector("#visitor-name").value;
    let email = document.querySelector("#visitor-email").value;
    let message = document.querySelector("#visitor-message").value;
    let emailData = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(
        "personal_website",
        "personal_website_temp",
        emailData,
        "user_KBxp72QJaUNv8nJzbiWe9"
      )
      .then(
        (result) => {
          resetContactForm();
          checkSendButton();
          setTimeout(() => {
            startSendAnimation();
          }, 500);
          setTimeout(() => {
            endSendAnimation();
          }, 10000);
          console.log(result);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const resetContactForm = () => {
    document.querySelector("#visitor-name").value = "";
    document.querySelector("#visitor-email").value = "";
    document.querySelector("#visitor-message").value = "";
  };

  return (
    <div id="about-me-outter-wrap">
      <div id="about-me-div">
        <div
          className="paragraph-div"
          data-aos="fade-up"
          data-aos-anchor-placement="center-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h1 className="section-paragraph section-title">
            <small> (001) </small> <br />
            WHO AM I?
          </h1>
        </div>

        <div
          className="paragraph-div"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph section-name">
            Hello<small>,</small>My name is <br />
            <span className="name-text">MINGJIE WANG</span>.
          </h2>
        </div>

        <div
          className="paragraph-div mb5vh"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph section-text">
            I'm a Full Stack Software Engineer working at Uber.
          </h2>
        </div>

        <div
          className="paragraph-div mt5vh mb5vh"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph section-text">
            <span className="cross-text">A recent graduate</span> An alumni from{" "}
            <a
              className="school-text"
              href="https://www.rpi.edu/"
              target="_blank"
              rel="noreferrer"
            >
              RPI
            </a>
            , NY.
          </h2>
        </div>

        <div
          className="paragraph-div mt5vh mb5vh"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph section-text">
            I believe
            <span className="name-text"> LESS is MORE</span>. <br />
            All of my <span className="cross-text">outfit</span> work reflect my
            addiction of <span className="minimalism-text">Minimalism</span>.
          </h2>
        </div>

        <div
          className="paragraph-div mt5vh mb5vh"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph section-text">
            I am constantly <br />
            <span className="level-up-text">
              <span>l</span>
              <span>e</span>
              <span>v</span>
              <span>e</span>
              <span>l</span>
              <span>i</span>
              <span>n</span>
              <span>g</span> <span>u</span>
              <span>p</span>
            </span>{" "}
            my skills. <br />
            <div className="focus">
              <div className="focus--mask">
                <div className="focus--mask-inner">FOCUSING</div>
              </div>
            </div>{" "}
            on front-end at this moment.
          </h2>
        </div>

        <div
          className="paragraph-div mt5vh mb5vh"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph section-text">
            My goal is to <span className="cross-text">know</span>{" "}
            <span className="love-text">LOVE</span> what I am doing and{" "}
            <span className="cross-text">don't mess it up </span>
            take it to <span className="love-text">ANOTHER LEVEL.</span>
          </h2>
        </div>
      </div>

      <div id="more-about-me-div">
        <div
          className="paragraph-div"
          data-aos="zoom-in-right"
          data-aos-anchor-placement="center-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h1 className="section-paragraph section-title">
            <small> (002) </small> <br />
            WHY I AM AN <span className="awesome-text">AWESOME</span> DEVELOPER?
          </h1>
        </div>

        <div
          className="paragraph-div mb5vh"
          data-aos="zoom-in-right"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph more-section-text">
            I have no <span className="adj-text">fear</span>
            <br />
            bcs I play with <span className="python-text">Python</span>
          </h2>
        </div>

        <div
          className="paragraph-div mt5vh mb5vh"
          data-aos="zoom-in-right"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph more-section-text">
            I stay up <span className="adj-text">all night</span>
            <br />
            bcs I use <span className="java-text">Java</span>
          </h2>
        </div>

        <div
          className="paragraph-div mt5vh mb5vh"
          data-aos="zoom-in-right"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph more-section-text">
            I <span className="adj-text">plan</span> the night{" "}
            <span className="adj-text">well</span>
            <br />
            bcs I write <span className="js-text">JavaScript</span>
          </h2>
        </div>

        <div
          className="paragraph-div mt5vh mb5vh"
          data-aos="zoom-in-right"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph more-section-text">
            My code is so <span className="adj-text">fast</span>
            <br />
            bcs I use <span className="express-text">Express</span>
          </h2>
        </div>

        <div
          className="paragraph-div mt5vh mb5vh"
          data-aos="zoom-in-right"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph more-section-text">
            I never <span className="adj-text">compromise</span>
            <br />
            bcs I know <span className="angular-text">ANGULAR</span>
          </h2>
        </div>

        <div
          className="paragraph-div mt5vh mb5vh"
          data-aos="zoom-in-right"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph more-section-text">
            I act <span className="adj-text">fast</span>
            <br />
            bcs I know <span className="react-text">React</span>
          </h2>
        </div>

        <div
          className="paragraph-div mt5vh mb5vh"
          data-aos="zoom-in-right"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph more-section-text">
            I always <span className="adj-text">introspect</span>
            <br />
            bcs I know <span className="redux-text">Redux</span>
          </h2>
        </div>

        <div
          className="paragraph-div mt5vh mb5vh"
          data-aos="zoom-in-right"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph more-section-text">
            My code has <span className="adj-text">no</span> bugs
            <br />
            bcs I told them to <span className="go-text">GO</span> away
          </h2>
        </div>

        <div
          className="paragraph-div mt5vh mb5vh"
          data-aos="zoom-in-right"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph more-section-text">
            My code is so <span className="adj-text">sexy</span>
            <br />
            and it should be rated <span className="r-text">R</span>
          </h2>
        </div>

        <div
          className="paragraph-div mt5vh mb5vh"
          data-aos="zoom-in-right"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph section-small-name">
            MOST <span className="important-text">IMPORTANTLY</span>
          </h2>
        </div>

        <div
          className="paragraph-div mt5vh mb5vh"
          data-aos="zoom-in-right"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph section-small-name">
            I GET THINGS <span className="done-text">DONE</span>!
          </h2>
        </div>
      </div>

      <div id="about-my-work-div">
        <div
          className="paragraph-div"
          data-aos="flip-up"
          data-aos-anchor-placement="center-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h1 className="section-paragraph section-title">
            <small> (003) </small> <br />
            WHAT HAVE I DONE?
          </h1>
        </div>

        <div
          className="paragraph-div mt5vh mb5vh"
          data-aos="flip-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph work-section-title">
            Full Stack Software Engineer <br />
            <span className="work-company-name work-section-small-font">
              <span className="at-text">@</span> Uber
            </span>
            <span className="work-time-text work-section-small-font">
              2021.07 - present
            </span>
          </h2>
        </div>

        <div
          className="paragraph-div mt3vh mb3vh"
          data-aos="flip-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph work-section-text">
            <div className="work-section-row">
              <div className="work-section-dot">&#183;</div>
              <div className="work-section-detail">
                Developed and Maintained uRate
                <div className="work-section-small-detail">
                  <div className="work-section-small-detail-dot">-</div>
                  <div className="work-section-small-detail-text">
                    An Uber feedback system used across all Uber's applications
                    BOTH internally and externally.
                  </div>
                </div>
                <div className="work-section-small-detail">
                  <div className="work-section-small-detail-dot tech-dot">
                    *
                  </div>
                  <div className="work-section-small-detail-text">
                    Front end UI using FusionJS <br />
                    Widget using JavaScript <br />
                    Back end using NodeJS and Go <br />
                    Database using MySQL
                  </div>
                </div>
              </div>
            </div>
          </h2>
        </div>

        <div
          className="paragraph-div mt10vh mb5vh"
          data-aos="flip-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph work-section-title">
            Software Engineer <br />
            <span className="work-company-name work-section-small-font">
              <span className="at-text">@</span> Verizon ThingSpace
            </span>
            <span className="work-time-text work-section-small-font">
              2020.01 - 2021.07
            </span>
          </h2>
        </div>

        <div
          className="paragraph-div mt3vh mb3vh"
          data-aos="flip-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph work-section-text">
            <div className="work-section-row">
              <div className="work-section-dot">&#183;</div>
              <div className="work-section-detail">
                Developed and Maintained Verizon's{" "}
                <a
                  className="thingspace-link"
                  href="https://thingspace.verizon.com/index.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  ThingSpace
                </a>{" "}
                IoT platform
                <div className="work-section-small-detail">
                  <div className="work-section-small-detail-dot">-</div>
                  <div className="work-section-small-detail-text">
                    A Verizon Platform for users to manage and purchase their
                    IoT Devices.
                  </div>
                </div>
                <div className="work-section-small-detail">
                  <div className="work-section-small-detail-dot tech-dot">
                    *
                  </div>
                  <div className="work-section-small-detail-text">
                    Front end using Angular 2+ <br />
                    Static Content using AEM{" "}
                    <span className="small-text">
                      (Adobe Experience Manager)
                    </span>{" "}
                    <br />
                    Back end using NodeJS <br />
                  </div>
                </div>
              </div>
            </div>
          </h2>
        </div>

        <div
          className="paragraph-div mt3vh mb3vh"
          data-aos="flip-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph work-section-text">
            <div className="work-section-row">
              <div className="work-section-dot">&#183;</div>
              <div className="work-section-detail">
                Designed and Developed the <br />
                <a
                  className="thingspace-link"
                  href="https://thingspace.verizon.com/marketplace.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  IoT Marketplace
                </a>
                <div className="work-section-small-detail">
                  <div className="work-section-small-detail-dot">-</div>
                  <div className="work-section-small-detail-text">
                    Provides an annual revenue of 250 million dollar.
                  </div>
                </div>
                <div className="work-section-small-detail">
                  <div className="work-section-small-detail-dot">-</div>
                  <div className="work-section-small-detail-text">
                    In lead of the IoT Marketplace 2.0 to bring enhanced
                    shopping experience to customers using Hansen Catalog
                    Service.
                  </div>
                </div>
              </div>
            </div>
          </h2>
        </div>

        <div
          className="paragraph-div mt3vh mb3vh"
          data-aos="flip-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph work-section-text">
            <div className="work-section-row">
              <div className="work-section-dot">&#183;</div>
              <div className="work-section-detail">
                Developed SSO (Single Sign On)
                <div className="work-section-small-detail">
                  <div className="work-section-small-detail-dot">-</div>
                  <div className="work-section-small-detail-text">
                    User can login seamlessly from all ThingSpace portals to
                    Verizon's portals. Vice versa.
                  </div>
                </div>
                <div className="work-section-small-detail">
                  <div className="work-section-small-detail-dot tech-dot">
                    *
                  </div>
                  <div className="work-section-small-detail-text">
                    Implemented via IDM and Forgerock
                  </div>
                </div>
              </div>
            </div>
          </h2>
        </div>

        <div
          className="paragraph-div mt3vh mb3vh"
          data-aos="flip-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph work-section-text">
            <div className="work-section-row">
              <div className="work-section-dot">&#183;</div>
              <div className="work-section-detail">
                Implemented Medallia Journey Tracking over the whole platform
              </div>
            </div>
          </h2>
        </div>

        <div
          className="paragraph-div mt3vh mb3vh"
          data-aos="flip-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph work-section-text">
            <div className="work-section-row">
              <div className="work-section-dot">&#183;</div>
              <div className="work-section-detail">
                Migrated the whole static content from Hugo to AEM in 2 months.
              </div>
            </div>
          </h2>
        </div>

        <div
          className="paragraph-div mt3vh mb3vh"
          data-aos="flip-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph work-section-text">
            <div className="work-section-row">
              <div className="work-section-dot">&#183;</div>
              <div className="work-section-detail">
                Refactored the whole backend application and Migrated it from{" "}
                <br />
                Azure to AWS in 3 months.
              </div>
            </div>
          </h2>
        </div>

        <div
          className="paragraph-div mt10vh mb5vh"
          data-aos="flip-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph work-section-title">
            Machine Learning Software Engineering Research Intern <br />
            <span className="work-company-name work-section-small-font">
              <span className="at-text">@</span> Tetherless World Constellation
              Lab
            </span>
            <span className="work-time-text work-section-small-font">
              2018.05 - 2018.09
            </span>
          </h2>
        </div>

        <div
          className="paragraph-div mt3vh mb3vh"
          data-aos="flip-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph work-section-text">
            <div className="work-section-row">
              <div className="work-section-dot">&#183;</div>
              <div className="work-section-detail">
                Air Pollution Prediction App
                <div className="work-section-small-detail mt3vh">
                  <div className="work-section-small-detail-dot">-</div>
                  <div className="work-section-small-detail-text">
                    Developed and Designed a Machine Learning application to
                    predict days and locations of when air quality in China
                    would be most heavily polluted
                  </div>
                </div>
                <div className="work-section-small-detail">
                  <div className="work-section-small-detail-dot">-</div>
                  <div className="work-section-small-detail-text">
                    Built the machine learning model using Python and trained
                    using 3+ years of air pollution data
                  </div>
                </div>
                <div className="work-section-small-detail">
                  <div className="work-section-small-detail-dot">-</div>
                  <div className="work-section-small-detail-text">
                    Defined understandable semantics and data ontology for easy
                    access by researchers via the web, without any data
                    pre-processing
                  </div>
                </div>
              </div>
            </div>
          </h2>
        </div>

        {/* https://github.com/CognitiveHorizons/RPI-HEALS-Semantic-Data-Dictionaries.git */}
        <div
          className="paragraph-div mt3vh mb3vh"
          data-aos="flip-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph work-section-text">
            <div className="work-section-row">
              <div className="work-section-dot">&#183;</div>
              <div className="work-section-detail">
                NHANES Semantic Autopopulation Dictionary
                <div className="work-section-small-detail">
                  <div className="work-section-small-detail-dot">-</div>
                  <div className="work-section-small-detail-text">
                    Developed a Python program using NLP to parse and extra
                    semantic information from National Health and Nutrition
                    Examination Survey (NHANES) data in order to automatically
                    populate database tables
                  </div>
                </div>
                <div className="work-section-small-detail">
                  <div className="work-section-small-detail-dot">-</div>
                  <div className="work-section-small-detail-text">
                    Auto generated association data between attributes and
                    diseases (such as Diabetes -> Heart Disease) used by
                    researchers for solving health crises
                  </div>
                </div>
              </div>
            </div>
          </h2>
        </div>

        <div
          className="paragraph-div mt10vh mb5vh"
          data-aos="flip-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph work-section-title">
            Software Engineering Research Intern <br />
            <span className="work-company-name work-section-small-font">
              <span className="at-text">@</span> RPI Economics Department <br />{" "}
              - Dr. Yury Yatsynovich
            </span>
            <span className="work-time-text work-section-small-font">
              2018.05 - 2018.12
            </span>
          </h2>
        </div>

        <div
          className="paragraph-div mt3vh mb3vh"
          data-aos="flip-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph work-section-text">
            <div className="work-section-row">
              <div className="work-section-dot">&#183;</div>
              <div className="work-section-detail">
                Resume Parser
                <div className="work-section-small-detail">
                  <div className="work-section-small-detail-dot">-</div>
                  <div className="work-section-small-detail-text">
                    Developed a Python application to extra prominent and
                    relevant information from 100+ Economist resumes from the
                    United States and Russia to gather data for analyzing
                    economic backgrounds between the two countries
                  </div>
                </div>
              </div>
            </div>
          </h2>
        </div>
      </div>

      <div id="side-projects-div">
        <div
          className="paragraph-div"
          data-aos="fade-down-right"
          data-aos-anchor-placement="center-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h1 className="section-paragraph section-title">
            <small> (004) </small> <br />
            ANY SIDE PROJECTS?
          </h1>
        </div>

        <div
          className="paragraph-div mt5vh mb5vh"
          data-aos="fade-down-right"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph work-section-title">
            Verification Code Recognition System
          </h2>
        </div>

        <div
          className="paragraph-div mt3vh mb3vh"
          data-aos="fade-down-right"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph work-section-text">
            <div className="work-section-row">
              <div className="work-section-dot">&#183;</div>
              <div className="work-section-detail">
                Using CNN to automatically recognize Verification Code.
              </div>
            </div>
          </h2>
        </div>

        <div
          className="paragraph-div mt3vh mb3vh"
          data-aos="fade-down-right"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph work-section-text">
            <div className="work-section-row">
              <div className="work-section-dot">&#183;</div>
              <div className="work-section-detail">
                Achieving an accuracy rate of over 88%.
              </div>
            </div>
          </h2>
        </div>

        <div
          className="paragraph-div mt3vh mb3vh"
          data-aos="fade-down-right"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph work-section-text">
            <div className="work-section-row">
              <div className="work-section-dot tech-dot">*</div>
              <div className="work-section-detail">
                Tech Stacks: Python - Tensorflow2
              </div>
            </div>
          </h2>
        </div>

        <div
          className="paragraph-div mt5vh mb5vh"
          data-aos="fade-down-right"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph work-section-title">
            Apartment Management System - Website
          </h2>
        </div>

        <div
          className="paragraph-div mt3vh mb3vh"
          data-aos="fade-down-right"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph work-section-text">
            <div className="work-section-row">
              <div className="work-section-dot">&#183;</div>
              <div className="work-section-detail">
                Developed an apartment management system achieving the
                functionality of
                <div className="work-section-small-detail">
                  <div className="work-section-small-detail-dot">-</div>
                  <div className="work-section-small-detail-text">
                    Creating and Maintaining lease
                  </div>
                </div>
                <div className="work-section-small-detail">
                  <div className="work-section-small-detail-dot">-</div>
                  <div className="work-section-small-detail-text">
                    Rent Payment
                  </div>
                </div>
                <div className="work-section-small-detail">
                  <div className="work-section-small-detail-dot">-</div>
                  <div className="work-section-small-detail-text">
                    Managing Residences' scheduled services
                  </div>
                </div>
                <div className="work-section-small-detail">
                  <div className="work-section-small-detail-dot">-</div>
                  <div className="work-section-small-detail-text">
                    "Open-House visiting" Scheduling
                  </div>
                </div>
              </div>
            </div>
          </h2>
        </div>

        <div
          className="paragraph-div mt3vh mb3vh"
          data-aos="fade-down-right"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph work-section-text">
            <div className="work-section-row">
              <div className="work-section-dot">&#183;</div>
              <div className="work-section-detail">
                Provided safe user login and password encoding via Spring
                Security
              </div>
            </div>
          </h2>
        </div>

        <div
          className="paragraph-div mt3vh mb3vh"
          data-aos="fade-down-right"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph work-section-text">
            <div className="work-section-row">
              <div className="work-section-dot">&#183;</div>
              <div className="work-section-detail">
                Utilized CSS, Angular Material and Ignite UI for designing user
                friendly UI, including navbar, calendar, table, etc.
              </div>
            </div>
          </h2>
        </div>

        <div
          className="paragraph-div mt3vh mb3vh"
          data-aos="fade-down-right"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph work-section-text">
            <div className="work-section-row">
              <div className="work-section-dot tech-dot">*</div>
              <div className="work-section-detail">
                Tech Stacks:
                <div className="work-section-small-detail">
                  <div className="work-section-small-detail-dot tech-dot">
                    -
                  </div>
                  <div className="work-section-small-detail-text">
                    Front end: Angular 2+
                  </div>
                </div>
                <div className="work-section-small-detail">
                  <div className="work-section-small-detail-dot tech-dot">
                    -
                  </div>
                  <div className="work-section-small-detail-text">
                    Back end: Spring Boot Framework
                  </div>
                </div>
                <div className="work-section-small-detail">
                  <div className="work-section-small-detail-dot tech-dot">
                    -
                  </div>
                  <div className="work-section-small-detail-text">
                    Data base: PostgreSQL
                  </div>
                </div>
                <div className="work-section-small-detail">
                  <div className="work-section-small-detail-dot tech-dot">
                    -
                  </div>
                  <div className="work-section-small-detail-text">
                    Host: AWS
                  </div>
                </div>
              </div>
            </div>
          </h2>
        </div>

        <div
          className="paragraph-div mt5vh mb5vh"
          data-aos="fade-down-right"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph work-section-title">
            Scheduler - Android App
          </h2>
        </div>

        <div
          className="paragraph-div mt3vh mb3vh"
          data-aos="fade-down-right"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph work-section-text">
            <div className="work-section-row">
              <div className="work-section-dot">&#183;</div>
              <div className="work-section-detail">
                Developed an Android App to monitor the availability of all
                school facilities, such as gyms and reservation systems
              </div>
            </div>
          </h2>
        </div>

        <div
          className="paragraph-div mt3vh mb3vh"
          data-aos="fade-down-right"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph work-section-text">
            <div className="work-section-row">
              <div className="work-section-dot">&#183;</div>
              <div className="work-section-detail">
                Support real time events checking and event reservation
              </div>
            </div>
          </h2>
        </div>

        <div
          className="paragraph-div mt3vh mb3vh"
          data-aos="fade-down-right"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph work-section-text">
            <div className="work-section-row">
              <div className="work-section-dot tech-dot">*</div>
              <div className="work-section-detail">
                Tech Stacks: Java, MySQL & Python
              </div>
            </div>
          </h2>
        </div>

        <div
          className="paragraph-div mt5vh mb5vh"
          data-aos="fade-down-right"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph work-section-title">
            Hot Dog Recognition App{" "}
          </h2>
        </div>

        <div
          className="paragraph-div mt3vh mb3vh"
          data-aos="fade-down-right"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph work-section-text">
            <div className="work-section-row">
              <div className="work-section-dot">&#183;</div>
              <div className="work-section-detail">
                Inspired by the show Silicon Valley, <br />
                built a Neural network with a 200+ hot dog image training set
              </div>
            </div>
          </h2>
        </div>

        <div
          className="paragraph-div mt3vh mb3vh"
          data-aos="fade-down-right"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph work-section-text">
            <div className="work-section-row">
              <div className="work-section-dot">&#183;</div>
              <div className="work-section-detail">
                Function: get the RGB distribution, to determine if brand new
                images are hotdogs or not
              </div>
            </div>
          </h2>
        </div>

        <div
          className="paragraph-div mt3vh mb3vh"
          data-aos="fade-down-right"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph work-section-text">
            <div className="work-section-row">
              <div className="work-section-dot">&#183;</div>
              <div className="work-section-detail">Correctness ≈ 80%</div>
            </div>
          </h2>
        </div>

        <div
          className="paragraph-div mt3vh mb3vh"
          data-aos="fade-down-right"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph work-section-text">
            <div className="work-section-row">
              <div className="work-section-dot tech-dot">*</div>
              <div className="work-section-detail">
                Tech Stacks: Python - Tensorflow1
              </div>
            </div>
          </h2>
        </div>
      </div>

      <div id="talk-with-me">
        <div
          className="paragraph-div"
          data-aos="zoom-out-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h1 className="section-paragraph section-title">
            <small> (005) </small> <br />
            WANNA TALK TO THE <span className="squad-text">SQUAD</span>?
          </h1>
        </div>

        <div
          className="paragraph-div mt5vh mb5vh"
          data-aos="zoom-out-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <div className="section-paragraph contact-me-div">
            <div className="input-text-div">
              <h2 className="section-paragraph work-section-title input-text">
                NAME:
              </h2>
            </div>
            <div className="input-box-div">
              <input
                id="visitor-name"
                className="input-box"
                onKeyUp={(e) => checkNameInput(e)}
              />
            </div>
          </div>
          <div
            className={
              nameError ? "section-paragraph" : "section-paragraph hidden"
            }
          >
            <h2 className="error-text">Please enter your name</h2>
          </div>
        </div>

        <div
          className="paragraph-div mt5vh mb5vh"
          data-aos="zoom-out-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <div className="section-paragraph contact-me-div">
            <div className="input-text-div">
              <h2 className="section-paragraph work-section-title input-text">
                EMAIL:
              </h2>
            </div>
            <div className="input-box-div">
              <input
                id="visitor-email"
                className="input-box"
                onBlur={(e) => checkEmailInput(e)}
              />
            </div>
          </div>
          <div
            className={
              emailError ? "section-paragraph" : "section-paragraph hidden"
            }
          >
            <h2 className="error-text">Please enter a valid email</h2>
          </div>
        </div>

        <div
          className="paragraph-div mt5vh mb5vh"
          data-aos="zoom-out-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <div className="section-paragraph contact-me-div">
            <div className="input-text-div">
              <h2 className="section-paragraph work-section-title input-text">
                MESSAGE:
              </h2>
            </div>
            <div className="textbox-div">
              <textarea
                id="visitor-message"
                onChange={(e) => checkMessageInput(e)}
                className="text-area-box"
              />
            </div>
          </div>
          <div
            className={
              messageError ? "section-paragraph" : "section-paragraph hidden"
            }
          >
            <h2 className="error-text">
              Please write down some words you want to say to me
            </h2>
          </div>
        </div>

        <div
          className="paragraph-div mt0vh mb3vh button-div"
          data-aos="zoom-out-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          {!messageSent ? (
            <span
              id="send-button"
              className="send-text not-available"
              onClick={sendMessage}
            >
              SEND
            </span>
          ) : (
            <span id="send-animation-span" className="send-animation">
              <lottie-player
                src="https://assets7.lottiefiles.com/packages/lf20_pdjhggra.json"
                background="transparent"
                speed="0.8"
                autoplay
              ></lottie-player>
            </span>
          )}
        </div>

        <div className="paragraph-div mt0vh mb3vh sent-message-div">
          <div
            className={
              messageSent ? "section-paragraph" : "section-paragraph hidden"
            }
          >
            {messageSent ? (
              <h2 className="error-text pink-color">
                Message Sent! <br />I will get back to you ASAP!
              </h2>
            ) : null}
          </div>
        </div>
      </div>

      <div id="stalk-you">
        <div
          className="paragraph-div mb5vh"
          data-aos="zoom-out-up"
          data-aos-anchor-placement="center-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h1 className="section-paragraph section-title">
            <small> (006) </small> <br />
            HOW CAN I STALK YOU?
          </h1>
        </div>

        <div
          className="paragraph-div mt3vh mb10vh social-media-row"
          data-aos="zoom-out-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <div className="social-media-icon-wrapper">
            <span className="stalk-text">GITHUB</span>
            <a
              className="contatct-link"
              href="https://github.com/mingjiew97"
              target="_blank"
              rel="noreferrer"
            >
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_kysfwjwr.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </a>
          </div>
          <div className="social-media-icon-wrapper">
            <span className="stalk-text">FACEBOOK</span>
            <a
              className="contatct-link"
              href="https://www.facebook.com/profile.php?id=100005185428504"
              target="_blank"
              rel="noreferrer"
            >
              <lottie-player
                src="https://assets10.lottiefiles.com/packages/lf20_lmmjtzrd.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </a>
          </div>
          <div className="social-media-icon-wrapper">
            <span className="stalk-text">LINKEDIN</span>
            <a
              className="contatct-link"
              href="https://www.linkedin.com/in/frank-wong-licentious0907/"
              target="_blank"
              rel="noreferrer"
            >
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_p1mfdgpv.json"
                background="transparent"
                speed="1.5"
                loop
                autoplay
              ></lottie-player>
            </a>
          </div>
          <div className="social-media-icon-wrapper">
            <span className="stalk-text">WECHAT</span>
            <Popup
              trigger={
                <lottie-player
                  src="https://assets6.lottiefiles.com/packages/lf20_46fytun6.json"
                  mode="bounce"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                ></lottie-player>
              }
              modal
            >
              {(close) => (
                <div className="modal">
                  <button className="close" onClick={close}>
                    &times;
                  </button>
                  <img
                    className="qrcode"
                    src={require("./static/image/wechat-qrcode.png").default}
                    alt="wechat-qrcode"
                  />
                </div>
              )}
            </Popup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
