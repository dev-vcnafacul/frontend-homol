import styled from "styled-components";

export const UlCompStyle = styled.ul`
    @media (max-width: 560px) {
        justify-content: inherit;
        overflow: scroll;
        li {
            margin-right: 20px;
        }
    }
    justify-content: space-around;
    font-size: ${(props) => props.fontSize};
    padding-inline-start: 0;
    display: flex;
    flex-direction: ${(props) => props.flexDirection};
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
