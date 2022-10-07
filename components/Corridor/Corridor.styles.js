import styled from 'styled-components'

export const CorridorContainer = styled.div`

    height: 100vh;
    width: 100vw;

    div:nth-child(1) {
        position: relative;
        z-index: 10;
        width: 100px;
        height: 250px;
        /* background-color: red; */
        border-radius: 10px;
        top: 45%;
        left: 47%;
        transform: translate(-60%, -50%);
        margin: 0;
        cursor: pointer;
    }

    img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    div:nth-child(3){
        position: absolute;
        bottom: 2rem;
        left: 2rem;
        color: #017C2B;
        font-size: 1.5rem;
        text-transform: uppercase;

        width: fit-content;
        height: fit-content;

        grid-column: 1;
        grid-row: 1;
        grid-column-start: 3;
        grid-row-start: 1;

        &:hover {
            cursor: pointer;
        }

        p{
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
    }
`