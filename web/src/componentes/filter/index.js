import React from "react";
import * as styled from './styles';
import imagens from '../../imagens/filter2.png'

function Filter({title}) {
    return(
        <styled.Container>
            <img src={imagens} alt="FILTRO" />
            <span> {title} </span>
        </styled.Container>
    )
}

export default Filter;