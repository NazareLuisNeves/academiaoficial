import React from 'react'
import '../estilos/Paragrafo.css'

function Paragrafo({titulo, subtitulo, conteudo}) {
  return (
    <div>
        <h2>{titulo}</h2>
        <h1>{subtitulo}</h1>
        <p>{conteudo}</p>
    </div>
  )
}
export default Paragrafo;   
