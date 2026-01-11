import React from 'react'
import { Link } from 'react-router-dom'
import '../estilos/Navbar.css'

function Navbar() {
  return (
    <div className="menu1">
      <Link to="/sobrenos" className="link">
        Sobre Nós
      </Link>
      <Link to="/mensagemdapresidente" className="link">
        Mensagem da Presidente
      </Link>
      <Link to="/orgaossociais" className="link">
        Orgãos Sociais
      </Link>
      <Link to="/galeria" className="link">
        Galeria
      </Link>
      <Link to="/iniciativas" className="link">
        Iniciativas
      </Link>
      <Link to="/carreiras" className="link">
        Carreiras
      </Link>
      <Link to="/politica-da-qualidade" className="link">
        Qualidade &gt;
      </Link>
    </div>
  )
}
export default Navbar
