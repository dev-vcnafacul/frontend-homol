import styled from "styled-components";

export const Select = styled.select`
    width: 200px;
    height: 35px;
    font-size: 14px;
    font-family: inherit;
    color: ${(props) => props.theme.colors.grey};
    padding: 10px;
    border: 1px solid ${(props) => props.theme.colors.lightGrey};
    border-radius: 5px;
    appearance: none;
    margin: 10px;

    option {
        color: black;
        background: white;
        display: flex;
        white-space: pre;
        min-height: 20px;
        padding: 0px 2px 1px;
    }
`;
