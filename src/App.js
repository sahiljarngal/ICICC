import './App.css';
import { BrowserRouter, Route, Routes, Switch} from "react-router-dom"

import NavRoute from './Components/Navbar/NavRoute';


import HeaderMain from './Components/Header/header';
import Hslides from  "./Components/Hslides/Hslides"
import FlagShip from './Components/FlagShip/flagship';
import AboutConference from './Components/AbtConference/abtConference';
import ImpDate from './Components/impDates/impDates';
import ImpNotices from './Components/ImpNotices/impNotices';
import Footer from './Components/Footer/footer';

// About Section 
import About from './Components/AboutSection/about';
import AboutUniversal from './Components/AboutSection/about1';


// Workshop Sessions 
import WorkShops from './Components/WorkshopSection/workshop';

// Sponsorships Sessions
import SponserShip from './Components/Sponsership Section/sponser';

// swiper 
import "swiper/css/bundle";
import Conference from './Components/ConferenceVenue/conference';
import Registrations from './Components/RegistrationSection/registration';
import Call_for_international from './Components/Papers/Call_for_International/Call_for_international';
import Call_for_papers from './Components/Papers/Call_for_papers/Call_for_papers';
import Call_for_Special from './Components/Papers/Call_for_Special/Call_for_Special';
import Paper_submission from './Components/Papers/Paper_submission/Paper_submission';
import Downloads from './Components/Downloads/Download';
import Awards from './Components/AwardsSection/Award';
import SpecialCard from './Components/SpecialSession/SpecialCard';

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"></link>





function App() {
  return (
    <>
<HeaderMain/>

<BrowserRouter>
<Routes>
 <Route path='/' element={<NavRoute/>}>
 <Route index  element={
<>
<Hslides/>
<FlagShip/>
<AboutConference/>
<div className='Date_Notices'
 style={
  {display:"grid",
  gridTemplateColumns:"repeat(2,1fr)",
  width:"98%", 
  margin:"auto",
  justifyContent:"center",
  margin:"4vh 0"
}
 
 }
>
<ImpDate/>
<ImpNotices/>
</div>
 <Footer/>
</>

 }/>
<Route path='about' element={<About/>} />

<Route path='about1' element={<AboutUniversal/>}/>

<Route path='workshops' element={<WorkShops/>}/>

<Route path='sponsorships' element={<SponserShip/>}/>

<Route path='conferences' element={<Conference/>}/>

<Route path='registrations' element={<Registrations/>}/>

<Route path='callForInternational' element={<Call_for_international/>}/>

<Route path='callForPapers' element={<Call_for_papers/>}/>

<Route path='callForSpecial' element={<Call_for_Special/>}/>

<Route path='paperSubmissions' element={<Paper_submission/>}/>

<Route path='downloads' element={<Downloads/>}/>

<Route path='awards' element={<Awards/>}/>

<Route path='spsessions' element={<SpecialCard/>}/>












 </Route>



</Routes>

</BrowserRouter>


{/*   
<HeaderMain/>
<Hslides/>
<FlagShip/>
<AboutConference/>
<div className='Date_Notices'
 style={
  {display:"grid",
  gridTemplateColumns:"repeat(2,1fr)",
  width:"98%", 
  margin:"auto",
  justifyContent:"center",
  margin:"4vh 0"
}
 
 }
>
<ImpDate/>
<ImpNotices/>
</div>
 <Footer/> */}

    </>
  );
}

export default App;
