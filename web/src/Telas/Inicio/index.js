import React from 'react';
import * as Styled from './styles';
import Header from '../../componentes/Header'
import Footer from '../../componentes/Footer'
import Filter from '../../componentes/filter'

function Home() {
  return (
    <Styled.Container>
      <Header />
      <Footer />
            <Styled.ContainerFilter>
            <Filter title="Todos"/>
            <Filter title="Hoje"/>
            <Filter title="Semana"/>
            <Filter title="Mês"/>
            </Styled.ContainerFilter>       
      
    </Styled.Container>
  )
}


export default Home;