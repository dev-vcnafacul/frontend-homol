import styled from "styled-components";

export const Wrap = styled.div`
    background-color: ${(props) => props.theme.colors.backgroundGrey};
    min-height: calc(100vh - 77px);
    box-sizing: border-box;
    position: relative;
    padding: 50px 0 60px;
    margin-top: 67px;
    display: flex;
`;

export const Body = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 67px;
    padding: 0px 0px;
`;
