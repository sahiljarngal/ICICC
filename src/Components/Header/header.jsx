import React from "react";
import nitImage from "./Himages/nitpatna.jpeg"
import delhiImgae from "./Himages/unidelhi.png"
import sapien from "./Himages/sapientia.png"
import springer from "./Himages/springer.png"
import "./header.css"

function HeaderMain() {
    return ( 

        <div className="headerMain">
              
              <div className="header container">

                {/* images  */}
                <div className="img1">
                    {/* 1st image  */}
                    <div className="imageone himg">
                        <img src={delhiImgae} alt="Image" />
                    </div>

                    {/* 2nd image  */}
                    <div className="imagetwo himg">
                      <img src={nitImage} alt="Image" />
                    </div>

                </div>

                
                {/* main top part  */}
                <div className="hTopPart">
                    <div className="htop1">
                        <p>6th INTERNATIONAL CONFERENCE ON INNOVATIVE COMPUTING AND COMMUNICATION
                        </p>
                        <p> (ICICC 2023)</p>
                    </div>
                 <div className="htop2">
                    <p>ORGANISED BY : SHAHEED SUKHDEV COLLEGE OF BUSINESS STUDIES, UNIVERSITY OF DELHI, NEW DELHI IN ASSOCIATION WITH NATIONAL INSTITUTE OF TECHNOLOGY,PATNA & UNIVERSITY OF VALLADOLID SPAIN
</p>
<p>17-18th FEBRUARY 2023</p>
                 </div>
                </div>


                   {/* images  */}
                 <div className="img2">
                    {/* 1st image  */}
                    <div className="imageone himg">
                        <img src={sapien} alt="Image" />
                    </div>

                    {/* 2nd image  */}
                    <div className="imagetwo himg">
                      <img src={springer} alt="Image" />
                    </div>

                </div>




              </div>
        </div>



     );
}

export default HeaderMain;