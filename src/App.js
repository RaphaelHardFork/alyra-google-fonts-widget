import './App.css'
import "bootstrap/dist/css/bootstrap.css" // Importation de bootstrap ici s'applique à tous les components

// Import des components
import Header from './components/Header'
import Footer from './components/Footer'
import WidgetApp from './components/WidgetApp'

const App = () => {
  return (
    <div className="App">
      <Header />
      <WidgetApp />
      <Footer />
    </div>
  )
}


export default App;
