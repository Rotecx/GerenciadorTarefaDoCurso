import React, {useState} from 'react';
import * as Styled from './styles';
import Header from '../../componentes/Header'
import Footer from '../../componentes/Footer'
import Filter from '../../componentes/filter'
import img from '../../imagens/filter2.png'

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
      
    </Styled.Container>
  )
}


export default Home;