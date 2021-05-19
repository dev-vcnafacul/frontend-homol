import styled from "styled-components";
import Carousel from "../Carousel";
import { Container, SectionTitle, SectionSubtitle } from "../../styles/common";

export const Section = styled.div`
    padding: 58px 0;
    position: relative;
    display: block;
    overflow-x: hidden;
    ul.desktop {
        display: none;
        @media (min-width: 768px) {
            display: flex;
        }
    }

    div.mobileDropdown {
        text-align: center;
        font-size: 22px;
        @media (min-width: 768px) {
            display: none;
        }
    }

    ul.mobileDropdown {
        height: 120px;
        z-index: 1;
        width: 100vw;
        font-size: 22px;
        @media (min-width: 768px) {
            left: 0;
            width: 100%;
        }
    }
    @media (min-width: 1200px) {
        padding: 74px 0;
    }
    ul {
        position: relative;
        justify-content: space-around;
        @media (max-width: 560px) {
            font-size: 16px;
        }
        @media (max-width: 768px) {
            width: 100vw;
            left: -24px;
        }
        li {
            margin-bottom: 0;
            padding-bottom: 10px;
        }
        &::after {
            content: " ";
            width: 100%;
            height: 1px;
            position: absolute;
            bottom: 1px;
            z-index: -1;
            background-color: ${(props) => props.theme.colors.lightGray};
        }
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
    margin-top: 30px;

    @media (max-width: 768px) {
        .tns-ovh {
            width: 100vw;
            position: relative;
            left: -24px;
        }
        #tns3-iw {
            margin-left: 36px;
        }
    }

    .tns-controls {
        margin: 25px 0 0 0;
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
        background-color: ${(props) => props.theme.colors.grey};
    }

    &.tabActive {
        display: block;
    }

    &.tabDisplayNone {
        display: none;
    }
`;

export const Card = styled.a`
    @media (max-width: 560px) {
        margin: 0 auto
    }
    display: block;
    overflow: hidden;
    max-width: 230px;
    min-height: 220px;
    color:  ${(props) => props.theme.colors.grey};
    border: 1px solid;
    border color: ${(props) => props.theme.colors.grey};
    position: relative;
    cursor: pointer;
`;

export const CardIcon = styled.img`
    display: block;
    margin: 0 auto;
    margin-top: 35px;
    margin-bottom: 15px;
    width: 74px;
    height: 74px;
    fill: ${(props) => props.theme.colors.pink};
    position: relative;
    text-align: center;
    z-index: 5;
`;

export const CardTitle = styled.h3`
    font-size: 25px;
    color: ${(props) => props.theme.colors.marine};
    position: relative;
    text-align: center;
    z-index: 5;
    padding: 0 18px;
    margin-bottom: 12px;
`;

export const CardSubtitle = styled.h4`
    font-size: 16px;
    font-weight: 400;
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
