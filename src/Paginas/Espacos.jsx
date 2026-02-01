import React from 'react'
import Header from '../componentes/Header'
import Cabecalho from '../componentes/Cabecalho'
import Footer from '../componentes/Footer'
import './../estilos/Espacos.css'
import { BsBookmarkFill } from 'react-icons/bs'
import PrimeiroCarrossel from '../componentes/PrimeiroCarrossel'

function Espacos() {
  return (
    <>
      <div className="espacos-page">
        <Header variant="espacos" />
        <Cabecalho
          titulo="Espaços"
          texto="Academia BAI > Espaços"
          variant="espacos"
        />
        <main>
          <div className="espacos-container-geral">
            <div className="espacos-info">
              <h3>Espaços</h3>
              <h1>Auditórios</h1>
              <span>
                A Academia BAI dispõe de dois auditórios excepcionais,
                preparados para garantir o êxito do seu evento. Com capacidades
                que variam entre 68 a 120 pessoas, os espaços oferecem uma
                iluminação moderna e uma sonorização de última geração. São
                ideais para conferências, workshops, palestras e mais. Confie na
                Academia BAI para transformar o seu evento numa experiência
                inesquecível!{' '}
              </span>
              <button>
                Agendar Visita <BsBookmarkFill className="icone-bookmark" />
              </button>
            </div>
            <div className='caixa-carrossel'>
              <img src="" alt="" />
              <PrimeiroCarrossel />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
export default Espacos
