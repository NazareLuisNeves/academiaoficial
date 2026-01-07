import React from 'react'
import Header from '../componentes/Header'
import Cabecalho from '../componentes/Cabecalho'
import Bolinha from '../componentes/Bolinha'
import Footer from '../componentes/Footer'
import '../estilos/CertificadoDeConformidade.css'

function CertificadoDeConformidade() {
  return (
    <>
      <Header />
      <Cabecalho
        titulo="Certificado de Conformidade"
        texto="Academia BAI > Certificado de Conformidade"
      />
      <img src="certificado copy.png" alt="" className="certificado-img" />
      <Bolinha />
      <Footer />
    </>
  )
}
export default CertificadoDeConformidade
