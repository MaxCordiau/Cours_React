# Comment crée un Serveur React (avec Vite)
___
### le build du serveur avec vite : 

- npm create vite@latest

- Confirmez l'installation des packages en répondant "yes" quand on vous le demande.

- Entrez "myapp" lorsqu'on vous demande le nom du projet.

- Sélectionnez le framework "React" quand on vous le demande.

- Sélectionnez "JavaScript" lorsqu'on vous le demande.

- Exécutez cd myapp pour changer le répertoire vers le dossier du projet.

- Exécutez npm i pour installer les dépendances du projet.

- Exécutez npm run dev pour lancer le serveur de développement.

```bash
    npm create vite@latest
    cd "myapp"
    npm i
    npm run dev
```

___
### suprimer les element par default

Suprimer tout se qu'il y a dans "assets" et "Public",
Suprimer "Index.css", "app.css" (tout les fichier css du serveur)

aller dans mains.jsx et suprimer :
```javascript
import './index.css'

```

Aller dans app.jsx et suprimer tout : "ctrl A", "supr"

crée deux nouveau dossier, dans src -> pages, componments
(tout le code qu'ont ferra se trouvera dans src)
___

### Préparer les pret-requis

- Exécutez npm i react-router-dom pour installer le package react-router-dom.

- Créez un nouveau fichier App.jsx et ajoutez l'instruction 
import pour react-router-dom
    - npm i react-router-dom

- Ajoutez le code gérant les routes dans le fichier App.jsx.

<br>

main.jsx :
- import App from './app'
- appel aux routes avec <App/>

___
### Editer les fichier / etablire les liaison

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
        <h1>Page d'accueil </h1>
    )
}
export default Home;
```
et mettre l'import de Home.jsx dans App.jsx :

app.jsx:
 ```javascript
...autre import

import Home from './pages/Home';

```
___
### 



