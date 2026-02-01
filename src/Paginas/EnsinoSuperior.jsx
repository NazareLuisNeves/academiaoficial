import React from 'react'
import '../estilos/EnsinoSuperior.css'
import { FaSearch } from 'react-icons/fa'
import { BsGeoAltFill } from 'react-icons/bs'
import { BsTelephoneFill } from 'react-icons/bs'
import { BsEnvelopeFill } from 'react-icons/bs'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa'

function EnsinoSuperior() {
  return (
    <>
      <header className="header-ensino">
        {' '}
        <div className="ensino-container">
          {' '}
          <div className="container-imagem">
            <img src="isaf.png" alt="" className="ensino-isafImg" />{' '}
          </div>
          <div className="ensino-caixa">
            {' '}
            <div className="ensino-pesquisa">
              {' '}
              <input
                type="text"
                className="ensino-barra"
                placeholder="Pesquisar..."
              />{' '}
              <FaSearch className="ensino-lupa" />
            </div>{' '}
            <div className="ensino-menu">
              {' '}
              <label htmlFor="text" className="ensino-label6">
                {' '}
                Academia BAI▾{' '}
              </label>{' '}
              <label htmlFor="text" className="ensino-label7">
                {' '}
                Sobre Nós▾{' '}
              </label>{' '}
              <label htmlFor="text" className="ensino-label8">
                {' '}
                Licenciaturas▾{' '}
              </label>{' '}
              <label htmlFor="text" className="ensino-label9">
                {' '}
                Publicações{' '}
              </label>{' '}
              <label htmlFor="text" className="ensino-label10">
                {' '}
                Contactos▾{' '}
              </label>{' '}
            </div>{' '}
          </div>{' '}
          <div className="ensino-botoes">
            {' '}
            <div className="ensino-circulomaior">
              {' '}
              <div className="ensino-circulomenor">
                <span className="ensino-bolinha"></span>
                <span className="ensino-bolinha"></span>
                <span className="ensino-bolinha"></span>
              </div>
            </div>{' '}
          </div>{' '}
        </div>{' '}
        <div className="container-central">
          <h3 className="primeiro-titulo">
            {' '}
            BEM VINDO AO <span style={{ fontWeight: 'bold' }}>ISAF</span>{' '}
          </h3>{' '}
          <p className="segundo-titulo">
            {' '}
            O Teu Ponto De <br /> Partida para <br />{' '}
            <span
              style={{
                color: 'rgb(222, 28, 183)',
              }}
            >
              {' '}
              Escolhas{' '}
            </span>{' '}
            que <br />
            Fazem a{' '}
            <span
              style={{
                color: 'rgb(222, 28, 183)',
              }}
            >
              {' '}
              Diferença{' '}
            </span>{' '}
            !
          </p>{' '}
          <p className="terceiro-titulo">
            {' '}
            <span style={{ color: 'yellow' }}>*</span>O novo website do ISAF
            está a caminho, mais jovem e <br /> dinâmico! Em breve, descobrirás
            todas as novidades para <br /> impulsionar o teu futuro. Por agora,
            explora as informações <br /> essenciais e prepara-te para o que vem
            aí!{' '}
          </p>{' '}
          <button className="sobrenos-ensino">SOBRE NÓS &gt;</button>{' '}
        </div>
      </header>{' '}
      <main className="corpo">
        {' '}
        <img src="isaf-senhora.png" alt="" className="isaf-senhora" />{' '}
        <div className="container-corpo">
          <p className="sobrenos2">Sobre Nós</p>{' '}
          <h1 className="umacademia2">
            {' '}
            Cultivamos mentes curiosas, inovadoras, <br /> prontas para
            desbravar o mundo{' '}
          </h1>{' '}
          <p className="textao2">
            {' '}
            Somos uma instituição de ensino superior que pretende afirmar-se
            como uma escola de <br /> referência e um centro de excelência, numa
            aposta que advém dum compromisso verdadeiro com <br /> a educação
            para a transformação social e económica de Angola e do mundo.{' '}
          </p>{' '}
          <button className="saibamais4">Saiba Mais &gt;</button>{' '}
        </div>
        <img src="isaf-moca.png" alt="" className="isaf-moca" />{' '}
        <div className="container-exameAcesso">
          <h1 className="exame-de-acesso">Exames de Acesso</h1>{' '}
          <p className="texto-exame">
            {' '}
            Se tens o sonho de construir uma carreira <br /> sólida, alcançar
            novos patamares e ser <br /> protagonista do teu próprio sucesso,
            este é o <br /> momento.{' '}
          </p>{' '}
          <button className="inscricao">Inscrever-me &gt;</button>{' '}
        </div>
        <h1 className="licenciaturas2">Licenciaturas</h1>{' '}
        <div className="area-licenciaturas">
          {' '}
          <div>
            {' '}
            <img src="informatica-ensino.png" alt="" />{' '}
            <h2>
              {' '}
              Informática de Gestão <br /> Financeira{' '}
            </h2>{' '}
            <p>Saiba Mais</p>{' '}
          </div>{' '}
          <div>
            {' '}
            <img src="gestao-ensino.png" alt="" />{' '}
            <h2>Gestão Bancária e de Seguros</h2> <p>Saiba Mais</p>{' '}
          </div>{' '}
          <div>
            {' '}
            <img src="contabilidade-ensino.png" alt="" />{' '}
            <h2>Contabilidade e Finanças</h2> <p>Saiba Mais</p>{' '}
          </div>{' '}
        </div>{' '}
        <h1 className="outros-programas">Outros Programas</h1>{' '}
        <div className="area-programas">
          {' '}
          <div>
            {' '}
            <img src="cursoisaf.png" alt="" /> <h2>Curso Preparatório</h2>{' '}
            <p>Ver Programa</p>{' '}
          </div>{' '}
          <div>
            {' '}
            <img src="campoisaf.png" alt="" /> <h2>Campo de Cacimbo</h2>{' '}
            <p>Ver Programa</p>{' '}
          </div>{' '}
        </div>{' '}
      </main>{' '}
      <footer className="geral2">
        <div className="footer-conteudo-ensino">
          <div className="footer-esquerda-ensino">
            <img
              src="isaf-icone.png"
              alt="Academia BAI"
              className="ensino-icone"
            />
          </div>

          <div className="container-grupos-ensino">
            <div className="ensino-grupo1">
              <span className="ensino-titulo">Atalhos</span>
              <span className="ensino-subtitulo">Sobre Nós</span>
              <span className="ensino-subtitulo">Mensagem da Presidente</span>
              <span className="ensino-subtitulo">Academia BAI</span>
            </div>

            <div className="ensino-grupo1">
              <span className="ensino-titulo">Licenciaturas</span>
              <span className="ensino-subtitulo">
                Informática de Gestão <br />
                Finaceira
              </span>
              <span className="ensino-subtitulo">
                Gestão Bancária e de <br />
                Seguros
              </span>
              <span className="ensino-subtitulo">Contabilidade e Finanças</span>
            </div>

            <div className="ensino-grupo1">
              <span className="ensino-titulo">Contactos</span>

              <div className="linha-contacto-ensino">
                <span>AV. Pedro de Castro Van- Dúnem Loy,</span>
              </div>
              <div className="linha-contacto-ensino">
                <BsGeoAltFill className="icone-localizacao" />{' '}
                <span>
                  Edifício AB - Academia BAI, Luanda- <br />
                  Angola
                </span>
              </div>
              <div className="linha-contacto-ensino">
                <BsTelephoneFill className="icone-contacto" />{' '}
                <span>(+244) 932-599-296</span>
              </div>
              <div className="linha-contacto-ensino">
                <BsEnvelopeFill className="icone-email" />{' '}
                <span>secretaria@isaf.co.ao</span>
              </div>
            </div>
          </div>
        </div>

        <div className="ensino-final">
          <span className="ensino-centro">2026 © ISAF</span>
          <div className="container-redessociais-ensino">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaYoutube />
          </div>
        </div>
      </footer>
    </>
  )
}
export default EnsinoSuperior
