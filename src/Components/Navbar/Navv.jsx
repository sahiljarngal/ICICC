import React from 'react';
import { NavLink } from "react-router-dom";
import './Navv.css'
function Navv() {
  return (
    <div className='navcss'>
      <header>
        <nav>
            <ul style={{
              display:"flex",
              alignItems:"center",
              justifyContent:"center",
              gap: "20px",
          
            }}>
                <li>
                    <NavLink  to="/">Home</NavLink>
                </li>
          
             
             
                  <details>
                    <summary
                     style={{backgroundColor:"red"}}
                    >About</summary>
                    <li>
                      <NavLink to="/about">About Institute</NavLink>
                   </li>

                   <li>
                    <NavLink to="/about1">About Universal Innovators</NavLink>
                  </li>
                  </details>
               

                

                
                <li>
                <NavLink to="/special">Special Sessions</NavLink>
                </li>

                <li>
                <NavLink to="/workshops">WorkShops</NavLink>
                </li>

                <li>
                <NavLink to="/sponsorships">Sponsorships</NavLink>
                </li>

                <li>
                <NavLink to="/conferences">Conference Venue</NavLink>
                </li>

                <li>
                <NavLink to="/registrations">Registration</NavLink>
                </li>


<details>
  <summary>Papers</summary>
              <li>
                <NavLink to="/callForPapers">Call for Papers</NavLink>
             </li>

                 <li>
                <NavLink to="/paperSubmissions">Paper Submissions</NavLink>
                </li>

                <li>
                <NavLink to="/callForSpecial">Call for Special</NavLink>
                </li>

                <li>
                <NavLink to="/callForInternational">Call for International Workshops</NavLink>
                </li>


</details>



               

              

              

               

            </ul>
        </nav>

    </header>
    </div>
    );
}

export default Navv;