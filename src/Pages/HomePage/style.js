import styled from "styled-components";
import { basePallete } from "../../colors/basePallet";


export const StyledPageHome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 90vh;
    .users-dates{
        display: flex;
        width: 100%;
    }
    .users-table{
        padding: 5rem;
    }
    .users-graphic{
        padding: 5rem;
        display: flex;
    }
    @media(max-width: 850px) {
        text-align: center;
        
        .users-dates{        
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: auto;
        }
    }
`

export const StyledTable = styled.table`
    background-color: ${basePallete.secondary};
    tr{
        background-color: white;
        th{
            height: 40px;
        }
        td:nth-child(1){
            width: 40px;
            height: 40px;
            text-align: center;
        }
        td:nth-child(2){
            width: 10rem;
            padding: 0 0.5em;
        }
        td:nth-child(3){
            width: 10rem;
            padding: 0 0.5em;
        }
        td:nth-child(4){
            width: 7rem;
            padding: 0 0.5em;
        }
    }
    
` 