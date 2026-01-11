import React from 'react'
import './../estilos/Body5.css'
import presidente from './../assets/presidente.png'
import tias from './../assets/tias.png'
import conferencia from './../assets/conferencia.png'
import confe2 from './../assets/confe2.png'
import senhora from './../assets/senhora.png'

function Body5() {
  return (
    <>
      <section className="container-body5">
        {' '}
        <div className="body5-topo">
          <div className="container-titulos">
            <p>Academia BAI</p>
            <h1>Últimas Publicações</h1>{' '}
            <button className="maispubli">Mais Publicações &gt;</button>{' '}
          </div>
        </div>
        <div className="container-publicacoes">
          <div className="body5-caixinha1">
            {' '}
            <img src={presidente} alt="" />{' '}
            <p>
              {' '}
              Presidente da Academia <br /> BAI condecorada na...{' '}
            </p>{' '}
            <button className="body5-artigorecente">Artigo Recente</button>{' '}
            <p className="body5-lerpubli">Ler Publicação</p>{' '}
          </div>{' '}
          <div className="body5-caixinha1">
            {' '}
            <img src={tias} alt="" />{' '}
            <p>
              {' '}
              ISAF e The Bridge Global <br /> assinam protocolo de...{' '}
            </p>{' '}
            <button className="body5-datas">08/10/2025</button>{' '}
            <p className="body5-lerpubli">Ler Publicação</p>{' '}
          </div>{' '}
          <div className="body5-caixinha1">
            {' '}
            <img src={conferencia} alt="" />{' '}
            <p>
              {' '}
              ISAF e ISPCS assinam <br /> Protocolo de Cooperação...{' '}
            </p>{' '}
            <button className="body5-datas">19/08/2025</button>{' '}
            <p className="body5-lerpubli">Ler Publicação</p>{' '}
          </div>{' '}
          <div className="body5-caixinha1">
            {' '}
            <img src={confe2} alt="" />{' '}
            <p>
              {' '}
              ISAF Encerra Campo de <br /> Cacimbo com programa...{' '}
            </p>{' '}
            <button className="body5-datas">08/08/2025</button>{' '}
            <p className="body5-lerpubli">Ler Publicação</p>{' '}
          </div>{' '}
          <div className="body5-caixinha1">
            {' '}
            <img src={senhora} alt="" />{' '}
            <p>
              {' '}
              RH Ágil: o que muda, o <br /> que desafia e o que...{' '}
            </p>{' '}
            <button className="body5-datas">25/06/2025</button>{' '}
            <p className="body5-lerpubli">Ler Publicação</p>{' '}
          </div>{' '}
        </div>
        <img src="bolinhapri.png" alt="" className="bolinhapri"></img>{' '}
      </section>
    </>
  )
}
export default Body5
