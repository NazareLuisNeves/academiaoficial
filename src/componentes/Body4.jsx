import React from 'react'
import './../estilos/Body4.css'
import rodadasimagens from './../assets/rodadasimagens.png'
import Mundo from '../componentes/Mundo'
import { RiDownloadLine } from 'react-icons/ri'
import { BsBookmarkFill } from 'react-icons/bs'

function Body4() {
  return (
    <>
      <section className="body4">
        {' '}
        <div className="container-body4">
          <p className="body4-academiabai">Academia BAI</p>{' '}
          <h1 className="body4-espaco">Espaço para Eventos Corporativos</h1>{' '}
          <p className="body4-paragrafo">
            {' '}
            Na Academia BAI, cada detalhe é cuidadosamente planeado para
            garantir o máximo conforto, <br /> funcionalidade e sucesso para o
            seu evento. Seja qual for a ocasião, estamos prontos para <br />{' '}
            oferecer o melhor espaço e os melhores serviços. Venha conhecer e
            realizar o seu evento <br /> connosco!{' '}
          </p>{' '}
        </div>
        <div className="container-botoes">
          <button className="body4-saibamais2">Saiba Mais &gt;</button>{' '}
          <button className="body4-agendarvisita">
            {' '}
            Agendar Visita <BsBookmarkFill className="icone-bookmark" />
          </button>{' '}
          <button className="body4-baixar">
            {' '}
            <RiDownloadLine
              size={20}
              color="rgb(3, 50, 89)"
              style={{ margin: '13px 0px 0px 13px' }}
            />
          </button>{' '}
        </div>
        <div className="container-rodadasimagens">
          <img src={rodadasimagens} alt="" className="body4-rodadasimagens" />{' '}
          <div className="container-setas">
            <button className="body4-botao"> &lt; </button>{' '}
            <button className="body4-botao"> &gt;</button>
          </div>
        </div>
        <Mundo />
      </section>
    </>
  )
}
export default Body4
