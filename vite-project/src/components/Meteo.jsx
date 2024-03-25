import { useEffect, useState } from "react"
import "../styles/Meteo.css"

function Meteo(){
// variable , fonction qui modifi la variable = useState(valeur par défaut)
//   const [city, setCity] = useState("Paris")
    const [datas, setDatas] = useState([])

    useEffect(() => {
        const fetchMeteo = async () =>{
            try{
                const req = await fetch("https://www.prevision-meteo.ch/services/json/brignoles")
                const res = await req.json()
                if(req.ok){
                    setDatas([res])
                    console.log(datas)
                }
            }catch(err){
                console.log(error)
            }
        }
        fetchMeteo()
    },[])


    // {condition ?((si vrai ):( si faux)})
    return(
        <>
            {datas.length > 0 ? (
                <>
                    <h2>Météo Brignol :</h2>
                    <p>Ville : {datas[0].city_info.name}</p>

                    <p>Temperature : {datas[0].current_condition.tmp}°C</p>

                    <div className="meteo-temp">
                        <p>Temp : {datas[0].current_condition.condition}</p>
                        <img src={datas[0].current_condition.icon_big} alt="icon"/>
                    </div> 
                </>
            ):(
                <>
                    <p>Loading...</p>
                    <p>Les donnée sont en cours de chargement</p>
                </>
            )}
        </>
    )
}
export default Meteo