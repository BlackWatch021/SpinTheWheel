import React from "react";
import "./Offer.css";

const Offer = (prop) => {
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
    "BUY 1 GET 1 FREE",
    "FREE COFFEE MUG ON PURCHASE WORTH 1000+",
    " Buy 2 Effervescent tablets & get 1 free",
    "Free 50g teaon purchase of Rs. 500",
    "HOT CHOCLATE FREE WITH TEA",
  ];

  console.log(prop.offer);
  return (
    <div className="main_content_wrapper_offer">
      <div className="main_content_offer">
        <img src="./Assets/Images/mockWheel.png" alt="" />
        <div className="user_details_offer">
          <span className="span1">Congrats! You Won:</span>
          <h1>{offers[prop.offer]}</h1>

          <div className="offer">
            <div>{code[prop.offer]}</div>
            <button>Copy</button>
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
