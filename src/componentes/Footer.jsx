import React from 'react'
import './../estilos/Footer.css'
import { BsGeoAltFill } from 'react-icons/bs'
import { BsTelephoneFill } from 'react-icons/bs'
import { BsEnvelopeFill } from 'react-icons/bs'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa'

function Footer() {
  return (
    <footer className="geral">
      <div className="footer-conteudo">
        <div className="footer-esquerda">
          <img src="icone.png" alt="Academia BAI" className="footer-icone" />
          <p className="criada">
            Criada em 2012, nasceu com a <br /> missão de contribuir para o{' '}
            <br />
            desenvolvimento de quadros <br /> superiores...
          </p>
        </div>

        <div className="container-grupos">
          <div className="footer-grupo1">
            <span className="footer-titulo">Academia Bai</span>
            <span className="footer-subtitulo">Sobre Nós</span>
            <span className="footer-subtitulo">Mensagem da Presidente</span>
            <span className="footer-subtitulo">Órgãos Sociais</span>
            <span className="footer-subtitulo">Carreiras</span>
          </div>

          <div className="footer-grupo1">
            <span className="footer-titulo">Atalhos</span>
            <span className="footer-subtitulo">Iniciativas</span>
            <span className="footer-subtitulo">Publicações</span>
            <span className="footer-subtitulo">Espaços</span>
          </div>

          <div className="footer-grupo1">
            <span className="footer-titulo">Qualidade</span>
            <span className="footer-subtitulo">Política da Qualidade</span>
            <span className="footer-subtitulo">
              Certificado de Conformidade
            </span>
          </div>

          <div className="footer-grupo1">
            <span className="footer-titulo">Contactos</span>

            <div className="linha-contacto">
              <span>AV. Pedro de Castro Van- Dúnem Loy,</span>
            </div>
            <div className="linha-contacto">
              <BsGeoAltFill className="icone-localizacao" />{' '}
              <span>Edifício AB - Academia BAI, Luanda</span>
            </div>
            <div className="linha-contacto">
              <BsTelephoneFill className="icone-contacto" />{' '}
              <span>(+244) 227 281 005</span>
            </div>
            <div className="linha-contacto">
              <BsEnvelopeFill className="icone-email" />{' '}
              <span>geral@academiabai.co.ao</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-final">
        <span>Política de Privacidade</span>
        <span className="footer-centro">2026 © Academia BAI</span>
        <div className="container-redessociais">
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedinIn />
          <FaYoutube />
        </div>
      </div>
    </footer>
  )
}

export default Footer
