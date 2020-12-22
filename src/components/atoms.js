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

export const FormField = styled.div`
    position: relative;
`;

export const Input = styled.input`
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px 4px 0 0;
    border: 1px solid ${(props) => props.theme.colors.grey};
    color: ${(props) => props.theme.colors.grey};
    font-size: 14px;
    padding: 21px 10px 9px;
    margin-bottom: 25px;
    outline-color: ${(props) => props.theme.colors.orange};

    @media (min-width: 1200px) {
        font-size: 16px;
        padding: 26px 23px 11px;
    }
`;

export const InputLabel = styled.label`
    position: absolute;
    color: ${(props) => props.theme.colors.grey};
    top: 6px;
    left: 11px;
    font-size: 12px;

    @media (min-width: 1200px) {
        top: 9px;
        left: 24px;
    }
`;
