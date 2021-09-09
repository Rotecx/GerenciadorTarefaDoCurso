  
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 70px;
    background: #0000A4;
    border-bottom: 6px solid #FFD700;

    `

    export const Menu = styled.div`
    
    width:50%;
    height: 70px;
    display: flex;
    align-items: center;
    
    a{
        color:#000000;
        font-weight: Bolt;
        text-decoration: none;
        margin: 0 10px;
    }
    
    .separador::after{
        content: "|";
        margin: 0 10px;
        color: #000000;
    }

    a:hover{
        Color: #fff;
    }
    
    
    `
