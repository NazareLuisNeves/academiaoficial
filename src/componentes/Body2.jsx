import React from 'react'
import '../estilos/Body2.css'   
import Contabilidadeefinancas from '../assets/Contabilidadeefinancas.png'
import gestaobancaria from '../assets/gestaobancaria.png'
import informatica from '../assets/informatica.png'
import gestaoemanutencao from '../assets/gestaoemanutencao.png'

 function Body2() {
  return (
    <>
     <section className='body2'> 
     <p  className="setadireita"> &lt; </p>
      <div className="div1" >
          <img src={Contabilidadeefinancas} alt="" className='Contabilidade'/>
            <p className="licenciatura1" >Licenciatura </p>
            <p className="contabilidade">Contabilidade e<br/>Finanças</p>
            <p className="data">15/08/2024</p>
        </div>
        <div className="segundadiv" >
         <img src={gestaobancaria} alt="" className="gestaobancaria" /> 
         <p className="licenciatura2" >Licenciatura</p>
         <p className="gestao" >Gestão Bancária e <br/>de Seguros</p>
         <p className="data2" >15/08/2024</p>
        </div>
        <div className="terceiradiv" >
            <img src={informatica} alt="" className="informatica" />
             <p className="licenciatura3" >Licenciatura</p>
             <p className="informatica2" >Informática de <br/>Gestão Financeira</p>
         <p className="data3" >15/08/2024</p>
        </div>
        <div className="quartadiv" >
    <img src={gestaoemanutencao} alt="" className="gestaoemanutencao" />
    <p className="formacao" >Formação</p>
     <p className="manutencao" >Gestão e <br/>Manutenção de...</p>
      <p className="data4" >30/09/2024</p>
        </div>
        <p  class="setadireita1"> &gt; </p></section>
    </>
  )
}
export default Body2;
