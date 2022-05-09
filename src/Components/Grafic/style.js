import styled from "styled-components";

export const StyledGraphic = styled.div`
    width: 600px;
    height: 400px;
    margin-top: -20px;
    margin-left: -100px;
    
    @media(max-width: 850px) {
        margin: 0;
        margin-top: -200px;
        padding: 0;
        overflow: hidden;
        text-align: center;      
        display: flex;
        flex-direction: column;
        align-items: center;
    }
` 