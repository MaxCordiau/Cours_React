# Comment crée un Serveur React (avec Vite)
___
### le build du serveur avec vite : 

- `npm create vite@latest`

- Confirmez l'installation des packages en répondant `yes` quand on vous le demande.

- Entrez `[nom de l'app]` lorsqu'on vous demande le nom du projet.

- Sélectionnez le framework `React` quand on vous le demande.

- Sélectionnez `JavaScript` lorsqu'on vous le demande.

- Exécutez cd myapp pour changer le répertoire vers le dossier du projet.

- Exécutez `npm i` pour installer les dépendances du projet.

- Exécutez `npm run dev` pour lancer le serveur de développement.

```bash
    npm create vite@latest
    cd "myapp"
    npm i
    npm run dev
```

___
### suprimer les element par default

Suprimer tout se qu'il y a dans `assets` et `Public`,
Suprimer `Index.css`, `app.css` (tout les fichier css du serveur)

aller dans mains.jsx et suprimer :
```javascript
import './index.css'

```

Aller dans app.jsx et suprimer tout : `ctrl A`, `supr`

crée deux nouveau dossier, dans src -> pages, componments
(tout le code qu'ont ferra se trouvera dans src)
___

### Préparer les pret-requis

- Exécutez `npm i react-router-dom` pour installer le package react-router-dom.

- Créez un nouveau fichier App.jsx et ajoutez l'instruction 
import pour react-router-dom
    - `npm i react-router-dom`

- Ajoutez le code gérant les routes dans le fichier App.jsx.

<br>

main.jsx :
- `import App from './app'`
- `appel aux routes avec <App/>`

___
### Crée la page Home.jsx / etablire les liaison

dans app.jsx fair :
```javascript
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
``` 
ensuite crée la fonction App :
```javascript
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    )
};
export default App;
```
puis crée la pages Home.jsx dans le dossier (src --> pages)
- crée le contenu de la pages, une fonction et un export de Home  :
```javascript
function Home(){
    return (
    // Fragment <> </> pour éviter de créer un div inutile
    <>  
        <h1>Page d'accueil </h1>
        <p>lorem</p>
    </>
    )
}
export default Home;
```
et mettre l'import de Home.jsx dans App.jsx :

app.jsx:
 ```javascript
// ...autre import (racourci : ctrl space sur la ligne : <Route path="/" element={<Home/>} /> au niveau de Home pour crée l'import exacte)

import Home from './pages/Home';

```
___
### Crée la page About.jsx
crée la page about mettre :
```javascript
function About(){
    return (
    <>  
        <h1>Page about</h1>
        <p>lorem</p>
    </>
    )
}
export default About;
```
et ajouter dans App.jsx:
```javascript
// ...autre import
import About from './pages/about';

```
___
### Crée un Composent header.jsx
les composent serve a integrer des element qui se répete regulierement

crée Header.jsx dans componment editer sont contenu :
```javascript
// importer la fonction link
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
    </nav>
  );
}
export default Header;
```
et ajouter a App.jsx:
```javascript
// ...autre import 
import Header from './components/header';
// ..autre Roote 
<Route path="/components/header" element={<Header/>} />

```
ajouter le header au autre pages (exemple avec le contenu de Home):
```javascript
// importer le header dans toutes les pages ou ont l'utilise :
import Header from "../components/header";

function Home(){
    return (
    // Fragment <> </> pour éviter de créer un div inutile
    <>  
    // le Header s'appel de cette façon si dessou
        <Headers/>
        <h1>Page d'accueil</h1>
        <p>lorem</p>
    </>
    )
}
```

___
### Les Props

Les props (ou "propriétés" en français) sont un concept important de React. Les props sont des données passées d'un composant parent (ou "parent component") à un composant enfant (ou "child component").

Voici un exemple de composant enfant appelé ChildComponent qui affiche le nom et l'âge d'une personne en utilisant les props :

```javascript
// Composant enfant (ChildComponent)
function ChildComponent(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
    </div>
  );
}

// Exportation du composant
export default ChildComponent;
```
Dans l'exemple ci-dessus, la fonction `ChildComponent` prend un seul paramètre `props`, qui est un objet contenant toutes les props passées au composant.

Les props sont utilisées dans le composant enfant en accédant aux valeurs de chaque prop en utilisant la notation "dot" (`props.name` ou `props.age` par exemple).

Voici un exemple de composant parent qui utilise le composant enfant `ChildComponent` en passant des props :
```javascript
// Composant parent
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const person = {
    name: 'John Doe',
    age: 30
  };

  return <ChildComponent name={person.name} age={person.age} />;
}

// Exportation du composant
export default ParentComponent;
```
Dans l'exemple ci-dessus, le composant parent `ParentComponent` définit un objet `person` qui contient le nom et l'âge d'une personne.

Ensuite, le composant parent utilise le composant enfant `ChildComponent` en passant les props `name` et `age` en utilisant la notation `{}` pour indiquer que les valeurs sont des expressions JavaScript.

J'espère que cela t'aides ! Laisse-moi savoir si tu as d'autres questions.

___
### Creation du props Card dans Components
contenu de Card.jsx
```javascript
function Card (props){
    return (
        <article>
            <h2>{props.title}</h2>
        </article>
    )
}
export default Card;
```
Fair appel au composent Card dans Home
Contenue de Home :

```javascript
import Header from '../components/Header';
import Card from '../components/Card';


function Home(){
    return (
    // Fragment <> </> pour éviter de créer un div inutile
    <>  
        <Header/>
        <h1>Page d'accueil</h1>
        <p>lorem</p>
        <Card title="Card 1"/>
    </>
    )
}
export default Home;
```
___
### Crée un css pour card
- crée le dossier Styles dans src
- crée le fichier Card.css
ajouter les element si dessous dans le css :
```css
article{
    display: inline-flex;
}
```
et ajouter `import '../styles/Card.css';` a Home.jsx pour que l'element Card soit styliser sur la page Home
___
### Creation du composent Counter.jsx
contenue de Conter.jsx:
```javascript
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
```
ont l'import dans about avec : `import Counter from "../components/Counter";`
et ont l'integre :
```javascript
function About(){
    return (
    <>  
        <Header/>
        <h1>Page about</h1>
        <p>lorem</p>
        <Counter/>
    </>
    )
}
```
____
### Utiliser une image dans React



