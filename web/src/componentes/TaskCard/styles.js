import Styled from "styled-components";

export const Container = Styled.div`
    width: 200px;
    height: 150px;
    box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.73);
    border-radius: 10px;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 25px;

    `

    export const TopCard = Styled.div`
         display: flex;
         align-items: center;
         justify-content: center;
         flex-direction: column;

         img{
            width: 70px;
            height; 70px; 
         }
         
    `
     

    export const BottomCard = Styled.div`
            width: 100%;
            display: flex;
            justify-content: space-around;

            strong{
                color: #FFD700;
            }
            span{
                color:#0000A4;
            }
    `