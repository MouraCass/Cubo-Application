import styled from "styled-components";
import { basePallete } from "../../colors/basePallet";


export const StyledHeader = styled.div`
    background-color: ${basePallete.primary};
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    form{
        height: 100%;
        display: inherit;
        justify-content: inherit;
        align-items: inherit;
        input{
            height: 2em;
            width: 13rem;
            outline: none;
            padding: 0.25em;
            margin: 0.75rem;
        }
        button{
            height: 2.60em;
            width: 6rem;
            border: 1px solid ${basePallete.secondary};
            background-color: ${basePallete.primary};
            font-weight: bolder;
            color: ${basePallete.secondary};
            border-radius: 3px;
            cursor: pointer;
            transition: 0.5s;
            letter-spacing: 0.05em;
            :hover{
                opacity: 0.9;
                filter: saturate(10);
                letter-spacing: 0.25em;
            }
            :active{
                filter: saturate(15);
            }
        }
    }
    @media(max-width: 850px) {
        height: 30vh;
        form{
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: auto;
        }
    }
` 