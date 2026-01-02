import React from 'react'


export default function Faixas({texto, imagem, nome, cargo, regua}) {
  return (
   <>
    <div className='mesadaassembleiageralazul'>
        <div className='mesadaassembleiageralverde'>
         <p className='mesadaassembleiageraltexto'>{texto}</p>
        </div>
        <div className='esfera1'/>
        <div className='esfera2'/>
        <div className='esfera3'/>
         </div>
     <img src={imagem} alt="" className='imagem1-css' />
     <h2>{nome}</h2>
      <p>{cargo}</p>
      <div className= 'regua1'/>
   </>
  )
}
