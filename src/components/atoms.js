import styled from "styled-components";

export const Button = styled.a`
    display: inline-block;
    border: none;
    background-color: ${(props) => props.theme.colors.orange};
    color: ${(props) => props.theme.colors.white};
    font-size: 16px;
    font-weight: 700;
    padding: 12px 25px;
    cursor: pointer;
    transition: background-color 250ms linear;

    &:hover {
        background-color: #ff4400;
    }
`;
