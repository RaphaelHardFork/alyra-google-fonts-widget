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
 
Utilisation de `size` dans `<FontsCard />` : 
```html
<p style={{ fontSize: `${size}px` }}>{text}</p>
```
-------
## 04/05/21
### Installation de axios
`yarn add axios`
Puis dans le code :  
```js
import axios from 'axios'
```
### Utilisation de l'API Google Fonts
- Comprendre l'objet JSON
- Utilisation de sort dans la requête (popularity, ...)

### Mise en place de .env.local
Dans un fichier `.env.local` nativement présent dans le `.gitignore` d'un CRA :  
REACT_APP_GOOGLE_API=*******************

`process.env.REACT_APP_FONTS_API` permet de récupérer la clé API dans le fichier .env.local  

--------  

### useEffect & useReducer adapté à la récupération de données
Comme pour les autres variables d'états, le useReducer est définit dans le `<WidgetApp />` :  
```js
  const [state, dispatch] = useReducer(dataReducer, {
    // Etat initial du state
    data: [],
    loading: false,
    error: false,
    url: `https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.REACT_APP_FONTS_API}&sort=alpha`
  })
  ```

On utilise maintenant un **useEffect** qui va altérer **notre objet state** via la fonction **dispatch :**  
```js
  useEffect(() => {
    const dataFetching = async () => {
      dispatch({ type: "FETCH_INIT" })
      try {
        let response = await axios(url)
        dispatch({ type: "FETCH_SUCCESS", payload: response })
      } catch (error) {
        dispatch({ type: "FETCH_ERROR", payload: error })
      }
    }
    dataFetching()
  }, [url])
```
La fonction **dataReducer** correspondant à **dispatch** est définit dans un fichier `reducers.js` dans **src** que l'on import dans notre `<WidgetApp />`
```js
const dataReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        loading: true,
        error: false,
      }
    case "FETCH_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload.message
      }
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data.items.slice(0, 10)
      }
    case "CHANGE_FETCH":
      return {
        ...state,
        url: `https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.REACT_APP_FONTS_API}&sort=${action.payload}`
      }
    default:
      throw new Error(`Il y a eu une erreur dans le dispatch: ${action.type}`)
  }
}
```
Le `case "CHANGE_FETCH":` est expliqué plus bas.


### Implémentation de la police dans les cards
Les polices dans chaques *cards*  de `<FontsCard />` on été implémentées avec l'option proposée par GoogleFonts : @import :
```html
<FontsCard />

  <style>
        @import url('https://fonts.googleapis.com/css2?family={familyRequest}&display=swap');
  </style>
  <p style={{ fontSize: `${size}px`, fontFamily: `'${elem.family}', cursive` }}>{text}</p>
``` 
**familyRequest** correspond au nom de la famille sans espace (avec des +). Puis le style CSS est implémenté à l'aide de l'attribut *style*.
### Déclanchement de nouvelles requêtes via la liste déroulante
La liste déroulante doit deshormais fournir deux informations : 
- Le nom du filter (les plus populaires, récents, ...)
- L'attribut à ajouter à notre requête http (date, popularity, ...)

Pour cela l'ID, la value et le contenu de la balise ont été utilisé : 
```html
Chaque option était définit comme cela :

  <option id="popularity" value="popularity">Les plus populaires</option>
```
Pour récupérer ces informations via la fonction du `<select>` :
```js
  const handleChangeFilter = (e) => {
    // Attribut pour la requête
    dispatch({ type: "CHANGE_FETCH", payload: e.target.value })

    // Nom du filtre  
setFilter(document.getElementById(e.target.value).textContent)
  }
```
-------
## 05/05/21
### Mise en place de loading & error
Comme dans l'exemple du cours : 
```js
      {loading && <p className="fs-1">Chargement...</p>}
      {error && <p className="alert alert-danger">Il y a eu une erreur : {error}</p>}
```
### Mise en place de la clé dans Netify
**Advanced build settings** => New variable




## A faire
- Utiliser les componants dédié aux polices  
[React Google Font Loader](https://github.com/jakewtaylor/react-google-font-loader)

## Pour aller plus loin
- possibilité de mettre des favoris
  - utilisation du localStorage
  - besoin du lazy initiale state
- option pour rechercher une police spécifique
  - besoin de charger toute les données
  - besoin de mettre un cancel (abord fetch)
