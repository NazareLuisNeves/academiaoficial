import React from 'react'
import './../estilos/Footer.css'
import redessociais from './../assets/redessociais.png'
import resto from './../assets/resto.png'
import icone from './../assets/icone.png'
import cincobolinhas from './../assets/cincobolinhas.png'

 function Footer() {
  return (
    <>
     <footer className="geral">
      <div className="footer" />
      <img src={icone} alt="" className="icone" />
      <p className="criada">
        Criada em 2012, nasceu com a missão de <br /> contribuir para o
        desenvolvimento de <br /> quadros superiores…
      </p>
      <div className="grupo1">
        <p className="titulo">Academia Bai</p>
        <br />
        <p className='sobrenosfooter'>Sobre Nós</p>
        <br />
        <p className='mensagemdapr'>
          Mensagem da <br />
          Presidente
        </p>
        <br />
        <p className='orgaossoci'>Órgãos sociais</p>
        <br />
        <p className='carreiras'>Carreiras</p>
      </div>
      <div className="grupo2">
        <p className="atalhos">Atalhos</p>
        <br />
        <p className='iniciativas'>Iniciativas</p>
        <br />
        <p className='publicacoes'>Publicações</p>
        <br />
        <p className='espacos'>
          
          <br />
          Espaços
        </p>
      </div>
      <div className="grupo3">
        <p className="qualidade">Qualidade</p>
        <br />
        <p className='politicaQualidade'> Política da Qualidade</p>
        <br />
        <p className='certificado'>Certificado de Conformidade</p>
      </div>
      <p className="contatos">Contactos</p>
      <br />
      <p className="avenida">AV. Pedro de Castro Van-Dúnem Loy, Edifício</p>
      <br />
      <p className="AB">
        AB - Academia BAI, Morro Bento, Luanda- <br />
        Angola
      </p>
      <br />
      <p className="number">(+244) 277 281 005</p>
      <br />
      <p className="email">geral@academiabai.co.ao</p>
      <br />
      <img src={resto} alt="" className="resto" />
      <img src={cincobolinhas} alt="" className="cincobolinhas" />
      <div />
      <div className="final">
        <p className="politica">Política de Privacidade</p>
        <p className="centro">2025 &copy; Academia BAI</p>
        <img src={redessociais} alt="" className="redessociais" />
      </div>
    </footer>
    </>
  )
}
export default Footer
