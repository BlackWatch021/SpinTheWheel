import React, { useRef } from "react";
import "./Wheel.css";

const Wheel = () => {
  const img = useRef(null);
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
      <div className="Wheel_body">
        <img ref={img} src="./Assets/Images/wheel.png" alt="" />
        <button type="submit">Spin</button>
      </div>
    </div>
  );
};

export default Wheel;
