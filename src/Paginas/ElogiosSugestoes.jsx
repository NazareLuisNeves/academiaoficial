import React from 'react'
import Header from '../componentes/Header'
import Cabecalho from '../componentes/Cabecalho'
import Bolinha from '../componentes/Bolinha'
import Footer from '../componentes/Footer'
import './../estilos/ElogiosSugestoes.css'
import { TbTriangleFilled } from 'react-icons/tb'

export default function ElogiosSugestoes() {
  return (
    <>
      <Header />
      <Cabecalho />
      <div>
        <img src="imagemelogiossugestoes.png" alt="" />
        <span>Elogios e Sugestões</span>
        <button>
          Preencher{' '}
          <TbTriangleFilled className="icone-elogiossugestoes" size={12} />
        </button>
      </div>
      <Bolinha />
      <Footer />
    </>
  )
}
