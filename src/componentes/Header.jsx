import React from 'react'
import './../estilos/Header.css'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Navbar from '../componentes/Navbar.jsx'

function Header({ variant = 'default' }) {
  return (
    <>
      <header className={`header header--${variant}`}>
        <div className="home-containerheader">
          {' '}
          <img src="academiabai.png" alt="" className="home-logo" />{' '}
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
              <Link to="/home" className="home-label1">
                Academia BAI▾
              </Link>{' '}
              <Link to="/ensino-superior" className="home-label2">
                Ensino▾{' '}
              </Link>
              <Link to="/livros" className="home-label3">
                Publicações▾{' '}
              </Link>{' '}
              <Link to="/espacos" className="home-label4">
                Espaços
              </Link>{' '}
              <Link to="/espacos" className="home-label5">
                Contactos▾{' '}
              </Link>{' '}
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
