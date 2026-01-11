import React from 'react'
import './../estilos/Body3.css'
import { Link } from 'react-router-dom'

function Body3() {
  return (
    <>
      <section className="body3">
        {' '}
        <img src="moco.png" alt="" className="body3-moco" />{' '}
        <img src="idoso.png" alt="" className="body3-idoso" />{' '}
        <img src="moca.png" alt="" className="body3-moca" />{' '}
        <div className="body3-faixa1" /> <div className="body3-faixa2" />{' '}
        <div className="container-sobrenos">
          <p className="sobrenos">Sobre Nós</p> <h1>Uma Academia de Vida!</h1>{' '}
          <p>
            {' '}
            Temos um desafio que é transformar vidas por via da educação. <br />{' '}
            <br /> Somos todos uma escola onde cada indivíduo pode descobrir ou
            desenvolver o seu potencial, onde o <br /> <br /> conhecimento é
            partilhado e a inovação é incentivada. <br /> <br /> Somos um agente
            importante no crescimento, dos nossos jovens, dos profissionais, das
            organizações <br /> <br /> e da comunidade.{' '}
          </p>{' '}
          <Link to="/sobrenos">
            <button>Saiba Mais &gt;</button>{' '}
          </Link>
        </div>
        <img src="bolinhapri.png" alt="" className="bolinhapri" />{' '}
      </section>
    </>
  )
}
export default Body3
