import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Paginas/Home'
import Sobrenos from './Paginas/Sobrenos'
import MensagemDaPresidente from './Paginas/MensagemdaPresidente'
import OrgaosSociais from './Paginas/OrgaosSociais'
import Galeria from './Paginas/Galeria'
import Iniciativas from './Paginas/Iniciativas'
import Carreiras from './Paginas/Carreiras'
import Política from './Paginas/PolíticaDeQualidade'
import CertificadoDeConformidade from './Paginas/CertificadoDeConformidade'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sobrenos" element={<Sobrenos />} />
          <Route
            path="/mensagemdapresidente"
            element={<MensagemDaPresidente />}
          />
          <Route path="/orgaossociais" element={<OrgaosSociais />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/iniciativas" element={<Iniciativas />} />
          <Route path="/carreiras" element={<Carreiras />} />
          <Route path="/politica-da-qualidade" element={<Política />} />
          <Route
            path="/certificado-de-conformidade"
            element={<CertificadoDeConformidade />}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
