import React from 'react'
import { FaPhoneAlt  , FaGlobe} from "react-icons/fa";
import { SiGmail} from "react-icons/si";

import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaWhatsapp,
  } from "react-icons/fa";

const footer =()=>{

    return (
        <div className="fmd">
 
 <div className="bfoo">

<div className="fmat">
 <p className="pf6"> Head Office, <br/>
A-25, Bahadurabad Chowrangi Karachi, Pakistan  </p>


<p className="pf1"> <span className="sf1"> <FaPhoneAlt />  </span>  UAN: 111-729-526   <span className="sf2"> <FaGlobe />  </span> (+0092-213) 4130786-90 </p>
 <p  className="pf2"> <span className="sf3"> <FaPhoneAlt /> </span>  CELL: 92-311-1729526</p>
<p  className="pf3"> <span className="sf4"> <FaPhoneAlt /> </span> USA NO +1(716)941 7792  </p>
<p  className="pf4"> <span className="sf5"> <FaPhoneAlt /> </span> UK NO (+44)115 970 6256</p>
<p  className="pf5"> <span className="sf6">  <SiGmail /> </span> info@saylaniwelfare.com</p>
 
 </div>
 </div>
 

 
<div className="ufm">

 <h className="fh1"> USEFUL LINKS</h> 
<hr />
<div className="icon">


<div className="facebook" >
          <FaFacebookF />
        </div>

        <div className="twitter" >
          <FaTwitter />
        </div>
        <div className="instagram">
          <FaInstagram />

</div>
</div>
</div>
    

    </div>
    )
}

export default footer