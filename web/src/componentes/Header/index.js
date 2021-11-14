import React from 'react'
import * as Styled from './styles'
import { Link } from "react-router-dom";


function Header(){
    return (
        
        <Styled.Container>
          <Styled.Menu>
                <Link to="/">INÍCIO</Link>
                <span className="separador"    / >
                <Link to="/Task">TAREFA</Link>
          </Styled.Menu>
        </Styled.Container>

    )

}


export default Header;