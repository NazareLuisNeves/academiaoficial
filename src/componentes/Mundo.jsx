import React from 'react'
import mundo from './../assets/mundo.png'

function Mundo() {
  return (
   <div className="faixaazul">
        <div className="faixaverde"></div>
        <img src={mundo} alt="" className='mundo'/>
      </div>
  )
}
export default Mundo;
