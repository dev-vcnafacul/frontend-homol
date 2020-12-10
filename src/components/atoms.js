import styled from "styled-components";

export const Container = styled.div`
    margin-left: ${(props) => (props.size.mobile ? props.size.mobile : props.theme.container.mobile)};
    margin-right: ${(props) => (props.size.mobile ? props.size.mobile : props.theme.container.mobile)};

    @media (min-width: 768px) {
        margin-left: ${(props) => (props.size.tablet ? props.size.tablet : props.theme.container.tablet)};
        margin-right: ${(props) => (props.size.tablet ? props.size.tablet : props.theme.container.tablet)};
    }

    @media (min-width: 1200px) {
        margin-left: ${(props) => (props.size.desktop ? props.size.desktop : props.theme.container.desktop)};
        margin-right: ${(props) => (props.size.desktop ? props.size.desktop : props.theme.container.desktop)};
    }

    @media (min-width: 1366px) {
        margin-left: ${(props) =>
            props.size.desktopPlus ? props.size.desktopPlus : props.theme.container.desktopPlus};
        margin-right: ${(props) =>
            props.size.desktopPlus ? props.size.desktopPlus : props.theme.container.desktopPlus};
    }
`;
