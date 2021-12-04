import React from "react";

const mission = () => {
  return (
    <div className="mmd">
      <div className="mission">
        <h className="mh1"> MISSION AND UPCOMING PROJECTS</h>
        <div className="mb1">
          {" "}
          <img
            className="mimg1"
            src="https://www.saylaniwelfare.com/public_html/images/saylani/icons/Hepatitis.png"
          />{" "}
          <p className="p">HEPATITIS </p>
        </div>
        <div className="mb2">
          {" "}
          <img
            className="mimg2"
            src="https://www.saylaniwelfare.com/public_html/images/saylani/icons/housing.png"
          />{" "}
          <p className="p">HOUSING SOCIETY</p>
        </div>

        <div className="mb3">
          {" "}
          <img
            className="mimg3"
            src="https://www.saylaniwelfare.com/public_html/images/saylani/icons/IT.png"
          />{" "}
          <p className="p">IT LITERACY</p>
        </div>
        <div className="mb4">
          {" "}
          <img
            className="mimg4"
            src="https://www.saylaniwelfare.com/public_html/images/saylani/icons/tharparkar.png"
          />{" "}
          <p className="p">Tharparkar</p>
        </div>
      </div>

      <div className="mbb3">
        <h className="mh2">Upcoming Events</h>
        <hr />
        <marquee direction="up" scrollamount="2" onmouseover="this.stop();" onmouseover="this.start();" width="250" height="200">
          {" "}
          <p>
            {" "}
            Saylani Welfare Distributing Ration & Clothes to affected people of
            Balochistan. More Details
            <br />
            <br />
            Entry Test Accouncement (Graphic Designing & Video Editing/Animation
            Course) On Sunday 3rd March 2019 @ 11:00Am Vanue: 4rh Floor, Saylani
            Welfare International Trust HeadOffice Bahadurabad .
          </p>
        </marquee>
      </div>
    </div>
  );
};

export default mission;
