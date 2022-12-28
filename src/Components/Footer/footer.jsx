import React from "react";
import classes from "./footer.module.css"

function Footer() {
    return ( 
    <div className={classes.footer}>
        <div className={ classes.fmain }>

            {/* footer left  */}
            <div className={classes.fleft}>

            <div className={classes.details}>
                <h1>Contact Details</h1>
                <p>icicc.ui@gmail.com</p>
            </div>

            <div className={classes.socialMedia}>
                <h1>Social Media</h1>

                <div className={classes.social}>
                   <a href="">Gmail</a>
                   <a href="">Facebook</a>
                   <a href="">LinkedIn</a>
                   </div>
            </div>
                  
            </div>

            {/* footer right  */}
           <div className={classes.fright}>
           <div className={classes.links}>
                <h1>Quick Links</h1>
                <p>Call for papers</p>
                <p>Important Dates</p>
                <p>Conference Venue</p>
                <p>Downloads</p>
                <p>EasyChair Submission</p>
            </div>
           </div>


        </div>

<div className={classes.line}>
      <hr />
      </div>

        <div className={classes.f_lower}>
            <h3>Copyright © International Conference on Innovative Computing and Communication | All Rights Reserved |</h3>
            <p>Site By: Akshun Verma</p>
        </div>
    </div>
    );
}

export default Footer;