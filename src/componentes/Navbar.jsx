import React from 'react'
import { Link } from 'react-router-dom'
import '../estilos/Navbar.css'

function Navbar() {
  return (
    <nav className='navbar'>
        <div className="menu1">
                        <Link to="/src/Paginas/Sobrenos.jsx" className='link'><label htmlFor="text">Sobre Nós</label></Link>
                        <br />

                        <Link to="/src/Paginas/MensagemdaPresidente.jsx"> <label htmlFor="text">Mensagem da Presidente</label></Link>
                        <br />

                        <label htmlFor="text">Órgãos Sociais</label>
                        <br />
                        <label htmlFor="text">Galeria</label>
                        <br />
                        <label htmlFor="text">Iniciativas</label>
                        <br />
                        <label htmlFor="text">Carreiras</label>
                        <br />
                        <label htmlFor="text">Qualidade &gt;</label>
                      </div>
    </nav>
  )
}
export default Navbar
