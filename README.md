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

## A faire
- fetch data sur l'API Google Font
- implémenter les données de l'API au sein de l'App  
[Utiliser le components dédier à ça ?](https://github.com/jakewtaylor/react-google-font-loader)
- gérer les erreurs / chargement / (annulation)
- utiliser un useReducer (optionnel)
- révision du site (coquille, accessibilité, design)