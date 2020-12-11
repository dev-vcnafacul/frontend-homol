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
