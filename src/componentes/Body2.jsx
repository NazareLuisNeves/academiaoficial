import React from 'react'
import './../estilos/Body2.css'

function Body2() {
  return (
    <>
      <section className="body2">
        {' '}
        <p className="seta"> &lt; </p>{' '}
        <div>
          {' '}
          <img src="Contabilidadeefinancas.png" alt="" />{' '}
          <p className="licenciatura">Licenciatura </p>{' '}
          <p>
            Contabilidade e<br />
            Finanças
          </p>{' '}
          <span>15/08/2024</span>{' '}
        </div>{' '}
        <div>
          {' '}
          <img src="gestaobancaria.png" alt="" />{' '}
          <p className="licenciatura">Licenciatura</p>{' '}
          <p>
            Gestão Bancária e <br />
            de Seguros
          </p>{' '}
          <span>15/08/2024</span>{' '}
        </div>{' '}
        <div>
          {' '}
          <img src="informatica.png" alt="" />{' '}
          <p className="licenciatura">Licenciatura</p>{' '}
          <p>
            Informática de <br />
            Gestão Financeira
          </p>{' '}
          <span>15/08/2024</span>{' '}
        </div>{' '}
        <div>
          {' '}
          <img src="gestaoemanutencao.png" alt="" />{' '}
          <p className="formacao">Formação</p>{' '}
          <p>
            Gestão e <br />
            Manutenção de...
          </p>{' '}
          <span>30/09/2024</span>{' '}
        </div>{' '}
        <p className="seta"> &gt; </p>{' '}
      </section>
    </>
  )
}
export default Body2
