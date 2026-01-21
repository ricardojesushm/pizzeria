import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Carrito from './pages/Carrito'
import Registro from './pages/Registro'
import Pizza from './pages/Pizza'
import Login from './pages/Login'
import Profile from './pages/Profile'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
// import CardPizza from './components/CardPizza'
// import Productos from './components/Productos'


function App() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pizza/:id" element={<Pizza />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/carrito" element={<Carrito />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer></Footer>
    </>
  )
}

export default App
