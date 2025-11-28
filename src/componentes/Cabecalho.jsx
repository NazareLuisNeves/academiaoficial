import React from 'react'
import '../estilos/Cabecalho.css'

 function Cabecalho({titulo, texto}) {
  return (
    <div className='fichamaior'>
        <h1>{titulo}</h1>
        <p>{texto}</p>
        <div className='fichamenor'> </div>
    </div>
  )
}
export default Cabecalho;
