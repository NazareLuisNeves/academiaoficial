import React from 'react'
import './../estilos/Body5.css'
import presidente from './../assets/presidente.png'
import tias from './../assets/tias.png'
import conferencia from './../assets/conferencia.png'
import confe2 from './../assets/confe2.png'
import senhora from './../assets/senhora.png'
import bolinhapri from './../assets/bolinhapri.png'

function Body5() {
  return (
    <>
      <section className="body5">
        <button className="maispubli">Mais Publicações &gt;</button>
        <p className="segundaacademia">Academia BAI</p>
        <h1 className="ultimaspubli">Últimas Publicações</h1>
        <div className="caixinha0">
          <img src={presidente} alt="" className="presidente" />
          <p className="condecorada">
            Presidente da Academia <br /> BAI condecorada na...{' '}
          </p>
          <button className="artigorecente">Artigo Recente</button>
          <p className="lerpubli">Ler Publicação</p>
        </div>
        <div className="caixinha">
          <img src={tias} alt="" className="tias" />
          <p className="isaf">
            ISAF e The Bridge Global
            <br /> assinam protocolo de...
          </p>
          <button className="dataoito">08/10/2025</button>
          <p className="lerpubli">Ler Publicação</p>
        </div>
        <div className="caixinha2">
          <img src={conferencia} alt="" className="conferencia" />
          <p className="isaf2">
            ISAF e ISPCS assinam <br />
            Protocolo de Cooperação...
          </p>
          <button className="data5">19/08/2025</button>
          <p className="lerpubli">Ler Publicação</p>
        </div>
        <div className="caixinha3">
          <img src={confe2} alt="" className="confe2" />
          <p className="isafencerra">
            ISAF Encerra Campo de <br />
            Cacimbo com programa...{' '}
          </p>
          <button className="data6">08/08/2025</button>
          <p className="lerpubli">Ler Publicação</p>
        </div>
        <div className="caixinha4">
          <img src={senhora} alt="" className="senhora" />
          <p className="RH">
            RH Ágil: o que muda, o <br />
            que desafia e o que...
          </p>
          <button className="data7">25/06/2025</button>
          <p className="lerpubli">Ler Publicação</p>
        </div>
        <img src={bolinhapri} alt="" className="bolinhapri"></img>
      </section>
    </>
  )
}
export default Body5
