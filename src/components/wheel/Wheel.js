import React, { useState } from "react";
import "./Wheel.css";
import styled, { keyframes } from "styled-components";
import Offer from "../offer/Offer";

const rotateWheel = (deg) => keyframes`
from{
  transform: rotate(0deg);
}
to{
  transform: rotate(${deg});
}
`;

const WheelContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > .letsRotate {
    animation-name: ${(props) => rotateWheel(props.deg)};
    animation-duration: 6s;
    animation-timing-function: ease-in-out;
    animation-delay: 0s;
    animation-fill-mode: forwards;
  }

  > img:nth-child(1) {
    width: 486.6px;
    height: 450.75px;
    transition: all 0.5s;
  }
  > img:nth-child(2) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* top: 280px; */
    width: 45px;
    height: 55px;
  }
`;

const Wheel = () => {
  const [rotate, setRotate] = useState();
  const [nextPage, setNextPage] = useState(false);
  let [num, setNum] = useState();
  let degrees = [
    "3240deg",
    "3300deg",
    "3360deg",
    "3420deg",
    "3480deg",
    "3540deg",
  ];

  const clicked = () => {
    setNum(Math.round(Math.random() * 5));
    setRotate("letsRotate");
    setTimeout(() => setNextPage(true), 7000);
  };

  return (
    <div className="main_body">
      <img
        className="desktop_back"
        src="./Assets/Images/desktopBack.png"
        alt=""
      />
      <img
        className="desktop_back"
        src="./Assets/Images/desktopBackBottom.png"
        alt=""
      />
      <img
        className="tablet_back"
        src="./Assets/Images/tabletBack.png"
        alt=""
      />
      <img
        className="tablet_back"
        src="./Assets/Images/tabletBackBottom.png"
        alt=""
      />
      {nextPage ? (
        <Offer offer={num} />
      ) : (
        <div className="wheelContainer_wrapper">
          <WheelContainer deg={degrees[num]} className="Wheel_body">
            <img className={rotate} src="./Assets/Images/wheel.png" alt="" />
            <img src="./Assets/Images/pointer.png" alt="" />
          </WheelContainer>
          <button type="submit" onClick={clicked}>
            Spin
          </button>
        </div>
      )}
    </div>
  );
};

export default Wheel;
