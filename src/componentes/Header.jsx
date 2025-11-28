import React from 'react'

import '../estilos/header.css'
import { useEffect, useState } from 'react'
import lupa from '../assets/lupa.png'


 function Header() {
  const [scrolledUp, setScrolledUp] = useState(false)
  const [lastScroll, setLastScroll]=useState(0)
  useEffect(() => {
   const handleScroll= ()=> {
      const currentScroll = window.scrollY;
      if (currentScroll < 80) {
        setScrolledUp(false)
      setLastScroll(currentScroll)
       return;
      }
      if(currentScroll > 80){
        setScrolledUp(true)
      } 
       setLastScroll(currentScroll)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, []);
  return (
    <>
      {!scrolledUp && (
        <header>
           
          <div className="containerheader">
            <img src="/academialogo.png" alt="" className="logo" />
            <div className="caixa">
              <div className="pesquisa">
                <input
                  type="text"
                  className="barra"
                  placeholder="Pesquisar..."
                />
                <img src={lupa} alt="" className="lupa" />
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
      )}


      {!scrolledUp && (
      <header className="header2">
          <div className="caixacentral">
            <img src="icone.png" alt="" className="academia" />
              <div className="busca">
                <input type="text" name="" className="placeholder" placeholder="Pesquisar artigos..."/>
                <img src="lupa.png" alt="" className="busca1" />
              </div>
              <div className="header3">
              <label htmlFor="text" className="text1">
                Academia BAI▾
              </label>
              <label htmlFor="text" className="text2">
                Ensino ▾
              </label>
              <label htmlFor="text" className="text3">
                Publicações ▾
              </label>
              <label htmlFor="text" className="text4">
                Espaços
              </label>
              <label htmlFor="text" className="text5">
                Contactos ▾
              </label>
            </div>
            <div className="circulobranco">
              <img src="portugal.png" alt="" className='portugal' />
              <h1 className="pais">PT</h1>
              <p className="chapeu">^</p>
            </div>
            <div className="circuloazul">
              <div className="primeira"></div>
              <div className="segunda"></div>
              <div className="terceira"></div>
            </div>
          </div>
        </header>
      )}
    </>
  )
}
export default Header