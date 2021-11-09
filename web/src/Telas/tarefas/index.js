import React, {useState, useEffect} from 'react';
import * as styled from './styles';
import api from '../../services/api'

/* IMAGENS */
import img from '../../imagens/filter2.png'


/* componentes  */
import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer';
import Filter from '../../componentes/filter';
import TaskCard from '../../componentes/TaskCard';
import iconUtils from '../../utils/icons';




function Task() {

 const [type, setType] = useState();

  return (
    <styled.Container>
      <Header />

        <styled.Form>
          <styled.icons>
            {
              iconUtils.map((icons,index)=>(
                index > 0 &&
                <button type="button" onClick={()=> setType(index) }>
                <img src={icons} alt="tarefa" className={type && type != index && 'off'}/>
                </button>
              ))
            }
          </styled.icons>

          <styled.input>
            <input type="text" placeholder="Título"></input>
          </styled.input>
          
          <styled.textArea>
            <input type="textarea" placeholder="Descrição"></input>
          </styled.textArea>
          
          <styled.input>
            <input type="date"></input>
          </styled.input>
          
          <styled.input>
            <input type="time"></input>
          </styled.input>

        </styled.Form>   

      <Footer />
    </styled.Container>
  )
}


export default Task;


