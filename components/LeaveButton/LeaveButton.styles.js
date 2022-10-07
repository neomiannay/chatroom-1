import styled from 'styled-components'

export const LeaveButtonContainer = styled.div`

    color: #017C2B;
    font-size: 1.5rem;
    text-transform: uppercase;

    width: fit-content;
    height: fit-content;

    margin: auto 2rem 0 auto;

    grid-column: 1;
    grid-row: 1;
    grid-column-start: 3;
    grid-row-start: 1;

    &:hover {
        cursor: pointer;
    }

    p{
        font-size: 2rem;
        margin: 0;
        text-align: left;
    }

    svg {
        transform: translateY(-10px);
        width: 100%;
        path{
            width: auto;
        }
    }
`
