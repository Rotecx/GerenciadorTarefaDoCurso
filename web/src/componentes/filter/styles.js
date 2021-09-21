import styled from "styled-components";

export const Container = styled.div`
    width: 110px;
    height: 30px;
    background: ${props => props.activation ? '#FFD700' : '#0000A4'};
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
    display: flex;  
    justify-content: space-around;

    img{
        width: 25px;
        height: 25px;
    }

    span:hover{
        Color: #fff;
        font-weight: bold;
        align-self: flex-end;
        font-size: 15px;
    }
    `