import { Outlet } from "react-router-dom";
import Navv from "./Navv";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";

// import 'bootstrap/dist/css/bootstrap.min.css';

function NavRoute() {
    return ( 
        <>



       
        {/* <Navbar bg="light" expand="lg">
      
      <Container>
      <NavLink to="/">Home</NavLink>
  
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
           
            <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item>
              <NavLink to="/about">About Institute</NavLink>
                </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
              <NavLink to="/about1">About Universal Innovators</NavLink>
              
              </NavDropdown.Item>
              
    
            </NavDropdown>
            <NavDropdown title="Papers" id="basic-nav-dropdown">
              <NavDropdown.Item>
                  <NavLink to="/callForPapers">Call for Papers</NavLink>
                </NavDropdown.Item>
             
              <NavDropdown.Item >
                <NavLink to="/paperSubmissions">Paper Submissions</NavLink>
             
              </NavDropdown.Item>
              <NavDropdown.Item >
                          <NavLink to="/callForSpecial">Call for Special</NavLink>
  
             
              </NavDropdown.Item>
              <NavDropdown.Item >
                    <NavLink to="/callForInternational">Call for International Workshops</NavLink> 
              </NavDropdown.Item>
              
    
            </NavDropdown>
        
        <Nav.Link>
        <NavLink to="/downloads">Downloads</NavLink>
        </Nav.Link>
        <Nav.Link>
                  <NavLink to="/workshops">WorkShops</NavLink>
        </Nav.Link>
        <Nav.Link>
        <NavLink to="/sponsorships">Sponsorships</NavLink>
  
        </Nav.Link>
         <Nav.Link>
        <NavLink to="/conferences">Conference Venue</NavLink>
  
         </Nav.Link>
         <Nav.Link>
         <NavLink to="/registrations">Registration</NavLink>
  
         </Nav.Link>
         <NavDropdown title="Committe" id="basic-nav-dropdown">
              <NavDropdown.Item>
              <NavLink to="/steerings">Steering Committee</NavLink>
  
                </NavDropdown.Item>
            
              <NavDropdown.Item >
              <NavLink to="/technicals">Technical Program Committee</NavLink>
  
              </NavDropdown.Item>
              <NavDropdown.Item>
              <NavLink to="/advisorys">Advisory Committee</NavLink>
  
  
                </NavDropdown.Item>
             
              <NavDropdown.Item >
              <NavLink to="/industrys">Industry Expert</NavLink>
  
  
              </NavDropdown.Item>
              
    
            </NavDropdown>
         <Nav.Link>
          <NavLink to="/awards">Awards</NavLink>
  
         </Nav.Link>
         <Nav.Link>
         <NavLink to="/spsessions">Special Sessions</NavLink>
  
         </Nav.Link>
         <Nav.Link>
         <NavLink to="/publications">Publications</NavLink>
         </Nav.Link>
  
          </Nav>
        
        </Navbar.Collapse>
        
      
  
      </Container>
  
    </Navbar> */}
       
        <Navv/>
        {/* <section>
             <h1>Home Page Only</h1>
        </section> */}
        
        <Outlet/>
        </>
     );
}

export default NavRoute;