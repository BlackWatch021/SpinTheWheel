import { useState } from "react";
import "./App.css";
import Wheel from "./components/wheel/Wheel";

function App() {
  let [change, setChange] = useState(false);

  return (
    <div className="main_container">
      <div className="main_wrapper">
        <div className="tablet_background">
          <img src="./Assets/Images/background.png" alt="" />
        </div>
        {change ? (
          <Wheel />
        ) : (
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
            <div className="main_content_wrapper">
              <div className="main_content">
                <img src="./Assets/Images/mockWheel.png" alt="" />
                <div className="user_details">
                  <h1>
                    This is how EngageBud
                    <br /> looks like in action!
                  </h1>
                  <form onSubmit={() => setChange(true)}>
                    <div className="input_fields">
                      <img
                        className="input_icons"
                        src="./Assets/Others/mail.svg"
                        alt=""
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="something@engagebud"
                        required
                      />
                    </div>
                    <div className="input_fields">
                      <img
                        className="input_icons"
                        src="./Assets/Others/phone.svg"
                        alt=""
                      />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="9004 23XXXX"
                        required
                      />
                    </div>

                    <div className="terms_conditions">
                      <input
                        className="check_the_box"
                        type="checkbox"
                        required
                      />
                      <span>
                        I agree to receiving recurring automated messages at the
                        number I have provided. Consent is not a condition to
                        purchase.
                      </span>
                    </div>
                    <button type="submit">Try your luck</button>
                  </form>
                  <span className="notice">
                    *You can spin the wheel only once! *If you win, you can
                    claim your coupon for 10 minutes only!
                  </span>

                  <div className="skip_it">
                    <span>No, I don't feel lucky</span>
                    <img src="./Assets/Others/skip.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
