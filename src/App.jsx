import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Paginas/Home'
import Sobrenos from './Paginas/Sobrenos'
import MensagemDaPresidente from './Paginas/MensagemdaPresidente'
import OrgaosSociais from './Paginas/OrgaosSociais'
import Galeria from "./Paginas/Galeria";


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/sobrenos' element={<Sobrenos/>}/>
        <Route path='/mensagemdapresidente' element={<MensagemDaPresidente/>}/>
        <Route path='/orgaossociais' element={<OrgaosSociais/>}/>
        <Route path="/galeria" element={<Galeria/>}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
