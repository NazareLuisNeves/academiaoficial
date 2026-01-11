import React from 'react'
import '../estilos/FormacaoComplementar.css'

export default function FormacaoComplementar() {
  return (
    <>
      <header className="header-formacao">
        {' '}
        <div className="containerheader2">
          {' '}
          <img
            src="academia-formacao.png"
            alt=""
            className="academia-formacao"
          />{' '}
          <div className="caixa3">
            {' '}
            <div className="pesquisa3">
              {' '}
              <input
                type="text"
                className="barra3"
                placeholder="Pesquisar..."
              />{' '}
              <img src="lupared.png" alt="" className="lupared" />{' '}
            </div>{' '}
          </div>{' '}
          <button className="cursos-disponiveis">Cursos Disponíveis</button>{' '}
        </div>{' '}
        <h3 className="primeiro-titulo1">
          {' '}
          Academia Executive <br /> Education{' '}
        </h3>{' '}
        <p className="segundo-titulo1">
          {' '}
          Criada em 2012, nasceu com a missão de contribuir para o
          desenvolvimento de quadros <br /> superiores, fomentando o
          conhecimento, as competências técnicas, comportamentais e <br />{' '}
          culturais, numa trnsferência contínua de saber, saber fazer e saber
          SER.{' '}
        </p>{' '}
      </header>
      <main className="body-formacao">
        <img src="academia-formacao.png" alt="" className="academia-formacao" />
        <div className="container-formacao">
          <p className="formacao-sobrenos2">Sobre Nós</p>{' '}
          <h1>Academia Executive Education</h1>{' '}
          <p>
            {' '}
            Na Academia Executive Education os cursos são cuidadosamente
            desenvolvidos por <br />
            especialistas e são actualizados regularmente para garantir que os
            nossos formandos <br />
            adquiram as competências e conhecimentos mais recentes e aplicáveis.
            Oferecemos uma <br />
            ampla variedade de cursos de mercado que cobrem as áreas mais
            relevantes para <br />
            profissionais e empresas.{' '}
          </p>{' '}
        </div>
      </main>
    </>
  )
}
