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

{/* special sessions  */}
            <li>
              <NavLink to="/spsessions">Special Sessions</NavLink>
            </li>

{/* workshops  */}
            <li>
              <NavLink to="/workshops">WorkShops</NavLink>
            </li>

{/* registrations */}
            <li>
              <NavLink to="/registrations">Registration</NavLink>
            </li>

{/* sponsorships  */}
            <li>
              <NavLink to="/sponsorships">Sponsorships</NavLink>
            </li>

{/* public  */}
            <li>
              <NavLink to="/publications">Publications</NavLink>
            </li>

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

{/* awards  */}
            <li>
              <NavLink to="/awards">Awards</NavLink>
            </li>

         
{/* conference Venue  */}
            <li>
              <NavLink to="/conferences">Conference Venue</NavLink>
            </li>

{/* downloads  */}
            <li>
              <NavLink to="/downloads">Downloads</NavLink>
            </li>

           
{/* previous conferences  */}
        <details>
          <summary>Previous Conferences</summary>
          <li>
              <NavLink to="/pcConferences22">ICCIC 2022</NavLink>
            </li>

            <li>
              <NavLink to="/pcConferences21">ICCIC 2021</NavLink>
            </li>

            <li>
              <NavLink to="/pcConferences20">ICCIC 2020</NavLink>
            </li>

            <li>
              <NavLink to="/pcConferences19">ICCIC 2019</NavLink>
            </li>

            <li>
              <NavLink to="/pcConferences18">ICCIC 2018</NavLink>
            </li>
        </details>








          </ul>
        </nav>

      </header>
    </div>
  );
}

export default Navv;