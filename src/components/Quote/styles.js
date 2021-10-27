import styled from "styled-components";

export const FlexWrapper = styled.div`
    @media (min-width: 1200px) {
        display: flex;
        justify-content: center;
    }
`;

export const QuoteWrapper = styled.div`
    @media (min-width: 1200px) {
        background-color: #efefef;
        font-size: 24px;
        position: relative;
        left: -10%;
        margin-right: -10%;
        width: 58%;
        max-width: 580px;
    }
`;

export const SideWrapper = styled.p`
    @media (min-width: 1200px) {
        background-color: pink;
        margin-left: 70px;
        width: 45%;
        max-width: 450px;
    }
`;
