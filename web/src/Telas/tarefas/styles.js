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
export const Option = styled.div`
       display: flex;
       justify-content: space-between;
      
       button{
           font-weight: bold;
           color: #FFD700;
           border: none;
           background: none;
           cursor: pointer;
           font-size: 15px;

           &:hover{
               opacity: 0.7;
           }
       }

       div{
        display: flex;
        align-items: center;
        color: #FFD700;
        font-size: 15px;
    }
`
export const Save = styled.div`
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-top: 20px;
       
       button{
        width: 70%;
        justify-content: space-between;
        background: #FFD700;
        border: none;
        font-size: 20px;
        color: white;
        border-radius: 20px;
        cursor: pointer;
    }

      
` 