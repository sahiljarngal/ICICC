import React from "react";

const arr=[
   {
      h4: "Manuscript Submission Deadline:",
      p: "January 10th, 2023",
   },
   {
      h4: "Manuscript Submission Deadline:",
      p: "January 10th, 2023",
   },
]


function ImpDate_Notices() {
    return ( 
        <div className="impDate_Notices">

            {/* important Date  */}
          <div className="impDate">
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

          {/* important Notices  */}
          <div className="impNotices">

          </div>


        </div>
      );
}

export default ImpDate_Notices;