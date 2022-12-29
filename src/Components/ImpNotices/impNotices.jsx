import React from "react";
import "./impNotices.css"

const arr=[
  
   {
      h4: "ICICC - 2023 will be organised by Shaheed Sukhdev College of Business Studies, Delhi university, India on 17-18 February 2023.",
      
   },

   


]


function ImpNotices() {
    return ( 
        <div className="imp_Notices">

            {/* important Date  */}
          <div className="impNotices">
             <h1>Important Notices</h1>
             <div className="notices">

                {arr.map((a,i)=>{
                  return (
                  <div className="notice" key={i}>
                     <h4>{a.h4}</h4>
                  </div>
                  )
                })}
               

                

             </div>
          </div>



        </div>
      );
}

export default ImpNotices;