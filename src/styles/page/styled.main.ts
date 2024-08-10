import styled from "styled-components";

export const MainContainer = styled.div`
    position: relative; /* Ensures child elements can be positioned relative to this container */
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: var(--MainColor);
    z-index: 1; /* Ensures content is above the map */
`;

export const MainLocationSection = styled.div`
    height: 350px;
    z-index: 1;
`;

export const MainLocationHeader = styled.div`
    padding: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    & > h1 {
        font-size: 1.3rem;
    }
    & > span {
        font-size: 1.5rem;
    }
`;

export const MainLocationSelect = styled.div`
    margin: 25px;
    padding: 25px;
    border-radius: 15px;
    background-color: white;
    display: flex;
    align-items: center;
    & > img {
        height: 60px;
        margin-right: 20px;
    }
    & > span {
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.3rem;
        border-radius: 5px;
        margin-left: 15px;
        color: var(--Grey);
        background-color: var(--LightGrey);
        cursor: pointer;
        transition: all 0.05s ease;
        &:active {
            transform: scale(0.97);
        }
    }
`;

export const MainLocationInputs = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > hr {
        border: none;
        border-top: 1px solid var(--Grey);
    }

    & > input {
        background-color: white;
    }
`;

export const MainFooter = styled.div`
    flex: 1;
    border-radius: 50px 50px 0 0;
    background-color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > button {
        width: 100%;
        height: 65px;
        font-size: 1.2rem;
    }
`;

export const MapContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0; /* Places the map below other content */
`;
