import styled from "styled-components";

export const Select = styled.select`
    width: 200px;
    height: 35px;
    font-size: 18px;
    font-family: inherit;
    font-weight: bolder;
    color: ${(props) => props.theme.colors.blue};
    border: none;
    border-radius: 5px;
    appearance: none;
    margin-top: 10px;
    box-shadow: 0px 2px 4px;
    text-align: center;
`;

export const Option = styled.option`
    display: flex;
    color: white;
    font-size: 14px;
    background-color: #0b2747;
`;
