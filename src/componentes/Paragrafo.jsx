import React from 'react'
import estilos from'../estilos/Paragrafo.module.css'

function Paragrafo({titulo, subtitulo, conteudo, style}) {
  return (
    <div style={style?.estilosparagrafo}>
        <h2 className={estilos.titulo} style={style?.titulo}>{titulo}</h2>
        <h1 className={estilos.subtitulo} style={style?.subtitulo}>{subtitulo}</h1>
        <p className={estilos.conteudo} style={style?.conteudo}>{conteudo}</p>
    </div>
  )
}
export default Paragrafo;   
