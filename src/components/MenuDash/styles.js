import styled from "styled-components";

export const Menu = styled.div`
    position: fixed;
    right: 0;
    background-color: ${(props) => props.theme.colors.white};
    align-self: start;
    padding: 16px 32px 0 32px;
    width: 180px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    height: 100%;
`;
