import React, { useState } from "react";
import "./Wheel.css";
import styled, { keyframes } from "styled-components";

const rotateWheel = keyframes`
from{
  transform: rotate(0deg);
}
to{
  transform: rotate(3240deg);
  /* transform: rotate(${(props) => props.deg}); */
}
`;

const WheelContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > .letsRotate {
    animation-name: ${rotateWheel};
    animation-duration: 6s;
    animation-timing-function: ease-in-out;
    animation-delay: 0s;
    animation-fill-mode: forwards;
    /* animation:  6s ease-in-out 0s forwards; */
  }

  > img:nth-child(1) {
    width: 486.6px;
    height: 450.75px;
    transition: all 0.5s;
  }
  > img:nth-child(2) {
    position: absolute;
    top: 280px;
    width: 45px;
    height: 55px;
  }
  > button {
    cursor: pointer;
    color: white;
    background-color: #146531;
    font-family: "Poppins", sans-serif;
    width: 140px;
    height: 60px !important;
    font-size: 14pt;
    padding: 10px 0px;
    margin: 20px 0px 10px 0px;
    border-radius: 50px;
    border: none;
  }
`;

const Wheel = () => {
  const [rotate, setRotate] = useState("");

  const animateImg = {
    /* animation-name: ${rotateWheel}; */
  };
  return (
    <div className="main_body">
      <img
        className="desktop_back"
        src="./Assets/Others/desktopBack.svg"
        alt=""
      />
      <img
        className="desktop_back"
        src="./Assets/Others/desktopBackBottom.svg"
        alt=""
      />
      <img
        className="tablet_back"
        src="./Assets/Others/tabletBack.svg"
        alt=""
      />
      <img
        className="tablet_back"
        src="./Assets/Others/tabletBackBottom.svg"
        alt=""
      />
      <WheelContainer deg={"240deg"} className="Wheel_body">
        <img className={rotate} src="./Assets/Images/wheel.png" alt="" />
        <img src="./Assets/Images/pointer.png" alt="" />
        <button type="submit" onClick={() => setRotate("letsRotate")}>
          Spin
        </button>
      </WheelContainer>
    </div>
  );
};

export default Wheel;
