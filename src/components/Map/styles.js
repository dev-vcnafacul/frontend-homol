import styled from "styled-components";
import { MapContainer } from "react-leaflet";
import { Container } from "../../styles/common";
import { Link } from "react-router-dom";

export const Section = styled.section`
    position: relative;
`;

export const MapBox = styled(MapContainer)`
    height: 50vh;
    min-height: 500px;

    @media (min-width: 1200px) {
        min-height: 560px;
    }
`;

export const Paragraph = styled.p`
    color: ${(props) => props.theme.colors.grey};
    font-size: 16px;
    margin: 0 0 5px 0;
    line-height: 1.4;

    @media (min-width: 1200px) {
        font-size: 20px;
        margin: 0 0 14px 0;
    }
`;

export const Title = styled.h2`
    color: ${(props) => props.theme.colors.marine};
    font-weight: 700;
    font-size: 35px;
    margin: 0 0 26px 0;
    line-height: 1;
`;

export const Box = styled.div`
    background-color: ${(props) => props.theme.colors.white};
    padding: 30px 0;
    box-sizing: border-box;
    text-align: center;
    scroll-margin-top: 50px;

    @media (min-width: 1200px) {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 50px;
        z-index: 9998;
        padding: 30px;
        max-width: 412px;
        box-sizing: border-box;
    }
`;

export const SocialMedia = styled.div`
    display: flex;
    flex-direction: row;
    gap: 4px;
    align-items: center;
    justify-content: center;
`;

export const Subtitle = styled.p`
    color: ${(props) => props.theme.colors.marine};
    font-size: 14px;
    margin: 26px 0 16px 0;

    @media (min-width: 1200px) {
        font-size: 18px;
    }
`;

export const Button = styled(Link)`
    padding: 12px 25px;
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.orange};
    font-size: 16px;
    font-weight: 700;
    display: inline-block;
`;

export const BoxContainer = styled(Container)`
    @media (min-width: 1200px) {
        margin: 0;
    }
`;
