import styled from "styled-components";

export const Bar = styled.div`
    display: ${(props) => (props.invisible ? "none" : "flex")};
    position: fixed;
    z-index: 9999;
    bottom: 0;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    background-color: ${(props) => props.theme.colors.white};
    height: 120px;
    box-shadow: 0px -3px 6px #00000029;
    @media (max-width: 1200px) {
        height: 240px;
        flex-direction: column;
        align-content: center;
    }
    &::before {
        content: " ";
        display: block;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 0 60px 60px;
        border-color: transparent transparent ${(props) => props.theme.colors.pink} transparent;
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
        transform: rotate(180deg);

        @media (min-width: 1200px) {
            border-width: 0 0 60px 60px;
        }
    }
    &::after {
        content: " ";
        display: block;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 0 60px 60px;
        border-color: transparent transparent ${(props) => props.theme.colors.green} transparent;
        position: absolute;
        right: 0;
        bottom: 0;
        z-index: -1;

        @media (min-width: 768px) {
            border-width: 0 0 60px 60px;
        }
    }
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    align-content: space-around;
    justify-content: space-around;
    white-space: nowrap;
    overflow: hidden;
    width: 22%;
    min-width: 280px;
    margin-right: 5%;
    height: 120px;
    .accept {
        font-size: 24px;
    }
    @media (max-width: 768px) {
        justify-content: center;
        height: auto;
        margin-bottom: 10px;
        width: 80%;
        a:first-child {
            margin-right: 5%;
        }
    }
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 63%;
    margin-left: 3%;
    @media (max-width: 768px) {
        padding-top: 10px;
        width: 80%;
    }
`;

export const HeaderText = styled.div`
    font-size: 24px;
    margin-bottom: 5px;
`;

export const PolicyLink = styled.a`
    color: ${(props) => props.theme.colors.orange};
    transition: 250ms linear;
    &:hover {
        text-decoration: underline;
        font-weight: bold;
    }
`;
