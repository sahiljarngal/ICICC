import { Outlet } from "react-router-dom";
import Navv from "./Navv";

function NavRoute() {
    return ( 
        <>
        <Navv/>
        {/* <section>
             <h1>Home Page Only</h1>
        </section> */}
        
        <Outlet/>
        </>
     );
}

export default NavRoute;