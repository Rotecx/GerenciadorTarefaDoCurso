import styled from 'styled-components';


export const Container = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

`       

export const Form = styled.div`
        width: 50%;
        
`

export const icons = styled.div`
       width: 100%;
       display: flex;
       justify-content: center;

       img{
               width: 50px;
               heigth: 50px;
               cursor: pointer;
               margin: 10px;
       }

       button{
               border: none;
               background: none;
       }
        
       .off{
               opacity: 0.4;
       }
`   

export const input = styled.div`
       width: 100%;
       display: flex;
       flex-direction: column;
       margin: 20px 0;


       input{
               font-size: 16px;
               padding: 15px;
               border: 1px solid #FFD700;
       }
`   

export const textArea = styled.div`
       width: 100%;
       display: flex;
       flex-direction: column;
       margin: 20px 0;


       input{
               font-size: 16px;
               padding: 15px;
               border: 1px solid #FFD700;
       }
`  