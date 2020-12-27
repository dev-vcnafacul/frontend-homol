import styled from "styled-components";

export const UlCompStyle = styled.ul`
    font-size: ${(props) => props.fontSize};
    padding-inline-start: 0;
    display: flex;
    flex-direction: ${(props) => props.flexDirection};
    justify-content: space-around;
    align-items: flex-start;
    li {
        white-space: nowrap;
        list-style-type: none;
        cursor: pointer;
        color: #0b2747;
        border-bottom: 3px solid transparent;
        transition: all 0.2s ease-out;
    }
    li.chosen {
        border-bottom: 3px solid #37d6b5;
        font-weight: bold;
    }
`;
