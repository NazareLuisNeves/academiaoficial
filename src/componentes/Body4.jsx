import React from 'react'
import './../estilos/Body4.css'
import laço from './../assets/laço.png'
import download from './../assets/download.png'
import rodadasimagens from './../assets/rodadasimagens.png'
import mundo from './../assets/mundo.png'

function Body4() {
  return (
    <>
      <section className="body4">
        <p className="academiabai">Academia BAI</p>
        <h1 className="espaco">Espaço para Eventos Corporativos</h1>
        <p className="textao2">
          Na Academia BAI, cada detalhe é cuidadosamente planeado para garantir
          o máximo conforto, <br /> funcionalidade e sucesso para o seu evento.
          Seja qual for a ocasião, estamos prontos para <br /> oferecer o melhor
          espaço e os melhores serviços. Venha conhecer e realizar o seu evento{' '}
          <br />
          connosco!{' '}
        </p>

        <button className="saibamais2">Saiba Mais &gt;</button>
        <button className="agendarvisita">Agendar Visita</button>
        <img src={laço} alt="" className="laço" />

        <button className="baixar"></button>
        <img src={download} alt="" className="download" />
        <img src={rodadasimagens} alt="" className="rodadasimagens" />
        <button className="botaopri"> &lt; </button>
        <button className="botaoseg"> &gt;</button>
        <div className="faixaazul">
          <div className="faixaverde"></div>
          <img src={mundo} alt="" className=" mundo" />
        </div>
      </section>
    </>
  )
}
export default Body4
