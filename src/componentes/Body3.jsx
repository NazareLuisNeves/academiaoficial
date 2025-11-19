import React from 'react'
import '../estilos/Body3.css'
import moco from '../assets/moco.png'
import idoso from '../assets/idoso.png'
import moca from '../assets/moca.png'
import bolinhapri from '../assets/bolinhapri.png'

export default function Body3() {
  return (
    
    <section className="body3">
 <img src={moco} alt="" className="moco" />
            <img src={idoso} alt="" className="idoso" />
            <img src={moca} alt="" className="moca" />
    
            <div className="faixa1"></div>
            <div className="faixa2"></div>
    
            <p className="sobrenos">Sobre Nós</p>
            <h1 className="umacademia">Uma Academia de Vida!</h1>
            <p className="textao">
              Temos um desafio que é transformar vidas por via da educação. <br />
              <br />
              Somos todos uma escola onde cada indivíduo pode descobrir ou
              desenvolver o seu potencial, onde o <br />
              conhecimento é partilhado e a inovação é incentivada. <br />
              <br />
              Somos um agente importante no crescimento, dos nossos jovens, dos
              profissionais, das organizações <br />e da comunidade.
            </p>
    
            <button className="saibamais">Saiba Mais &gt;</button>
    
            <img src={bolinhapri} alt="" className="bolinhapri" />
    </section>
    
       
  )
}
