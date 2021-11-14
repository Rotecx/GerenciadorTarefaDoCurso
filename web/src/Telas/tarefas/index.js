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
import Styled from 'styled-components';




function Task() {

 const [type, setType] = useState();
 const [done, setDone] = useState(false);
 const [title, setTitle] = useState();
 const [description, setDescription] = useState();
 const [date, setDate] = useState();
 const [hour, setHour] = useState();
 const [macadress, setMacadress] = useState('12:22:33:44:55:66');

 async function save(){
   await api.post('/task', {
     macadress,
     type,
     title,
     description,
     when:`${date}T${hour}:00.000`
   })
   .then(()=> alert("A TAREFA FOI CADASTRADA COM SUCESSO!"))
 }

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
            <input type="text" placeholder="Título" onChange={e=> setTitle(e.target.value)} value={title}></input>
          </styled.input>
          
          <styled.textArea>
            <input type="textarea" placeholder="Descrição"onChange={e=> setDescription(e.target.value)} value={description}></input>
          </styled.textArea>
          
          <styled.input>
            <input type="date"onChange={e=> setDate(e.target.value)} value={date}></input>
          </styled.input>
          
          <styled.input>
            <input type="time"onChange={e=> setHour(e.target.value)} value={hour}></input>
          </styled.input>

          <styled.Option>
              <div>
                  <input type="checkbox"check={done} onChange={e=> setDone(e.target.value)} ></input>
                  <span>CONCLUÍDO</span>
              </div>
              <button type="button">EXCLUIR</button>
          </styled.Option>

          <styled.Save>
              <button type="button"onClick={save}>SALVAR</button>
          </styled.Save>

        </styled.Form>   

      <Footer />
    </styled.Container>
  )
}


export default Task;


