import React, { useState } from "react";
import "./Offer.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Offer = (prop) => {
  const [codeCopied, setCodeCopied] = useState("notCopied");

  const code = [
    "XAXPDF20",
    "HARPD300",
    "NSXP3FN0",
    "BASEDF23",
    "NEXSDF21",
    "HAMAN021",
  ];

  const offers = [
    "30% SITEWIDE OFF",
    "HOT CHOCLATE FREE WITH TEA",
    "Free 50g tea on purchase of Rs. 500",
    " Buy 2 Effervescent tablets & get 1 free",
    "FREE COFFEE MUG ON PURCHASE WORTH 1000+",
    "BUY 1 GET 1 FREE",
  ];

  return (
    <div className="main_content_wrapper_offer">
      <div className="main_content_offer">
        <img src="./Assets/Images/mockWheel.png" alt="" />
        <div className="user_details_offer">
          <span className="span1">Congrats! You Won:</span>
          <h1>{offers[prop.offer]}</h1>

          <div className="offer">
            <div>{code[prop.offer]}</div>
            {/* <div>{code[2]}</div> */}
            <CopyToClipboard text={code[prop.offer]}>
              <button onClick={() => setCodeCopied("copied")}>Copy</button>
            </CopyToClipboard>
            <div className={codeCopied}>Copied</div>
          </div>

          <button type="submit">Close Panel & Copy</button>
          <span className="span2">
            *You can claim your coupon for 10 minutes only!
          </span>
        </div>
      </div>
    </div>
  );
};

export default Offer;
