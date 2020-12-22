import styled from "styled-components";
import Carousel from "../Carousel";
import { Container, SectionTitle, SectionSubtitle } from "../../styles/common";

export const Section = styled.div`
    padding: 30px 0;
    position: relative;
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
        border-width: 0 0 200px 200px;
        border-color: transparent transparent ${(props) => props.theme.colors.green} transparent;
        position: absolute;
        right: 0;
        bottom: 0;
        z-index: -1;

        @media (min-width: 1200px) {
            border-width: 0 0 350px 350px;
        }
    }
`;

export const NewsTitle = styled(SectionTitle)`
    line-height: 1.2;

    @media (min-width: 1200px) {
        text-align: left;

        span {
            font-weight: 500;
        }
    }
`;

export const NewsSubtitle = styled(SectionSubtitle)`
    @media (min-width: 1200px) {
        text-align: left;
        font-size: 20px;
    }
`;

export const NewsCarousel = styled(Carousel)`
    flex-grow: 1;

    .tns-controls {
        margin: 35px 0 0 0;
        position: static;
    }

    .tns-nav {
        position: absolute;
        bottom: 0;
        z-index: -1;
    }

    .tns-nav button {
        background-color: ${(props) => props.theme.colors.lightGray};
    }
`;

export const Card = styled.a`
    display: block;
    padding-top: calc(155 / 162 * 100%);
    overflow: hidden;
    height: 0;
    position: relative;
    cursor: pointer;

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`;

export const CardTitle = styled.h3`
    font-size: 1.25rem;
    color: ${(props) => props.theme.colors.white};
    position: absolute;
    bottom: 18px;
    left: 0;
    text-align: center;
    z-index: 5;
    padding: 0 18px;
`;

export const FlexContainer = styled(Container)`
    @media (min-width: 1200px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

export const SectionContent = styled.div`
    @media (min-width: 1200px) {
        max-width: 350px;
        margin: 0 50px 0 0;
    }
`;
