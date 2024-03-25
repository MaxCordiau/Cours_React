import { useState } from "react";

function Counter(){
//       VARIABLE  MODIFIEUR
    const [count, setCount] = useState(0);
// Fonction pour desactiver  
    const [isDisabled, setIsDisabled]= useState(false)
//  FONCTION pour la decrementation et l'incrementation
    const incrementation = () => {
        setCount(count + 1);
        if (count >= 9){
            setIsDisabled(true)
        };
    }
    const decrementation = () => {
        setCount(count - 1);
        if (count == -10){
            setCount(0);
        }else{
            setIsDisabled(false)
        }
    }
    return (
        <>
            <h2>Compter les mouton</h2>
            <p>le nombre de mouton : {count}</p>
            <button onClick={incrementation} disabled={isDisabled}  >Ajouter un Mouton</button>
            <button onClick={decrementation}>Retirer un Mouton</button>
        </>
    )
}
export default Counter;