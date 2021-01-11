import styled from "styled-components";
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
        border-color: transparent transparent ${(props) => props.theme.colors.green} transparent;
        /*transform: rotate(180deg);*/
        position: absolute;
        right: 0;
        bottom: 0;
        z-index: -1;

        @media (min-width: 1200px) {
            border-width: 0 0 230px 230px;
        }
    }
`;

export const SupportersTitle = styled(SectionTitle)`
    line-height: 1.2;
    width: 220px;
    margin-left: auto;
    margin-right: auto;
    @media (min-width: 1200px) {
        text-align: center;
        width: auto;
        span {
            font-weight: 500;
        }
    }
`;

export const SupportersSubtitle = styled(SectionSubtitle)`
    font-size: 18px;
    color: ${(props) => props.theme.colors.grey};
    @media (min-width: 1200px) {
        text-align: center;
        font-size: 20px;
    }
`;

export const FlexContainer = styled(Container)`
    margin-bottom: 30px;
    @media (min-width: 1200px) {
        display: block;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 68px;
    }
`;

export const SectionContent = styled.div`
    @media (min-width: 1200px) {
        width: 100%;
    }
`;

export const VnfTeamCTA = styled.button`
    width: 266px;
    height: 43px;
    margin: 0 auto;
    margin-top: 48px;
    background-color: ${(props) => props.theme.colors.darkOrange};
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    color: ${(props) => props.theme.colors.white};
    border: 0;
    &.desktop {
        display: block;
    }
    &.mobile {
        display: none;
    }

    @media (max-width: 1024px) {
        width: 60%;
        max-width: 266px;
        margin: 0 auto;
        position: relative;
        top: -30px;
        font-size: 14px;
        &.desktop {
            display: none;
        }
        &.mobile {
            display: block;
        }
    }
`;
