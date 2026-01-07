import React from 'react'
import Header from '../componentes/Header'
import Cabecalho from '../componentes/Cabecalho'
import Bolinha from '../componentes/Bolinha'
import Footer from '../componentes/Footer'
import '../estilos/Carreiras.css'

function Carreiras() {
  return (
    <>
      <Header />
      <Cabecalho
        titulo="Junte-se à Academia BAI"
        texto="Academia BAI > Junte-se à Academia BAI"
      />
      <img src="carreiras.png" alt="" className="carreiraimagem" />
      <h2 className="titulo1">Somos Feitos de Pessoas</h2>
      <h1 className="titulo2">Candidatura Expontânea</h1>
      <p className="titulo3">
        Estamos à procura de talentos que queiram construir uma escola de
        excelência connosco.
        <br /> Venha fazer parte da nossa equipa e ajude-nos a transformar o
        futuro!
      </p>
      <div className="borda1" />
      <form action="onSubmit" className="formulario">
        <div className="colunas-container">
          <div className="coluna-coluna1">
            <div className="campo">
              <label htmlFor="nome">*Nome Completo</label>
              <input type="text" id="nome" className="primeira-input" />
            </div>

            <div className="campo">
              <label htmlFor="grauacademico">*Grau Académico</label>
              <select id="grauacademico" name="grauacademico">
                <option value="" hidden>
                  ---Selecionar---
                </option>
                <option value="Ensino Médio">Ensino Médio</option>
                <option value="Frequência Universitária">
                  Frequência Universitária
                </option>
                <option value="Licenciatura">Licenciatura</option>
                <option value="Mestrado">Mestrado</option>
                <option value="Doutoramento">Doutoramento</option>
              </select>
            </div>

            <div className="campo">
              <label htmlFor="email">*Email</label>
              <input type="email" id="email" />
            </div>

            <div className="campo">
              <label htmlFor="nacionalidade">*Nacionalidade</label>
              <select id="nacionalidade" name="nacionalidade">
                <option value="" hidden>
                  ---Selecionar---
                </option>
                <option value="angolana">Angolana</option>
                <option value="portuguesa">Portuguesa</option>
                <option value="brasileira">Brasileira</option>
                <option value="americana">Americana</option>
                <option value="chinesa">Chinesa</option>
              </select>
            </div>
          </div>

          <div className="coluna coluna2">
            <div className="campo">
              <label htmlFor="experiencia">*Experiência Profissional</label>
              <select id="experiencia" name="experiencia-profissional">
                <option value="" hidden>
                  ---Selecionar---
                </option>
                <option value="Sem Experiência">Sem Experiência</option>
                <option value="doisanosa">Até 2 anos</option>
                <option value="cincoanos">Mais de 5 anos</option>
              </select>
            </div>

            <div className="campo">
              <label htmlFor="telefone">Telefone/WhatsApp</label>
              <input type="text" id="telefone" />
            </div>

            <div className="campo">
              <label htmlFor="area">*Área de Interesse</label>
              <select id="area" name="area-de-interesse">
                <option value="" hidden>
                  ---Selecionar---
                </option>
                <option value="comunicacao">Comunicação e Marketing</option>
                <option value="contabilidade">Contabilidade e Finanças</option>
                <option value="recursos">Recursos Humanos</option>
                <option value="organizacao">Organização de Eventos</option>
                <option value="auditoria">Auditoria</option>
              </select>
            </div>
          </div>
        </div>

        <div className="campo">
          <label htmlFor="curriculum">*Anexar Curriculum</label>
          <input type="" id="" name="" className="anexar" />
          <div className="explorar">X</div>
        </div>

        <div className="campo checkbox">
          <label>
            Desejo receber alertas de e-mail apenas <br /> da área de interesse
            registada
            <input type="checkbox" name="alertas-area-interesse" />
          </label>
        </div>

        <div className="campo-checkbox2">
          <label>
            Desejo receber alertas de e-mail de <br /> todas as oportunidades
            <input type="checkbox" name="alertas-todas-oportunidades" />
          </label>
        </div>

        <button className="candidatura">Enviar Candidatura</button>
      </form>
      <Bolinha />
      <Footer />
    </>
  )
}
export default Carreiras
