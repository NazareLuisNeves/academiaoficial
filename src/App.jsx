import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Paginas/Home'
import Sobrenos from './Paginas/Sobrenos'
import MensagemDaPresidente from "./Paginas/MensagemDaPresidente";


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/sobrenos' element={<Sobrenos/>}/>
        <Route path='/mensagemdapresidente' element={<MensagemDaPresidente/>}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
