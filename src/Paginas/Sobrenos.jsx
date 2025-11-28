import React from 'react'
import Header from '../componentes/Header'
import Footer from '../componentes/Footer';
import Mundo from '../componentes/Mundo'
import Bolinha from '../componentes/Bolinha';
import '../estilos/Sobrenos.css'
import Cabecalho from '../componentes/Cabecalho';
import Paragrafo from '../componentes/Paragrafo';


 function Sobrenos() {
  return (
    <>
    <Header />
   <section className='sobre'>
    <Cabecalho titulo="Sobre Nós" texto="Academia BAI > Sobre Nós"/>
    <img src="juntos.png" alt="" className='juntos'/>

    <Paragrafo titulo="Academia BAI" subtitulo="Somos uma academia de vida!" conteudo="Fundada em 2012, a Academia BAI surgiu como um pular estratégico para a formação dos profissionais angolanos, a missão de promover o conhecimento e o desenvolvimento contínuo de competências. Desde o início, reconhecemos que o valor da educação não poderia ser confinado às nossas paredes. Em 2017, ampliámos o nosso alcance com a criação do Instituto Superior de Administração e Finanças (ISAF), que segue as melhores práticas educacionais internacionais. O ISAF oferece licenciaturas em áreas essenciais como Gestão Bancária e Seguros, Contabilidade e Finanças, e Informática de Gestão Financeira. <br /> 
    Através da Academia Executive Education (AEE), moldamos os profissionais para atender às exigências do mundo empresarial: gestores de topo com sólidas competências técnicas e habilidades transversais diferenciadoras. O nosso foco é preparar profissionais para um mundo cada vez mais globalizado, impulsionando-nos a explorar novas fronteiras. Os nossos programas são concebidos para proporcionar experiências internacionais, promovendo uma abordagem holística na formação de líderes aptos a enfrentar desafios globais. <br />
    A Academia BAI oferece uma experiência única através da sua plataforma eficiente, exclusiva e inovadora para a geração de networking corporativo e a disseminação de conhecimento de alto nível. Com uma oferta vasta e especializada, visa ser o ponto de partida para o futuro dos jovens através do instituto superior de administração e finanças (ISAF), e elevar o talento de profissionais executivos com o seu leque de programas da Academia Executive Education. Esta plataforma é concebida para conectar líderes e fomentar a criação de oportunidades estratégicas que impulsionam o crescimento e a inovação. Aqui, a aprendizagem vai além do académico, transformando-se numa poderosa ferramenta para construir relacionamentos duradouros e explorar novas fronteiras no mundo dos negócios. <br />
    Promovemos eventos culturais e comerciais com um foco nos temas relevantes para as nossas áreas de atuação, mantendo sempre uma perspetiva global. O nosso compromisso é não apenas formar profissionais, mas também criar um ambiente onde o empreendedorismo e a inovação possam prosperar, fortalecendo as bases para um futuro sustentável e inclusivo. <br />
    Em alinhamento com os 17 Objetivos de Desenvolvimento Sustentável (ODS) das Nações Unidas, focamo-nos especialmente nos ODS 4 (Educação de Qualidade), 5 (Igualdade de Género), 8 (Trabalho Decente e Crescimento Económico), 12 (Produção e Consumo Responsáveis) e 17 (Parcerias para a Implementação dos Objetivos). O nosso compromisso com a sustentabilidade é uma extensão natural da nossa missão educativa, procurando criar um impacto positivo e duradouro na sociedade e no ambiente."/>
   
    <div className='missao1'>
        <div className='barraverde'>
        </div>
        <h1 className='missao'>Missão</h1>
    </div>
    <p className='conteudo1'> Contribuir para o desenvolvimento de <br />
    quadros superiores fomentado os <br />
    conhecimentos técnicos, <br />
    comportamentais e culturais, numa <br />
    transferência continua do saber.</p>
    <div className='visao1'> 
        <div className='barraverde1'>
        </div>
        <h1 className='visao'>Visão</h1>
        <p className='conteudo2'>Ser uma instituição de ensino líder e <br />
         de referência nacional pelo rigor <br />
         académico, excelência dos <br />
         programas e dos docentes, <br />
         proporcionando aos alunos uma br
         maior capacidade para concorrerem <br />
         no mercado de trabalho, melhorarem <br />
         a sua eficiência e produtividade.</p>
    </div>
    <div className='valores1'> 
        <div className='barraverde2'>
        </div>
        <h1 className='valores'>Valores</h1>
        <div className='bolinhas'></div>
        <p className='conteudo3'>Excelência <br />
        Rigor Académico e Científico <br />
        Ética e Profissionalismo <br />
        Responsabilidade Social <br />
        Cooperação</p>
    </div>
    <div className='posicionamento1'>
        <div className='barraverde3'>
        </div>
        <h1 className='posicionamento'>Posicionamento</h1>
        <p  className='conteudo4'>	

A Academia BAI é uma Academia de <br />
excelência que presta um serviço de <br />
 educação adaptado às novas <br />
  realidades e tendências que serve <br />
  simultaneamente as expectativas <br />
  holísticas dos alunos, profissionais, <br />
   empresas com impacto directo na <br />
   comunidade e sociedade civil.
</p>
    </div>
    <Mundo/>
          <p className='academia2'>Academia BAI</p>
          <h1 className='nossahistoria'>A Nossa História</h1>
         <Bolinha/>
   </section>
   <Footer/>
    </>
  )
}
export default Sobrenos;
