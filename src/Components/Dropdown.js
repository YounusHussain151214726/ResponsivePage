import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container , NavDropdown ,Navbar ,Dropdown ,Nav} from 'react-bootstrap';

const dropdown =()=>{

    return (

      <div className="dm"> 


<div> <img className="di1" src="https://www.saylaniwelfare.com/public_html/images/saylani/Saylani-logo.png"/></div>

<div  className="navbar">

<Navbar bg="white" expand="md" sticky="top"  className="dropdownmedia">


          

  <Container className="navcon" >



    {/* <Navbar.Brand href="#home">HOME</Navbar.Brand> */}
    <Navbar.Toggle aria-controls="basic-navbar-nav" id="togglebtn" />
    <Navbar.Collapse id="basic-navbar-nav" >
   
        <NavDropdown title="About" id="basic-nav-dropdown" >
          <NavDropdown.Item href="#action/3.1">Introduction</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Chairman Message</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Saylani Annual Report</NavDropdown.Item>

          {/* <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
        </NavDropdown>


        <NavDropdown title="Saylani Services" id="basic-nav-dropdown" >
          <NavDropdown.Item href="#action/3.1">Education</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Medical</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Welfare</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>


        <NavDropdown title="Saylani Ehsas" id="basic-nav-dropdown" >
          <NavDropdown.Item href="#action/3.1">Ehsas LangarKhana</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>



        <NavDropdown title="Future Projects" id="basic-nav-dropdown" >
          <NavDropdown.Item href="#action/3.1">Saylani University</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Saylani City</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>



        <NavDropdown title="Media" id="basic-nav-dropdown" >
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
    
    </Navbar.Collapse>
  </Container>
  
</Navbar>

</div>
</div>
    )
}

export default dropdown;