import React from "react";
import * as styled from './styles';


function Filter(props) {
    return(
        <styled.Container activation = {props.actived}>
            <img src={props.img} alt="FILTRO" />
            <span> {props.title} </span>
        </styled.Container>
    )
}

export default Filter;