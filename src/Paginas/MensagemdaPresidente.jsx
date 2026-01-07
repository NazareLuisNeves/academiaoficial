import React from 'react'
import './../estilos/MensagemdaPresidente.css'
import Header from '../componentes/Header'
import Cabecalho from '../componentes/Cabecalho'
import Footer from '../componentes/Footer'
import Paragrafo from '../componentes/Paragrafo'
import PCA from '../assets/PCA.png'
import Bolinha from '../componentes/Bolinha'
import linkedin from '../assets/linkedin.png'

function MensagemdaPresidente() {
  return (
    <>
      <Header />
      <section className="mensagempresidente">
        <Cabecalho
          titulo="Mensagem da Presidente"
          texto="Academia BAI &gt; Mensagem da Presidente"
        />
        <img src={PCA} alt="" className="PCA" />
        <Paragrafo
          titulo="Academia BAI"
          subtitulo="Mensagem da PCA"
          conteudo="	

Uma instituição de ensino, tal como qualquer outra organização, não é um projecto concluído, sobretudo quando estamos inseridos num contexto global e local tão dinâmico, incerto, competitivo e exigente. 

Precisamos de ter consciência de que numa economia com o potencial de crescimento e desenvolvimento como a nossa, muitos ajustes e competências de adaptabilidade devemos ter, sendo flexíveis para ir ao encontro das necessidades dos nossos colaboradores e dos nossos clientes, fazendo-os viver uma experiência inesquecível, preservando o rigor e a cultura organizacional que nos caracteriza e que nos permitiu granjear certificações como as da Great Place to Work, ISO 9001:2015, ser a Entidade Certificadora de Peritos Avaliadores Imobiliários, pela CMC, Microsoft Academy e o reconhecimento como Superbrands 2023.

Se em 2020 criámos o lema: “o mundo mudou, nós mudamos também”, em 2024, os nossos stakeholders poderão contar com uma instituição cada vez mais focada em colocar o cliente no centro do seu universo e criar ofertas novas. 

Ofertas com inovação tecnológica, metodológica, uma abordagem mais segmentada, comunicação mais criativa, arrojada e estimulante.

A nossa empresa alberga uma Instituição de formação profissional e um Instituto superior e tudo faremos para a gerir e comunicar como um todo, como uma jornada de ensino que inicia na qualificação académica graduada, pós-graduações, mestrados, programas de extensão universitária e programas de actividades culturais. 

Mesmo ao respeitarmos as regras e as leis dos diferentes reguladores de ensino, o nosso contributo é conjugado, e interna ou externamente deve ser percepcionado como tal, por esse motivo, tudo fazemos para ter uma linguagem comum, coerente e consistente, oferecendo um atendimento ao aluno ou formando, que deixa claro que a nossa cultura organizacional e o nosso propósito estão assentes na crença de que a educação é o caminho para transformar o mundo num lugar melhor para se viver.

Vários sectores podem desenvolver a sua actividade por meio desta infra-estrutura, da sua evolução tecnológica, inovação das propostas de ensino, pois através de uma procura incessante, de ser “a ponte entre o desenvolvimento do activo humano e as estratégias de negócio das empresas”, procuramos responder aos desafios de gerir, numa era complexa, rápida e competitiva em que, simultaneamente, a sustentabilidade está na agenda de todas as organizações ou deveria estar.

Todos estes aspectos impõem que sejamos dinâmicos, capazes de nos adaptar e ser percepcionados pelos nossos clientes, alunos e formandos, como um corpo vivo e evolutivo.

Onze anos decorridos, podemos dizer, sem medo de errar, temos sim uma escola, uma academia tal qual Platão a definiu “um lugar onde se vem adquirir conhecimento” e esta Academia é reconhecida nacional e internacionalmente.

Em 2024, trazemos connosco a +akademia, a inovação tecnológica que nos fará chegar a um público-alvo que muito carece da nossa atenção, de conteúdos de qualidade, para complementar o seu percurso académico, com mais informação útil, modelos de referência profissional pela experiência profissional e académica, mas acima de tudo um conjunto de programas que irá enriquecer as suas vidas e criar uma possibilidade de elevar a curiosidade e a vontade permanente de pesquisar mais, querer saber mais, ser um cidadão activo e interessado.

A nossa +akademia é o filho mais novo que trazemos como novidade, fundamentalmente para os estudantes universitários e profissionais em início de carreira e para todos aqueles que continuam a acreditar que aprender não tem espaço, lugar ou idade. Neste caso, o espaço será o virtual.

Contem connosco sempre

Somos uma Academia de Vida e para a Vida."
        />
        <p className="nome">Noelma Viegas D'Abreu</p>
        <p className="nome2">PCA - Academia BAI</p>
        <a href="" className="link">
          VER BIOGRAFIA
        </a>
        <button className="linkedin"> LinkedIn</button>
        <img src={linkedin} alt="" className="linkedinimagem" />

        <Bolinha />
      </section>
      <Footer />
    </>
  )
}
export default MensagemdaPresidente
