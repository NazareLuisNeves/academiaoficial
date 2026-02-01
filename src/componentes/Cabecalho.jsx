import React from 'react'
import estilos from '../estilos/Cabecalho.module.css'

function Cabecalho({ titulo, texto, variant = 'default' }) {
  return (
    <div
      className={`cabecalho cabecalho--${variant} ${estilos.cabecalhoFichamaior}`}
    >
      {' '}
      <div className={estilos.cabecalhoContainer}>
        <h1 className={estilos.titulo}>{titulo}</h1>{' '}
        <p className={estilos.texto}>{texto}</p>{' '}
      </div>
      <div className={estilos.cabecalhoFichamenor}> </div>{' '}
    </div>
  )
}
export default Cabecalho
