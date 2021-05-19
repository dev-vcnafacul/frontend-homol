import styled from "styled-components";
import Carousel from "../../Carousel";

export const SponsorsCarousel = styled(Carousel)`
    flex-grow: 1;
    margin-top: 80px;

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
            margin: 72px 0 0 0;
        }
    }
`;

export const SponsorImage = styled.a`
    img {
        max-width: 100%;
        max-height: 70px;
        width: auto;
        display: block;
        margin: auto;
    }
`;
