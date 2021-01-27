import styled from "styled-components";
import Carousel from "../../Carousel";

export const VolunteersCarousel = styled(Carousel)`
    flex-grow: 1;
    margin-top: 105px;

    .tns-controls {
        margin: 40px 0 0 0;
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

    @media (max-width: 768px) {
        .tns-ovh {
            width: 102vw;
            position: relative;
            left: calc(-50vw + 48%);
        }
    }
    @media (max-width: 1200px) {
        margin-top: 34px;
        .tns-controls {
            margin: 82px 0 0 0;
        }
    }
`;

export const Card = styled.div`
    display: block;
    height: 190px;
    overflow: hidden;
    min-width: 230px;
    position: relative;
    text-align: center;
    @media (max-width: 1200px) {
        min-width: 104px;
    }
`;

export const CardIcon = styled.img`
    max-width: 100px;
    display: block;
    margin: 0 auto;
    margin-bottom: 15px;
    position: relative;
    text-align: center;
    z-index: 5;
`;

export const CardText = styled.h3`
    display: block;
    max-width: 112px;
    font-size: 18px;
    line-height: 1.6rem;
    color: ${(props) => props.theme.colors.darkGrey};
    position: relative;
    text-align: center;
    margin: 0 auto;
`;
