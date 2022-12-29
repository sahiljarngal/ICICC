import './registration.css'
import Footer from '../Footer/footer';

function Registrations() {
    return ( 
    
        <div className="registration">
            <div className="reContainer">
             <h1 className="reHeading">Registration</h1>


{/* Registration and all  */}
<div className="RegistrationMain">
             {/* Registrations Details  */}
 <div className="reDetail">
    <p>Once Your paper is accepted, the registration process begins. you have to complete the following steps.</p>
    <p> <h3>Step1 - Registration Fee:</h3> It is mandatory for at least one author of an accepted paper to register in order for the paper to appear in the proceedings and included in the Technical Program.</p>

    <div className="reAuthors">
        <h2>Author/Co-Author Registration Fee Includes</h2>
        <div className="reAuthorsInst">
          <ol>
            <li>Welcome reception</li>
            <li>Badge</li>
            <li>Conference Kit with Proceeding</li>
             <li>Participation in the technical program</li>
            <li>Coffee breaks</li>
            <li>Lunch</li>
            <li>Banque</li>
          </ol>
        </div>
    </div>



 </div>


{/* Registration Account Details  */}
 <div className="reAccount">
       <h1>Registration Account Details</h1>
       <div className="reAccountBank">
        <h2>Pay via Bank Transfer</h2>

        <div className="reBankDetails">
            {/* 1st one  */}
            <div className="reBank1 reBank">
                <h2>ACCOUNT NAME</h2>
                <p>ICICC</p>
            </div>

            {/* 2nd one  */}
            <div className="reBank2 reBank">
                <h2>ACCOUNT NUMBER</h2>
                <p>510909010080523</p>
            </div>

            {/* 3rd one  */}
            <div className="reBank3 reBank">
                <h2>BANK</h2>
                <p>City Union Bank</p>
            </div>

            {/* 4th one  */}
            <div className="reBank4 reBank">
                <h2>BRANCH</h2>
                <p>Sector-8, Rohini Delhi</p>
            </div>

            {/* 5th one  */}
            <div className="reBank5 reBank">
                <h2>BRANCH CODE</h2>
                <p>244</p>
            </div>

            {/* 6th one  */}
            <div className="reBank6 reBank">
                <h2>IFSC CODE</h2>
                <p>CIUB0000244</p>
            </div>
 {/* 7th one  */}
            <div className="reBank7 reBank">
                <h2>MICR</h2>
                <p>600054027</p>
            </div>
{/* 8th one  */}
            <div className="reBank8 reBank">
                <h2>SWIFT CODE</h2>
                <p>CIUBIN5M</p>
            </div>

{/* 9th one  */}
            <div className="reBank9 reBank">
                <h2>ACCOUNT TYPE</h2>
                <p>CURRENT</p>
            </div>

        </div>
       </div>
 </div>

 {/* pay via paypal  */}
 <div className="payPal">
    <h1>Pay via Paypal</h1>
    <p>For Payment from International Authors/Attendees, use the following paypal link with additional 5% service charges applies Pay via Paypal</p>
    <div className="payPalBtn">
        <button><a href="https://www.paypal.com/paypalme/ICICCConference?locale.x=en_GB" target="_blank">Pay via Paypal</a></button>
    </div>
 </div>

 {/* pay via razorpay  */}
 <div className="razorPay">
    <h1>Pay via RazorPay</h1>
    <p>For payment from Indian Authors/Attendees, use the following payment link
Pay via Razorpay</p>
    <div className="razorPayBtn">
        <button><a href="https://pages.razorpay.com/pl_IOTJy0iZ8kxq43/view" target="_blank">Pay via RazorPay</a></button>
    </div>
 </div>
 </div>


            </div>
            <Footer/>
        </div>
     );
}

export default Registrations;