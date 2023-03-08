import styled from "styled-components";

export const Menu = styled.div`
    background-color: ${(props) => props.theme.colors.white};
    align-self: start;
    padding: 16px 32px;
    min-width: 180px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;
