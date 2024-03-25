- npm create vite@latest

- Confirmez l'installation des packages en répondant "yes" quand on vous le demande.

- Entrez "myapp" lorsqu'on vous demande le nom du projet.

- Sélectionnez le framework "React" quand on vous le demande.

- Sélectionnez "JavaScript" lorsqu'on vous le demande.

- Exécutez cd myapp pour changer le répertoire vers le dossier du projet.

- Exécutez npm i pour installer les dépendances du projet.

- Exécutez npm run dev pour lancer le serveur de développement.

```
    npm create vite@latest
    cd "myapp"
    npm i
    npm run dev
```

__________

Suprimer tout se qu'il y a dans "assets" et "Public",
Suprimer "Index.css", "app.css" (tout les fichier css du serveur)

aller dans mains.jsx et suprimer :
```
import './index.css'

```
__________

Aller dans app.jsx et suprimer tout : "ctrl A", "supr"

crée deux nouveau dossier, dans src -> pages, componments
(tout le code qu'ont ferra se trouvera dans src)
___________

- Exécutez npm i react-router-dom pour installer le package react-router-dom.

- Créez un nouveau fichier App.jsx et ajoutez l'instruction import pour react-router-dom.
    - npm i react-router-dom

- Ajoutez le code gérant les routes dans le fichier App.jsx.
```
main.jsx:
    import App from './app'
    appel aux routes avec <App/>
```
