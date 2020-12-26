import styled from "styled-components";
import Carousel from "../Carousel";
import { Container, SectionTitle, SectionSubtitle } from "../../styles/common";

export const Section = styled.div`
    padding: 30px 0;
    position: relative;
    display: block;
    overflow-x: hidden;

    @media (min-width: 1200px) {
        padding: 50px 0;
    }

    &::after {
        content: " ";
        display: block;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 0 100px 100px;
        border-color: transparent transparent ${(props) => props.theme.colors.yellow} transparent;
        transform: rotate(180deg);
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;

        @media (min-width: 1200px) {
            border-width: 0 0 230px 230px;
        }
    }
`;

export const ActionAreasTitle = styled(SectionTitle)`
    line-height: 1.2;

    @media (min-width: 1200px) {
        text-align: center;

        span {
            font-weight: 500;
        }
    }
`;

export const ActionAreasSubtitle = styled(SectionSubtitle)`
    @media (min-width: 1200px) {
        text-align: center;
        font-size: 20px;
    }
`;

export const ActionAreasCarousel = styled(Carousel)`
    flex-grow: 1;

    .tns-controls {
        margin: 35px 0 0 0;
        position: static;
    }

    .tns-controls button {
        z-index: 2;
    }

    .tns-nav {
        position: absolute;
        bottom: 0;
        z-index: 1;
    }

    .tns-nav button {
        background-color: ${(props) => props.theme.colors.lightGray};
    }
`;

export const Card = styled.a`
    display: block;
    overflow: hidden;
    max-width: 230px;
    min-height: 220px;
    border: 1px solid;
    border color: ${(props) => props.theme.colors.grey};
    position: relative;
    cursor: pointer;
`;

export const CardTitle = styled.h3`
    font-size: 2rem;
    color: ${(props) => props.theme.colors.marine};
    position: relative;
    text-align: center;
    z-index: 5;
    padding: 0 18px;
`;

export const CardSubtitle = styled.h4`
    font-size: 1.25rem;
    color: ${(props) => props.theme.colors.grey};
    position: relative;
    text-align: center;
    z-index: 5;
    padding: 0 18px;
`;

export const FlexContainer = styled(Container)`
    @media (min-width: 1200px) {
        display: block;
        align-items: center;
        justify-content: space-between;
    }
`;

export const SectionContent = styled.div`
    @media (min-width: 1200px) {
        width: 100%;
    }
`;
