import styled from 'styled-components'


export const MessageInputContainer = styled.form`

    display: flex;
    align-items: flex-end;
    width: 100%;

    grid-column: 1;
    grid-row: 1;
    grid-column-start: 2;
    grid-row-start: 4;
  
    input {
        width: 50%;
        height: clamp(50px, 100%, 50px) ;
        max-width: 400px;
        border-radius: 8px;
        border: 1px solid #313131;

        padding: 0.5rem 1rem;
        margin: auto;

        background-color: rgba(255, 255, 255, 0.7);

        &:focus {
            /* border: none; */
            outline: none;
            background-color: rgba(255, 255, 255);
        }
    }
`