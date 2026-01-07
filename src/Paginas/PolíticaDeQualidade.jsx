import React from 'react'
import Header from '../componentes/Header'
import Cabecalho from '../componentes/Cabecalho'
import Bolinha from '../componentes/Bolinha'
import Footer from '../componentes/Footer'
import '../estilos/PoliticaDaQualidade.css'

function PolíticaDeQualidade() {
  return (
    <>
      <Header />
      <Cabecalho
        titulo="Política da Qualidade"
        texto="Academia BAI > Política da Qualidade"
      />
      <img src="politicadaqualidade.png" alt="" className="politica-img" />
      <Bolinha />
      <Footer />
    </>
  )
}
export default PolíticaDeQualidade
