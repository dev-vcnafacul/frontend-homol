import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    gap: 12px;
    align-items: flex-start;
    cursor: pointer;
`;

export const Box = styled.div`
    min-width: 14px;
    width: 14px;
    height: 14px;
    border: 1px solid ${(props) => props.theme.colors.orange};

    &:after {
        content: " ";
        background-color: ${(props) => (props.active ? props.theme.colors.orange : props.theme.colors.white)};
        border: 2px solid ${(props) => props.theme.colors.white};
        width: 10px;
        height: 10px;
        display: block;
    }
`;
