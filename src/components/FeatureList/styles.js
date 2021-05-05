import styled from "styled-components";
import { SectionTitle, SectionSubtitle } from "../../styles/common.js";

export const RalewayBold35 = styled(SectionTitle)`
    margin: 0;
    margin-top: 87px;
    @media only screen and (max-width: 1200px) {
        margin-top: 41px;
        padding: 0 20%;
    }
`;

export const Montserrat18 = styled(SectionSubtitle)`
    text-align: center;
    margin: 0;
    margin-top: 12px;
    @media only screen and (max-width: 1200px) {
        padding: 0 11%;
        margin-top: 18px;
    }
`;

export const BgTester = styled.div`
    background-color: #f8f8f8;
    height: 715px;
    text-align: center;
    overflow: hidden;
    @media only screen and (max-width: 1200px) {
        width: 100%;
        height: 700px;
    }
`;

export const ImgLegend = styled.p`
    margin-top: 24px;
    font-size: 16px;
    text-align: left;
    color: #707070;
    @media only screen and (max-width: 1200px) {
        margin: 28px 23px 0 23px;
        font-size: 14px;
        line-height: 24px;
        text-align: center;
        max-width: 653px;
    }
`;

export const Wrapper = styled.div`
    margin-top: 58px;
    display: grid;
    font-size: 20px;
    grid-template: 320px 175px / 2fr 353px 1fr 654px 2fr;
    ul.desktop {
        grid-column: 2;
        grid-row: 1;
    }
    img {
        grid-column: 4;
        grid-row: 1;
    }
    p {
        grid-column: 4;
        grid-row: 2;
    }

    @media only screen and (max-width: 1200px) {
        display: flex;
        width: 100%;
        margin: 0;
        flex-direction: column;
        margin-top: 36px;
        align-items: center;

        ul.desktop {
            display: none;
        }
    }
`;

export const BgImgDiv = styled.img`
    object-fit: cover;
    object-position: center;
    flex-grow: 0;
    width: 653px;
    height: 320px;

    @media only screen and (max-width: 1200px) {
        width: 100%;
        max-width: 653px;
        height: auto;
        min-height: 240px;
        text-align: center;
        margin: 0 auto;
    }

    transition: 500ms linear;
`;
