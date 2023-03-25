import styled from "styled-components";

export const Menu = styled.div`
    position: fixed;
    right: 0;
    background-color: ${(props) => props.theme.colors.white};
    align-self: start;
    padding: 16px 32px 0 32px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 0px;
    height: 100%;
`;
