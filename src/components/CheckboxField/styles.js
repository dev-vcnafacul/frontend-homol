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
    border: 1px solid #ff7600;

    &:after {
        content: " ";
        background-color: ${({ active }) => (active ? "#FF7600" : "#FFFFFF")};
        border: 2px solid #ffffff;
        width: 10px;
        height: 10px;
        display: block;
    }
`;
