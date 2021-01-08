import styled from "styled-components";
import Carousel from "../../Carousel";

export const SponsorsCarousel = styled(Carousel)`
    flex-grow: 1;
    margin-top: 140px;
    .tns-controls {
        margin: 125px 0 0 0;
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
    @media (max-width: 1200px) {
        margin-top: 66px;
        .tns-controls {
            margin: 82px 0 0 0;
        }
    }
`;

export const SponsorImage = styled.img`
    max-height: 70px;
    width: auto;
    margin-left: auto;
    margin-right: auto;
`;
