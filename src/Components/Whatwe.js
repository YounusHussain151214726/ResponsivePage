import { color, textAlign } from "@mui/system";
import React from "react";

const whatwe = () => {
  return (
    <div>
      <div className="logo1">
        <h1 className="h1">
          WHAT WE <span className="span1">ARE DOING ?</span>{" "}
        </h1>

        <span className="span2">
          {" "}
          <strong>_________</strong>{" "}
          <img
            className="logo2"
            src="https://www.saylaniwelfare.com/public_html/images/saylani/favicon.png"
          />
          <strong>_________</strong>{" "}
        </span>
      </div>

      <div className="boxs">
        <div className="wwb1">
          {" "}
          <img
            className="bimg1"
            src="https://www.saylaniwelfare.com/public_html/images/saylani/icons/onlinesadqah.png"
          />
          <br />
          <br />
          <h className="bhh1">ONLINE SADQAH</h>
        </div>
        <div className="wwb2">
          {" "}
          <img
            className="bimg2"
            src="https://www.saylaniwelfare.com/public_html/images/saylani/icons/welfare.png"
          />
          <br />
            <br />
          <h className="bhh2"> WELFARE</h>
        </div>
        <div className="wwb3">
          {" "}
          <img
            className="bimg3"
            src="https://www.saylaniwelfare.com/public_html/images/saylani/icons/medical.png"
          />
          <br />
          <br />
          <h className="bhh3"> MEDICAL</h>
        </div>

        <div className="wwb4">
          {" "}
          <img
            className="bimg4"
            src="https://www.saylaniwelfare.com/public_html/images/saylani/icons/Dastarkhwan.png"
          />
          <br />
          <br />
          <h className="bh4">Dastarkhwan</h>
        </div>
        <div className="wwb5">
          <img
            className="bimg5"
            src="https://www.saylaniwelfare.com/public_html/images/saylani/icons/ROPLANT.png"
          />
          <br />
          <br />
          <h className="bh5">RO PLANT</h>
        </div>
        <div className="wwb6">
          <img
            className="bimg6"
            src="https://www.saylaniwelfare.com/public_html/images/saylani/icons/education.png"
          />
          <br />
          <br />
          <h className="bh5">EDUCATION</h>
        </div>
      </div>
    </div>
  );
};

export default whatwe;
