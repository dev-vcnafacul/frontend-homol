import styled from "styled-components";

export const Container = styled.div`
    background-color: ${(props) => props.theme.colors.white};
`;

export const AccordionTitle = styled.button`
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
`;
