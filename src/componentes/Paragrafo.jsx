import React from 'react'
import estilos from '../estilos/Paragrafo.module.css'

function Paragrafo({ titulo, subtitulo, conteudo, style }) {
  return (
    <div className={estilos.ParagrafoContainer} style={style?.estilosparagrafo}>
      <h2 className={estilos.ParagrafoTitulo} style={style?.titulo}>
        {titulo}
      </h2>
      <h1 className={estilos.ParagrafoSubtitulo} style={style?.subtitulo}>
        {subtitulo}
      </h1>
      <p className={estilos.ParagrafoConteudo} style={style?.conteudo}>
        {conteudo}
      </p>
    </div>
  )
}
export default Paragrafo
