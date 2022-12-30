import './Technical.css'
import TecCards from './TecCards/TecCards';
import ImpDate from '../../impDates/impDates';
import Footer from '../../Footer/footer';
function TechnicalCmte() {
    return ( 
        <>
         <div className="technical">
            <div className="tecCards">
{/* // tecCards  */}
<TecCards/>
            </div>
            <div className="tecImpDate">
                <ImpDate/>
            </div>
         </div>
         <Footer/>
        </>
     );
}

export default TechnicalCmte;