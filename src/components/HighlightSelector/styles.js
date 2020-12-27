import styled from "styled-components";

export const UlComponent = styled.ul`
    font-size: ${(props) => props.fontSize};
    padding-inline-start: 0;
    display: flex;
    flex-direction: ${(props) => props.flexDirection};
    justify-content: space-around;
    align-items: flex-start;
    li {
        white-space: nowrap;
        list-style-type: none;
        color: #0b2747;
        border-bottom: 3px solid transparent;
        cursor: pointer;
        transition: border-bottom 400ms linear;
        transition: font-weight 300ms linear;
    }
    li.chosen {
        border-bottom: 3px solid #37d6b5;
        font-weight: bold;
        cursor: default;
    }
`;
