import "./intro.css";
import { init } from "ityped";
import { useEffect, useRef } from "react";

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 150,
      strings: ["Developer ", "Designer ", "Content Creator "],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets\incognito_code.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Timothy Mbachu</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets\down.png" alt="down" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
