import React from 'react';
import { NavLink } from "react-router-dom";
import './Navv.css'
function Navv() {
  return (
    <div className='navcss'>
      <header>
        <nav>
          <ul style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",

          }}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>


{/* About  */}
            <details>
              <summary
                style={{ backgroundColor: "red" }}
              >About</summary>
              <li>
                <NavLink to="/about">About Institute</NavLink>
              </li>

              <li>
                <NavLink to="/about1">About Universal Innovators</NavLink>
              </li>
            </details>



{/* Committe   */}
            <details>
              <summary>Committee</summary>
              <li>
                <NavLink to="/steerings">Steering Committee</NavLink>
              </li>

              <li>
                <NavLink to="/technicals">Technical Program Committee</NavLink>
              </li>

              <li>
                <NavLink to="/advisorys">Advisory Committee</NavLink>
              </li>

              <li>
                <NavLink to="/industrys">Industry Expert</NavLink>
              </li>
              

            </details>





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


{/* papers  */}
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


            <li>
              <NavLink to="/downloads">Downloads</NavLink>
            </li>

            <li>
              <NavLink to="/awards">Awards</NavLink>
            </li>

            <li>
              <NavLink to="/spsessions">Special Sessions</NavLink>
            </li>

            <li>
              <NavLink to="/publications">Publications</NavLink>
            </li>











          </ul>
        </nav>

      </header>
    </div>
  );
}

export default Navv;