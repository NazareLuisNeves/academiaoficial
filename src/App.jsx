import { BrowserRouter, Routes, Route } from 'react-router-dom'        
import Home from './Paginas/Home'
import Sobrenos from './Paginas/Sobrenos'
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/' element={<Sobrenos/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
