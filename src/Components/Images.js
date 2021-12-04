import React from 'react'



const img=()=>{

return(

    <div className="imgdiv">


<div className="logo1">
        <h1 className="h1">
          IMAGE <span className="span1">GALLERY</span>{" "}
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

<div className="imgdiv1">

<img className="imgs1" 
src="https://www.saylaniwelfare.com/public_html/images/saylani/gallery/rashan2.jpg" />

<img className="imgs2" src="https://www.saylaniwelfare.com/public_html/images/saylani/gallery/food.jpg"/>

<img className="imgs3"  src="https://www.saylaniwelfare.com/public_html/images/saylani/gallery/hazrat.jpg"/>

<img className="imgs4"  src="https://www.saylaniwelfare.com/public_html/images/saylani/gallery/rashan2.jpg"/>

<img className="imgs5" src="https://www.saylaniwelfare.com/public_html/images/saylani/gallery/hazrat2.jpg" />

    </div>
    </div>


)

}
export default img