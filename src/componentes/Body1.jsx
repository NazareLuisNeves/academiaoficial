import React from 'react'
import './../estilos/Body1.css'
import edificio from './../assets/edificio.png'
import moca from './../assets/mocaacademiabai.png'
import { Link } from 'react-router-dom'

function Body1() {
  return (
    <>
      <section className="body1">
        {' '}
        <div className="body1-quadro">
          <img src={moca} alt="" className="body1-modelo" />
          <img src={edificio} alt="" className="body1-edificio" />

          <div className="body1-circulocentral">
            <span className="body1-texto">Somos feitos de</span>
            <span className="body1-seta">&lt;</span>
            <span className="body1-orgulho">Orgulho</span>

            <span className="body1-lasttext">
              Cada aluno e colaborador contribui para o
              <br />
              orgulho corporativo, reflectido na confiança
              <br />
              e valor pelo trabalho realizado. Isso fortalece a
              <br />
              nossa identidade e cultura.
            </span>

            <Link to="/sobrenos">
              <button className="body1-botao">Sobre Nós</button>
            </Link>
          </div>
          <div className="container-retangulo">
            <div className="body1-retangulo" />

            <div className="container-span">
              <span className="body1-feitos">FEITOS</span>

              <span className="body1-de">DE</span>
            </div>
            <span className="body1-futuro">FUTURO</span>
          </div>

          <div className="body1-divazul">
            <div className="body1-divverde">
              <p className="body1-continuamos">
                Continuamos comprometidos com a nossa Missão
                <span
                  style={{
                    color: ' rgb(5, 228, 228)',
                    fontSize: '38px',

                    borderRadius: '30px',
                    letterSpacing: '0px',
                  }}
                >
                  ...
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Body1
