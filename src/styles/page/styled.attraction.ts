import styled from "styled-components";

export const AttractionContainer = styled.div`
    margin-top: 20px;
`;

export const AttractionItem = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
    & > img {
        border-radius: 5px;
        width: 90px;
        height: 90px;
        object-fit: cover;
    }

    & > div {
        display: flex;
        flex-direction: column;
        margin-left: 1rem;
    }

    & h1 {
        font-size: 1.2rem;
    }

    & p {
        margin-top: 5px;
        font-size: 1rem;
    }
`;
