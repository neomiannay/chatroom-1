import styled from 'styled-components'

export const UsersContainer = styled.div`

    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    grid-column: 1;
    grid-row: 3;
    grid-column-start: 1;
    grid-row-start: 1;

    margin: 0 auto 0 2rem;

    div{
        display: flex;
        flex-direction: column;
        border-radius: 8px;

        background-color: #5A5A5A;
        
        div{
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: flex-end;
            justify-content: flex-start;
            gap: 1em;
            
            margin: auto;
            padding: 1.25rem 2rem;

            span {
                width: 100%;
                color: #FCFBFB;
                width: fit-content;
                text-align: center;
            }
        }

        p {
            margin: 0;
            padding-bottom: 1rem;
            text-align: center;
        }
    }
`