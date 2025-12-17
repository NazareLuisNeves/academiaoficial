import React from 'react'
import './../estilos/Body1.css'
import edificio from './../assets/edificio.png'
import modelo from './../assets/modelo.png'

function Body1() {
  return (
    <>
      <section className="body1">
        <div className="quadro">
          <img src={modelo} alt="" className="modelo" />
          <img src={edificio} alt="" className="edificio" />
        </div>
        <div className="circulocentral"></div>
        <p className="texto">Somos feitos de</p>
        <p className="seta"> &lt; </p>
        <p className="orgulho">Orgulho</p>
        <p className="lasttext"> Cada aluno e colaborador contribui para o</p>
        <p className="lastdois">
          orgulho corporativo, reflectido na confiança
        </p>
        <p className="lasttres">
          e valor pelo trabalho realizado. Isso fortalece a
        </p>
        <p className="nossa">nossa identidade e cultura.</p>
        <button className="botao">Sobre Nós</button>
        <div className="retangulo"></div>
        <p className="feitos">FEITOS</p>
        <p className="futuro">FUTURO</p>
        <p className="de">DE</p>
        <div className="divazul">
          <div className="divverde">
            <p className="continuamos">
              Continuamos comprometidos com a nossa Missão
            </p>
            <p className="pontos">...</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Body1
