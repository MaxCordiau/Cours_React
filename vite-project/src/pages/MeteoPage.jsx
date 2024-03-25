import Meteo from "../components/Meteo"
import Header from "../components/Header/";

function MeteoPage(){
    return(
        <>
        <Header/>
        {/* <h1>Page météo</h1> */}
            <Meteo/>
        </>
    )
}
export default MeteoPage