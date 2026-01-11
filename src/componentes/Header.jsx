import React from 'react'
import './../estilos/Header.css'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Navbar from '../componentes/Navbar.jsx'

function Header() {
  return (
    <>
      <header>
        <div className="home-containerheader">
          {' '}
          <img src="academialogo.png" alt="" className="home-logo" />{' '}
          <div className="home-caixa">
            {' '}
            <Navbar />{' '}
            <div className="home-pesquisa">
              {' '}
              <input
                type="text"
                className="home-barra"
                placeholder="Pesquisar..."
              />{' '}
              <FaSearch className="home-lupa" />
            </div>{' '}
            <div className="home-menu">
              {' '}
              <label htmlFor="text" className="home-label1">
                {' '}
                Academia BAI▾{' '}
              </label>{' '}
              <Link to="/ensino-superior" className="home-label2">
                Ensino▾{' '}
              </Link>
              <label htmlFor="text" className="home-label3">
                {' '}
                Publicações▾{' '}
              </label>{' '}
              <label htmlFor="text" className="home-label4">
                {' '}
                Espaços{' '}
              </label>{' '}
              <label htmlFor="text" className="home-label5">
                {' '}
                Contactos▾{' '}
              </label>{' '}
            </div>{' '}
          </div>{' '}
          <div className="home-botoes">
            {' '}
            <div className="home-circulomaior">
              {' '}
              <div className="home-circulomenor">
                <span className="home-bolinha"></span>
                <span className="home-bolinha"></span>
                <span className="home-bolinha"></span>
              </div>
            </div>{' '}
          </div>{' '}
        </div>{' '}
      </header>
    </>
  )
}
export default Header
