import React from 'react'
import Header from '../componentes/Header'
import Cabecalho from '../componentes/Cabecalho'
import Bolinha from '../componentes/Bolinha'
import Footer from '../componentes/Footer'
import Iniciativa from '../componentes/Iniciativa'

function Iniciativas() {
  const iniciativas = [
    {
      imagem: '/iniciativa1.png',
      titulo: 'Conversas no Divã',
      conteudo:
        'O “Conversas no Divã” é um espaço de diálogo descontraído e reflexivo, onde líderes\ninfluentes compartilham os seus desafios, triunfos e lições de vida. A cada edição, o \n evento oferece uma oportunidade única para explorar as mentes e as histórias daqueles\nque moldam o mundo ao nosso redor, desde CEOs de grandes empresas até activistas\ncomunitários.',
    },
    {
      imagem: '/iniciativa2.png',
      titulo: 'Programa Ser',
      conteudo:
        'O Programa SER visa capacitar profissionais para melhorar a sua performance e apoiar as empresas na qualidade do trabalho do seu capital humano, promovendo o crescimento e excelência com a participação de diversos especialistas.',
    },
    {
      imagem: '/iniciativa3.png',
      titulo: 'Log In',
      conteudo:
        'É um evento de inovação que conecta Mentes Brilhantes! Este encontro reúne estudantes universitários, jovens profissionais e especialistas experientes num ambiente de\n aprendizagem, inovação e tecnologia.',
    },
    {
      imagem: '/iniciativa4.png',
      titulo: 'Networking Sessions',
      conteudo:
        'É uma plataforma física onde profissionais de vários sectores encontram-se para criar oportunidades únicas de negócio e de reforço de relações.',
    },
    {
      imagem: '/iniciativa5.png',
      titulo: 'O Livro Da Minha Vida',
      conteudo:
        'É um evento proposto para promover e incentivar a leitura, no qual os convidados\n partilham o livro que mais os influenciou ao longo da vida, as lições mais impactantes\n retiradas da obra e como estas os influenciaram na vida.',
    },
    {
      imagem: '/iniciativa6.png',
      titulo: 'Para Além dos Acorders',
      conteudo:
        '“Para Além dos Acordes” não pretende ser um concerto. É um encontro em que o artista convidado partilha o processo artístico e criativo de suas músicas mais emblemáticas.\n Numa oportunidade exclusiva, os participantes mergulham na mente do músico e\n exploram as histórias de suas músicas mais notáveis. ',
    },
    {
      imagem: '/iniciativa7.png',
      titulo: 'Meu Mundo Meu Futuro',
      conteudo:
        'São uma série de workshops em formato de entrevista onde profissionais de destaque\n partilham as suas jornadas profissionais, desafios e lições aprendidas, promovendo a\n reflexão e o crescimento pessoal. ',
    },
  ]

  return (
    <>
      <Header />
      <Cabecalho titulo="Iniciativas" texto="Academia BAI > Iniciativas" />
      <div className="iniciativa-container">
        {iniciativas.map((iniciativa, index) => (
          <Iniciativa
            key={index}
            imagem={iniciativa.imagem || '/placeholder.png'}
            titulo={iniciativa.titulo || 'Sem título'}
            conteudo={iniciativa.conteudo || 'Sem descrição'}
          />
        ))}
      </div>

      <Bolinha />
      <Footer />
    </>
  )
}
export default Iniciativas
