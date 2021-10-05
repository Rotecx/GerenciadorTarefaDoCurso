import React, {useState} from 'react';
import * as Styled from './styles';

/* IMAGENS */
import img from '../../imagens/filter2.png'
import academia from '../../imagens/academia.jpg'
import cinema from '../../imagens/cinema.png'
import compra from '../../imagens/compra.jpg'
import futebol from '../../imagens/futebol.jpg'
import lanche from '../../imagens/lanche.jpg'
import prova from '../../imagens/prova.jpg'
import trabalho from '../../imagens/trabalho.png'
import viagem from '../../imagens/viagem.png'


/* componentes  */
import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer';
import Filter from '../../componentes/filter';
import TaskCard from '../../componentes/TaskCard';


function Home() {

  const [filterActive, functionFilter] = useState();

  return (
    <Styled.Container>
      <Header />
      <Footer />
            <Styled.ContainerFilter>
              <button type='button' onClick={() => functionFilter('Todos') }>
              <Filter title="Todos" img={img} actived={filterActive == 'Todos'}/>
              </button>
            
              <button type='button' onClick={() => functionFilter('Hoje') }>
            <Filter title="Hoje" img={img}  actived={filterActive == 'Hoje'}/>
              </button>
            
              <button type='button' onClick={() => functionFilter('Semana') }>
            <Filter title="Semana" img={img}  actived={filterActive == 'Semana'}/>
              </button>
            
              <button type='button' onClick={() => functionFilter('Mês') }>
            <Filter title="Mês" img={img}  actived={filterActive == 'Mês'}/>
              </button>
            
            </Styled.ContainerFilter>       
            
            <Styled.ContainerCard>
                < TaskCard img={academia} title="Academia"/>
                < TaskCard img={cinema} title="Cinema"/>
                < TaskCard img={compra} title="Compra"/>
                < TaskCard img={futebol} title="Futebol"/>
                < TaskCard img={lanche} title="Lanche"/>
                < TaskCard img={prova} title="Prova"/>
                < TaskCard img={trabalho} title="Trabalho"/>
                < TaskCard img={viagem} title="Viagem"/>
            </Styled.ContainerCard>  
    </Styled.Container>
  )
}


export default Home;