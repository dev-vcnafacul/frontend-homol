import styled from "styled-components";
import { Container } from "../../styles/common";

export const Link = styled.a`
    display: inline-block;
    color: ${(props) => props.theme.colors.white};
    border: 2px solid ${(props) => props.theme.colors.white};
    padding: 10px;
    font-weight: 700;
    transition: background-color, color, transform 250ms ease-in-out;
    font-size: 12px;
    &:not(:last-child) {
        margin-right: 14px;
    }

    &:hover {
        background-color: ${(props) => props.theme.colors.white};
        color: ${(props) => props.theme.colors.marine};
        transform: translateX(7px);
    }

    @media (min-width: 1200px) {
        margin-bottom: 18px;
        font-size: 16px;
        padding: 12px 28px;

        &:not(:last-child) {
            margin-right: 20px;
        }

        &:hover {
            transform: translateX(10px);
        }
    }
`;

export const Background = styled.img`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
`;

export const WrapContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 102px;
    min-height: 100vh;
    box-sizing: border-box;
    @media (min-width: 768px) {
        padding-top: 76px;
        min-height: 430px;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
    }
    @media (min-width: 1200px) {
        min-height: 600px;
        align-items: center;
    }
`;

export const Content = styled.div`
    color: ${(props) => props.theme.colors.white};
    @media (min-width: 768px) {
        align-self: flex-start;
    }
    @media (min-width: 1200px) {
        max-width: calc(100% - 466px);
        width: 100%;
        margin-bottom: 116px;
        align-self: flex-end;
    }
`;

export const TextWrapper = styled.div`
    @media (min-width: 1200px) {
        transition: transform 0.3s ease-out;
        &:hover {
            transform: translate(10px);
        }
    }
`;

export const Title = styled.h2`
    font-size: 40px;
    margin-bottom: 24px;
    line-height: 50px;

    @media (min-width: 1200px) {
        font-size: 50px;
        margin-bottom: 6px;
        line-height: 70px;
    }
`;

export const Subtitle = styled.p`
    font-size: 16px;
    line-height: 26px;
    margin-bottom: 24px;

    @media (min-width: 1200px) {
        font-size: 20px;
        line-height: 35px;
        margin-bottom: 55px;
    }
`;

export const Image = styled.img`
    display: block;
    max-width: 100%;
    max-height: 100%;
    margin: 0 auto;
    position: relative;
    z-index: 1;
`;

export const Slide = styled.div`
    min-height: 750px;
    background: ${(props) => props.background};
    @media (min-width: 768px) {
        min-height: initial;
    }
    @media (min-width: 1200px) {
        min-height: 600px;
    }
`;
export const ImageWrapper = styled.div`
    position: relative;
    max-width: 300px;
    width: 100%;
    margin: 0 auto;
    @media (max-width: 768px) {
        max-width: 100vw;
        max-height: 350px;
    }
    @media (min-width: 1200px) {
        max-width: 477px;
        width: 477px;
        margin: 0;
        top: 0px;
    }
`;
