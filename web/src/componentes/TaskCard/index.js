import {format} from 'date-fns';
import React, {useMemo} from "react";
import * as Styled from './styles';
import arraysIcons from '../../utils/icons';


function TaskCard(props) {
    
const date = useMemo(() => format(new Date(props.when), 'dd/MM/yyyy'));
const hora = useMemo(() => format(new Date(props.when), 'HH/mm'));

    return(
        <Styled.Container>
            <Styled.TopCard>
                <img src={arraysIcons[props.type]} alt="tarefa"></img>
                <h3> {props.title} </h3>
            </Styled.TopCard>
            <Styled.BottomCard>
                <strong>{date}</strong>
                <span>{hora}</span>
            </Styled.BottomCard>
        </Styled.Container>
    )
}

export default TaskCard;