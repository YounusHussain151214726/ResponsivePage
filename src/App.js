import React from "react";
import "./App.css";
import First from "./Components/First";

import Paragraph from "./Components/Paragraph";
import Bluediv from "./Components/Bluediv";
import Whatwe from "./Components/Whatwe";
import Mission from "./Components/Mission";
import Images from "./Components/Images";
import Footer from "./Components/Footer";
import Lfooter from "./Components/Lfooter";
import Slider from "./Components/Slider";
import Dropdown from "./Components/Dropdown";
import Leftslide from './Components/Leftslide'
class App extends React.Component {
  render() {
    return (
      <div>
        <First />
        <Dropdown />
     <Slider />
     <Leftslide />
        <Paragraph />
        <Bluediv />
        <Whatwe />
        <Mission />
        <Images />
        <Footer />
        <Lfooter />
      </div>
    );
  }
}

export default App;
