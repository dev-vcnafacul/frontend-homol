import styled from "styled-components";

export const WrapCarousel = styled.div`
    position: relative;

    .tns-nav,
    .tns-controls {
        display: flex;
        align-items: center;
        position: absolute;
        height: 22px;
        bottom: 24px;
        left: ${(props) => props.theme.container.mobile};
        right: ${(props) => props.theme.container.mobile};
    }

    .tns-nav {
        justify-content: center;

        button {
            width: 11px;
            height: 11px;
            margin: 0 10px;
            border-radius: 50%;
            padding: 0;
            border: none;
            background-color: ${(props) => props.theme.colors.backgroundGrey};

            &.tns-nav-active {
                background-color: ${(props) => props.theme.colors.yellow};
            }
        }
    }

    .tns-controls {
        pointer-events: none;
        justify-content: space-between;

        button {
            pointer-events: all;
            border: none;
            background-color: transparent;
            width: 32px;
            height: 22px;
            padding: 0;
            background-size: contain;
            background-repeat: no-repeat;

            &:first-child {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 21'%3E%3Cpath fill='${(
                    props
                ) =>
                    props.arrowColor
                        ? encodeURIComponent(props.arrowColor)
                        : encodeURIComponent(
                              props.theme.colors.grey
                          )}' d='M27.5 11.7A1.3 1.3 0 1028 9a1.3 1.3 0 00-.5 2.7zM23 11.7a1.4 1.4 0 10.6-2.7 1.4 1.4 0 00-.6 2.7zM.3 11.1l9.2 9.2a1 1 0 101.4-1.4l-7.3-7.3h15.7a1.3 1.3 0 000-2.6H3.6L11 1.7A1 1 0 009.5.3L.3 9.5a1.2 1.2 0 000 1.6z'/%3E%3C/svg%3E");
            }

            &:last-child {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 21'%3E%3Cpath fill='${(
                    props
                ) =>
                    props.arrowColor
                        ? encodeURIComponent(props.arrowColor)
                        : encodeURIComponent(props.theme.colors.grey)}
                ' d='M1.6 9a1.3 1.3 0 10-.5 2.6 1.3 1.3 0 00.5-2.7zM6 9a1.3 1.3 0 10-.5 2.6A1.3 1.3 0 006 8.9zM28.7 9.5L19.6.3A1 1 0 1018 1.7L25.5 9H9.8a1.3 1.3 0 000 2.6h15.7L18 18.9a1 1 0 001.5 1.4l9.1-9.2a1.2 1.2 0 000-1.6z'/%3E%3C/svg%3E");
            }
        }
    }

    @media (min-width: 768px) {
        .tns-nav,
        .tns-controls {
            bottom: 36px;
            left: ${(props) => props.theme.container.tablet};
            right: ${(props) => props.theme.container.tablet};
        }
    }

    @media (min-width: 1200px) {
        .tns-nav,
        .tns-controls {
            left: ${(props) => props.theme.container.desktop};
            right: ${(props) => props.theme.container.desktop};
        }
    }

    @media (min-width: 1366px) {
        .tns-nav,
        .tns-controls {
            left: ${(props) => props.theme.container.desktopPlus};
            right: ${(props) => props.theme.container.desktopPlus};
        }
    }
`;
