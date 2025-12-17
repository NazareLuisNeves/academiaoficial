import React from 'react'
import './../estilos/MensagemdaPresidente.css'
import Header from '../componentes/Header'
import Cabecalho from '../componentes/Cabecalho'
import Footer from '../componentes/Footer'
import Bolinha from '../componentes/Bolinha'

 function MensagemdaPresidente() {
  return (
    <>
    <Header/>
    <section className='mensagempresidente'>
      <Cabecalho titulo="Mensagem da Presidente" texto="Academia BAI &gt; Mensagem da Presidente"/>
      <Bolinha/>
    </section>
    <Footer/>
    </>
  )
}
export default MensagemdaPresidente

