import React from 'react'
import '../estilos/Iniciativas.css'

export default function Iniciativa({ imagem, titulo, conteudo }) {
  return (
    <div className="faixainiciativa">
      <img src={imagem} alt="" className="imageminiciativa" />
      <h2 className="tituloiniciativa">{titulo}</h2>
      <p className="conteudoiniciativa">{conteudo}</p>
      <button className="veriniciativas">Ver iniciativas &gt;</button>
      <div className="faixalateral"></div>
    </div>
  )
}
