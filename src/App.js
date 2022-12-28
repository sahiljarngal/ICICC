import './App.css';
import HeaderMain from './Components/header';
import Hslides from "./Components/Hslides"
// import Navv from "./Components/Navbar/Navv.jsx"
import FlagShip from './Components/HslidesImages/flagship';
import AboutConference from './Components/abtConference';
import ImpDate_Notices from './Components/impDates';
import Footer from './Components/footer';
// swiper 
import "swiper/css/bundle";

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"></link>



function App() {
  return (
    <>
 <HeaderMain/>
 {/* <Navv/> */}
<Hslides/>
<FlagShip/>
<AboutConference/>
<ImpDate_Notices/>
 <Footer/>
    </>
  );
}

export default App;
