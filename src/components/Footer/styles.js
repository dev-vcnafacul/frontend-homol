import styled from "styled-components";
import { Container } from "../../styles/common";

export const Section = styled.div`
    background-color: ${(props) => props.theme.colors.backgroundMarine};
    padding: 50px 0;
    text-align: center;
    font-size: 16px;
    color: ${(props) => props.theme.colors.white};

    @media (min-width: 1200px) {
        text-align: left;
        padding: 55px 0 35px 0;
    }
`;

export const FlexContainer = styled(Container)`
    @media (min-width: 1200px) {
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
    }
`;

export const ParagraphHighlight = styled.p`
    font-style: italic;
    margin: 18px 0 50px 0;

    @media (min-width: 1200px) {
        margin: 18px 0 0 0;
    }
`;

export const Sitemap = styled.div`
    margin: 0 0 60px 0;
    @media (min-width: 768px) {
        column-count: 2;
        column-gap: 20px;
    }

    @media (min-width: 1200px) {
        margin: 0;
    }
`;

export const SitemapLink = styled.a`
    color: ${(props) => props.theme.colors.white};
    text-decoration: none;
    display: block;
    margin: 0 0 20px 0;

    &:hover {
        font-weight: 700;
    }
`;

export const SitemapContact = styled.p`
    color: ${(props) => props.theme.colors.white};
    margin: 0;
    line-height: 1.5;
`;

export const SocialMediaContainer = styled.div``;

export const SocialMediaTitle = styled.p`
    color: ${(props) => props.theme.colors.green};
    font-weight: 700;
    margin: 0 0 27px 0;
    line-height: 1.4;
`;

export const SocialMediaLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 1200px) {
        justify-content: flex-start;
    }

    svg {
        margin: 0 10px;
        path {
            fill: ${(props) => props.theme.colors.white};
        }
    }
`;
