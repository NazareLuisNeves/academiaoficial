import React from 'react'
import '../estilos/EnsinoSuperior.css'
import lupa from '../imagens/lupa.png'

function EnsinoSuperior() {
  return (
    <>
      <header>
        <div className="containerheader2">
          <img src="isaf.png" alt="" className="isaf-img" />
          <div className="caixa2">
            <div className="pesquisa2">
              <input
                type="text"
                className="barra2"
                placeholder="Pesquisar..."
              />
              <img src={lupa} alt="" className="lupa2" />
            </div>

            <div className="menu2">
              <label htmlFor="text" className="label6">
                Academia BAI▾
              </label>

              <label htmlFor="text" className="label7">
                Ensino▾
              </label>
              <label htmlFor="text" className="label8">
                Publicações▾
              </label>
              <label htmlFor="text" className="label9">
                Espaços
              </label>
              <label htmlFor="text" className="label10">
                Contactos▾
              </label>
            </div>
          </div>

          <div className="botoes2">
            <div className="circulomaior2">
              <div className="circulomenor2">
                <div className="bolinha4">
                  <div className="bolinha5"></div>
                  <div className="bolinha6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
export default EnsinoSuperior
