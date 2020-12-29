import styled from "styled-components";

export const Container = styled.div`
    margin-left: ${(props) => props.theme.container.mobile};
    margin-right: ${(props) => props.theme.container.mobile};

    @media (min-width: 768px) {
        margin-left: ${(props) => props.theme.container.tablet};
        margin-right: ${(props) => props.theme.container.tablet};
    }

    @media (min-width: 1200px) {
        margin-left: ${(props) => props.theme.container.desktop};
        margin-right: ${(props) => props.theme.container.desktop};
    }

    @media (min-width: 1366px) {
        margin-left: ${(props) => props.theme.container.desktopPlus};
        margin-right: ${(props) => props.theme.container.desktopPlus};
    }
`;

export const SectionTitle = styled.h2`
    font-size: 25px;
    font-weight: 700;
    line-height: 35px;
    color: ${(props) => props.theme.colors.marine};
    margin-bottom: 18px;
    text-align: center;

    @media (min-width: 1200px) {
        font-size: 35px;
        line-height: 22px;
        margin-bottom: 13px;
    }
`;

export const SectionSubtitle = styled.p`
    font-size: 1.16rem;
    line-height: 26px;
    margin-bottom: 40px;
    text-align: center;

    @media (min-width: 1200px) {
        line-height: 35px;
        margin-bottom: 59px;
        text-align: left;
    }
`;
