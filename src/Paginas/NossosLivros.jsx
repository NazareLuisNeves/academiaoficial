import React from 'react'
import Header from '../componentes/Header'
import Cabecalho from '../componentes/Cabecalho'
import Bolinha from '../componentes/Bolinha'
import Footer from '../componentes/Footer'
import './../estilos/NossosLivros.css'

function NossosLivros() {
  return (
    <>
      <Header variant="default" />
      <Cabecalho
        titulo="Nossos Livros"
        texto="Academia BAI > Publicações > Nossos Livros"
        variant="default"
      />
      <div className="container-livros">
        <div className="container-firstbook">
          <img src="primeirolivro.jpg" alt="" />
          <span className="primeirotexto">Reflexões Entre Lusófonos</span>
          <button>Ver Livro</button>
        </div>

        <div className="container-secondbook">
          <img src="segundolivro.jpg" alt="" />
          <span className="segundotexto">
            Livro de 10 Anos - Dra. Noelma Viegas D'Abreu
          </span>
          <button>Ver Livro</button>
        </div>
      </div>
      <Bolinha />
      <Footer />
    </>
  )
}
export default NossosLivros
