import styled from "styled-components";

export const HeadContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const HeadHeader = styled.div`
    background-color: var(--MainColor);
    height: 500px;
    overflow: hidden;
`;

export const HeadFooter = styled.div`
    padding: 25px;
    text-align: center;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & > button {
        width: 100%;
        height: 65px;
        margin-bottom: 25px;
        font-size: 1.2rem;
    }
`;
export const HeadFooterTitle = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    & h1 {
        font-size: 1.6rem;
    }
`;

export const HeadImageContainer = styled.div`
    display: flex !important;
    align-items: center;

    height: 500px !important; /* Add this */
    & > img {
        width: 300px;
        margin: 0 auto;
    }
`;
