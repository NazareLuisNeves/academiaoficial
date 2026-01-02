import React from 'react'
import estilos from '../estilos/Cabecalho.module.css'

 function Cabecalho({titulo, texto}) {
  return (
    <div className={estilos.fichamaior}>
        <h1 className={estilos.titulo}>{titulo}</h1>
        <p className={estilos.texto}>{texto}</p>
        <div className={estilos.fichamenor}> </div>
    </div>
  )
}
export default Cabecalho;
