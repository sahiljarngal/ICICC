import React from "react";
import "./impDates.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const arr=[
   {
      h4: "Manuscript Submission Deadline:",
      p: "January 10th, 2023",
   },
   {
      h4: "Notification of first review:",
      p: "January 15th, 2023",
   },
   {
      h4: "Submission of revised manuscript",
      p: "January 20th, 2023",
   },
   {
      h4: "Notification of Acceptance / Rejection",
      p: "January 25th, 2023",
   },
   {
      h4: "Final manuscript due",
      p: "January 30th, 2023",
   },
   {
      h4: "Registration Deadline",
      p: "January 30th, 2023",
   },
   {
      h4: "Final Paper Due",
      p: "January 30th, 2023",
   },

   



]


function ImpDate() {
    return ( 
        <div className="imp_Date">

            {/* important Date  */}
          <div className="impDate" data-aos="slide-left">
             <h1>Important Dates</h1>
             <div className="dates">

                {arr.map((a,i)=>{
                  return (
                  <div className="date" key={i}>
                     <h4>{a.h4}</h4>
                     <p>{a.p}</p>
                  </div>
                  )
                })}
               

                

             </div>
          </div>



        </div>
      );
}

export default ImpDate;