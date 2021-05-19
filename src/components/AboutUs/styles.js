import styled from "styled-components";

import { Container } from "../../styles/common";

export const Wrap = styled(Container)`
    margin-top: 40px;
    margin-bottom: 52px;
    text-align: center;

    @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: left;
        margin-top: 98px;
        margin-bottom: 98px;
    }
`;

export const VideoWrapper = styled.div`
    position: relative;
    box-sizing: border-box;
    padding: 40px 0 20px;
    margin-bottom: 20px;

    @media (min-width: 768px) {
        padding: 40px 40px 20px;
        margin-right: 40px;
        margin-bottom: 0;
        min-width: 60%;
    }

    @media (min-width: 1200px) {
        padding: 40px 40px 20px 60px;
        margin-right: 80px;
    }

    .graphism {
        position: absolute;

        &.square-pink {
            width: 105px;
            height: 105px;
            top: 0;
            left: -${(props) => props.theme.container.mobile};
        }

        &.triangle-border {
            display: none;
        }

        &.triangle-yellow {
            width: 100px;
            height: 100px;
            bottom: 0;
            right: -${(props) => props.theme.container.mobile};
            transform: rotate(180deg);
        }

        @media (min-width: 768px) {
            &.square-pink {
                width: 193px;
                height: 193px;
                top: 0;
                left: 0;
            }

            &.triangle-border {
                display: block;
                width: 100px;
                height: 100px;
                bottom: 42px;
                left: 24px;
                transform: rotate(225deg);
            }

            &.triangle-yellow {
                width: 140px;
                height: 140px;
                bottom: 0;
                right: 0;
            }
        }

        @media (min-width: 1200px) {
            &.triangle-border {
                width: 115px;
                height: 115px;
                bottom: 90px;
            }
        }
    }
`;

export const VideoContainer = styled.div`
    position: relative;

    .videoContainer {
        position: absolute;
        width: 85%;
        padding-top: 65.25%;
        top: 7%;
        left: 7.55%;
        z-index: 3;

        .video {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            width: 100%;
            height: 100%;
        }
    }
`;

export const ImageContainer = styled.div`
    position: absolute;
    width: 85%;
    padding-top: 65%;
    top: 7%;
    left: 7.55%;

    img {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-color: #0000004a;
    }
`;

export const Content = styled.div`
    @media (min-width: 768px) {
        * {
            text-align: left;
        }
    }
`;
