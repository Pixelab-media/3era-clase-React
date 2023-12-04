import './App.css'
import Footer from './pages/Footer'
import Main from './pages/Main'
import Nav from './pages/Nav'

const App = () =>{
//la clase primaria y el mensaje del boton lo recibe app.jsx
// mensaje="Comprar ahora" clase="btn-primario"

  return (
    <div>
      <Nav />
      <Main mensaje="Comprar" clase="btn-primario"/>
      <Footer />
    </div>
  )
}

export default App