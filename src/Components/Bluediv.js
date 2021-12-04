import React from "react";

const bluediv = () => {
  return (
    <div className="blue">
      <div className="subblue">
        <div className="box1">
          <img
            className="img1"
            src="https://www.saylaniwelfare.com/public_html/images/saylani/icons/icon_food_png.png"
          />
          <h1 className="bh1">150,000</h1>
          <h className="bhhh1">
                 <span className="bds"> DAILY </span><br/> DASTARKHWAN <span className="bs1">(MONTHLY)</span>{" "}
          </h>
        </div>
        <div className="box2">
          <img
            className="img2"
            src="https://www.saylaniwelfare.com/public_html/images/saylani/icons/icon_family_png.png"
          />
          <h1 className="bh2">8,500</h1>
          <h className="bhhh2">
          <span className="bds">  FAMILY </span> ADOPTION <span className="bs2">(MONTHLY)</span>{" "}
          </h>
        </div>
        <div className="box3">
          <img
            className="img3"
            src="https://www.saylaniwelfare.com/public_html/images/saylani/icons/icon_medical_png.png"
          />
          <h1 className="bh3">53,749</h1>
          <h className="bhhh3">
            MEDICAL <span className="bs3">(MONTHLY)</span>{" "}
          </h>
        </div>
        <div className="box4">
          <img
            className="img4"
            src="https://www.saylaniwelfare.com/public_html/images/saylani/icons/icon_education_png.png" />
          <h1 className="bh3">53,749</h1>
          <h className="bhhh3">
            EDUCATION <span className="bs3">(MONTHLY)</span>{" "}
          </h>
        </div>
      </div>
    </div>
  );
};

export default bluediv;
