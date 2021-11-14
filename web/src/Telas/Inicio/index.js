import React, {useState, useEffect} from 'react';
import * as Styled from './styles';
import api from '../../services/api'

/* IMAGENS */
import img from '../../imagens/filter2.png'


/* componentes  */
import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer';
import Filter from '../../componentes/filter';
import TaskCard from '../../componentes/TaskCard';


function Home() {

  const [filterActive, functionFilter] = useState('today');

  const [tasks, setTasks] = useState([]);

  async function loadTask(){
    await api.get(`/task/filter/${filterActive}/12:22:33:44:55:66`)
    .then(response => {
      setTasks(response.data)

    })
  }
  
  useEffect(() => {
    loadTask()
  }, [filterActive])

  return (
    <Styled.Container>
      <Header />
      <Footer />
            <Styled.ContainerFilter>
              <button type='button' onClick={() => functionFilter('all') }>
              <Filter title="Todos" img={img} actived={filterActive == 'all'}/>
              </button>
            
              <button type='button' onClick={() => functionFilter('today') }>
            <Filter title="Hoje" img={img}  actived={filterActive == 'today'}/>
              </button>
            
              <button type='button' onClick={() => functionFilter('week') }>
            <Filter title="Semana" img={img}  actived={filterActive == 'week'}/>
              </button>
            
              <button type='button' onClick={() => functionFilter('month') }>
            <Filter title="Mês" img={img}  actived={filterActive == 'month'}/>
              </button>

              <button type='button' onClick={() => functionFilter('year') }>
            <Filter title="Ano" img={img}  actived={filterActive == 'year'}/>
              </button>
            
            </Styled.ContainerFilter>       
            
            <Styled.ContainerCard>
                {
                  tasks.map(
                    t => (
                      <TaskCard type={t.type} title={t.title} when={t.when} />
                    ))
                }
            </Styled.ContainerCard>  
    </Styled.Container>
  )
}


export default Home;



