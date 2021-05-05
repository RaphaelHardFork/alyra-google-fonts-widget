# Projet Alyra Google Fonts Widget
**Team verte :** Pyrénam, Ton, Diego et Raphael

**Site :** Pas encore déployé  
## 03/05/2021
### Création de l'App
 `npx create-react-app alyra-google-fonts-widget`
### Suppression des fichiers et lignes de codes inutiles  
  -  **Dans src :**
      - setupTests.js
      - App.test.js
      - logo.svg
      - vider le App.css
      - le contenu de App.css (import logo, le contenu de return)
  - **Dans public :**
    - logo192.png
    - logo512.png
 
### Ajoute de bootstrap
`yarn add bootstrap@next`

**Importation dans App.js :** 
```js
import "bootstrap/dist/css/bootstrap.css"
```

### Création des components et du site statique
**Architecture du site :**   
![Site architecture](src/architecture.png)  

Construction du design avec bootstrap

### Variables d'état (useState)
**Initiation dans WidgetApp.js :**
- filter (select)
- text (text area)
- size (slider)
 
Utilisation de `size` dans `FontsCard` : 
```html
<p style={{ fontSize: `${size}px` }}>{text}</p>
```

## 04/05/21
### Utilisation de l'API Google Fonts
- Comprendre l'objet
- Utilisation de sort (popularity, ...)
- mise en place du .envlocal (netify)

### Mise en place de .env.local

### Installation de axios
`yarn add axios`
Puis dans le code :  
```js
import axios from 'axios'
```

### Mise en place du useReducer adapté à la récupération 

### Traitement des données 

### Implémentation de la police dans les cards

### Déclanchement de nouvelles requêtes via la liste déroulante

### Mise en place de la clé dans Netify
Advanced build settings
New variable




## A faire
- fetch data sur l'API Google Font
- implémenter les données de l'API au sein de l'App  
[Utiliser le components dédier à ça ?](https://github.com/jakewtaylor/react-google-font-loader)
- gérer les erreurs / chargement / (annulation)
- utiliser un useReducer (optionnel)
- révision du site (coquille, accessibilité, design)