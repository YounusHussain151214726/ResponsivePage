import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const first = () => {
  return (
    <div>
      <div className="Container">
      <div className="subContainer">
        <div className="facebook" >
          <FaFacebookF />
        </div>

        <div className="twitter" >
          <FaTwitter />
        </div>
        <div className="instagram">
          <FaInstagram />
        </div>
        <div className="youtube">
          <FaYoutube />
        </div>

       
        <div className="whatsapp">
        <a href="https://www.whatsapp.com/">       <FaWhatsapp  /> </a>
        </div>
    
        
<div className="heading">
    <span>QURBANI FOR</span>
</div>

      <div className="topright">   
    
  < button className="button1">
UK Donors</button>

  <button  className="button2">
  Donate Now
      </button>
           

      <button  className="button3">
      PIAIC Fee

      </button>
      </div>
    </div>  
      
      
      
      
      
      </div>




    </div>
  );
};

export default first;
