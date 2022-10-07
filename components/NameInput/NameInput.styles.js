import styled from 'styled-components'

export const StyledForm = styled.form`

    max-width: 600px;
    width: 100%;

    display: flex;
    flex-direction: column;
    font-family: 'Barlow Condensed', sans-serif;

    h3{
        text-align: center;
        font-weight: normal;
        font-size: 1.6rem;
    }

    input {
        width: 60%;
        height: 50px;
        max-width: 500px;
        border-radius: 8px;
        border: 1px solid #313131;
        font-family: 'Barlow Condensed', sans-serif;

        padding: 0.5rem 1rem;
        margin: auto;
        font-size: 1.2rem;


        &:focus {
            /* border: none; */
            outline: none;
            background-color: rgba(255, 255, 255);
        }
    }

`