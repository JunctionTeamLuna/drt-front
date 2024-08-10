import styled from "styled-components";

const Input = styled.input`
    width: 100%;
    height: 50px;
    padding: 0 10px;
    border: none;
    font-size: 1.1rem;
    border-radius: 15px;
    outline: none;
    font-weight: bold;
    background-color: var(--LightGrey);

    &::placeholder {
        color: var(--Grey);
        font-weight: bold;
    }
`;

export default Input;
