import './components/Navbar'
import './components/Home'
import './components/Footer'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import Carrito from './components/Carrito'
import Registro from './components/Registro'
// import Login from './components/Login'
// import CardPizza from './components/CardPizza'
// import Productos from './components/Productos'


function App() {
  return (
    <>
    <Navbar></Navbar>
    <Home></Home>
    {/* <CardPizza></CardPizza> */}
    {/* <Registro></Registro> */}
    {/* <Login></Login> */}
    {/* <Carrito></Carrito> */}
    <Footer></Footer>
    </>
  )
}

export default App
