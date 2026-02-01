import React from 'react'
import Header from '../componentes/Header'
import Cabecalho from '../componentes/Cabecalho'
import Bolinha from '../componentes/Bolinha'
import Footer from '../componentes/Footer'
import './../estilos/Reclamacoes.css'
import { TbTriangleFilled } from 'react-icons/tb'

export default function Reclamacoes() {
  return (
    <>
      <Header variant="default" />
      <Cabecalho variant="default" />
      <div className="container-reclamacoes">
        <div>
          <img src="primeiraimagemreclamacoes" alt="" />
          <span>Ensino Superior</span>
          <button>
            Preencher <TbTriangleFilled className="icone-ne" size={12} />
          </button>
        </div>

        <div>
          <img src="segundaimagemreclamacoes" alt="" />
          <span>Formação Profissional</span>
          <button>
            Preencher <TbTriangleFilled className="icone-ne" size={12} />
          </button>
        </div>

        <div>
          <img src="terceiraimagemreclamacoes" alt="" />
          <span className="terceirospan">
            Contratação de Serviços (Imobiliária e Serviços){' '}
          </span>
          <button>
            Preencher <TbTriangleFilled className="icone-ne" size={12} />
          </button>
        </div>
      </div>
      <Bolinha />
      <Footer />
    </>
  )
}
