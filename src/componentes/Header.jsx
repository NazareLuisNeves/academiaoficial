import React from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import '../estilos/header.css'
import academialogo from '../assets/academialogo.png'



export default function Header() {
  return (
    <header>
      <div className="containerheader">
        <img src={academialogo} alt=".logo" className="logo" />
        <div className="caixa">
          <div className="pesquisa">
            <input type="text" className="barra" placeholder="Pesquisar..." />
            <FaMagnifyingGlass className="lupa" />
          </div>

          <div className="menu">
            <label htmlFor="text" className="label1">
            Academia BAI▾
            </label>
            <label htmlFor="text" className="label2">
            Ensino▾
            </label>
            <label htmlFor="text" className="label3">
            Publicações▾
            </label>
            <label htmlFor="text" className="label4">
            Espaços
            </label>
            <label htmlFor="text" className="label5">
            Contactos▾
            </label>
          </div>
        </div>

        <div className="botoes">
          <div className="circulomaior">
            <div className="circulomenor">
              <div className="bolinha1">
                <div className="bolinha4"></div>
                <div className="bolinha3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
