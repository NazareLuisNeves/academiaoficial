import React from 'react'
import '../estilos/Body1.css'
import modelo from '../assets/modelo.png'
import edificio from '../assets/edificio.png'
export default function Body1() {
  return (
    <section className="body1">
        <div className="quadro">
              <img src={modelo} alt="" className="modelo" />
              <img src={edificio} alt="" className="edificio" />
            </div>
    
            <div className="circulocentral"></div>
    
            <span className="texto">Somos feitos de</span>
            <span className="seta">&lt;</span>
            <span className="orgulho">Orgulho</span>
            <span className="lasttext">
              Cada aluno e colaborador contribui para o <br />
              orgulho corporativo, reflectido na confiança <br />e valor pelo
              trabalho realizado. Isso fortalece a
            </span>
            <span className="nossa">nossa identidade e cultura.</span>
            <button className="botao">Sobre Nós</button>
    
            <div className="retangulo"></div>
            <span className="feitos">FEITOS</span>
            <span className="futuro">FUTURO</span>
            <span className="de">DE</span>
    
            <div className="divazul">
              <div className="divverde">
                <span className="continuamos">
                  Continuamos comprometidos com a nossa Missão
                </span>
                <span className="pontos">...</span>
              </div>
            </div>
    </section>
    
  )
}
