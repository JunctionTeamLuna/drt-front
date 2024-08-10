import styled from "styled-components";

export const Button = styled.button`
    background-color: var(--MainColor);
    color: white;
    width: 150px;
    height: 55px;
    font-size: 1rem;
    padding: 10px 20px;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: bold;
    &:active {
        transform: scale(0.98);
    }
`;
