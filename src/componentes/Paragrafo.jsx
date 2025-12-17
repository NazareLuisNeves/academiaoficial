import React from 'react'
import '../estilos/Paragrafo.css'

function Paragrafo({titulo, subtitulo, conteudo}) {
  return (
    <div>
        <h2 className='titulo'>{titulo}</h2>
        <h1 className='subtitulo'>{subtitulo}</h1>
        <p className='conteudo'>{conteudo}</p>
    </div>
  )
}
export default Paragrafo;   
