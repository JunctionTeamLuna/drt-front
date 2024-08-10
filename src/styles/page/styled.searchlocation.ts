import styled from "styled-components";

export const SearchLocationContainer = styled.div`
    display: flex;
    flex-direction: column;
    & > h1 {
        font-size: 1.5rem;
        margin: 10px 0px 20px 0px;
    }

    & > hr {
        margin-top: 20px;
    }
`;

export const SearchLocationSearch = styled.form`
    display: flex;
    gap: 20px;
    & > input {
        flex: 1;
        height: 60px;
        padding-left: 20px;
    }
`;

export const SearchLocationlist = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
    height: 300px;
    overflow-y: scroll;
`;

export const SearchLocationli = styled.li<{ selected: boolean }>`
    font-size: 1.2rem;
    margin-top: 3px;
    padding: 15px;
    border-radius: 5px;
    border: ${(props) =>
        props.selected
            ? "2px solid var(--MainBlack)"
            : "2px solid var(--MidBlue)"};
`;
