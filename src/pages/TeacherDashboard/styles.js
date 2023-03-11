import styled from "styled-components";
import { Container } from "styles/common";

export const Wrap = styled.div`
    background-color: ${(props) => props.theme.colors.backgroundGrey};
    min-height: calc(100vh - 77px);
    box-sizing: border-box;
    position: relative;
    padding: 50px 0 60px;
    margin-top: 67px;
    display: flex;

    @media (min-width: 768px) {
        padding: 8px;
    }

    @media (min-width: 1200px) {
        margin-top: 72px;
    }
`;

export const Content = styled(Container)`
    display: flex;
    justify-content: space-between;
`;

export const Text = styled.div`
    align-self: center;
    font-size: 20px;
    color: ${(props) => props.theme.colors.marine};
`;

export const Message = styled.p`
    line-height: 32px;
    font-size: 18px;
`;

export const Hero = styled.img`
    align-self: end;
    object-fit: contain;
    object-position: start;
    flex-grow: 0;
    margin-right: 16px;
    width: 35vw;
`;

export const Component = styled.div`
    width: calc(100% - 100px);
    background-color: ${(props) => props.theme.colors.backgroundGrey};
`;

export const theme = {
    container: {
        mobile: "24px",
        tablet: "10px",
        desktop: "10px",
        desktopPlus: "0px",
    },
    colors: {
        white: "#FFFFFF",
        orange: "#FF7600",
        yellow: "#FFE53C",
        green: "#37D6B5",
        marine: "#0B2747",
        backgroundMarine: "#001228",
        grey: "#707070",
        backgroundGrey: "#F8F8F8",
        black: "#000000",
        pink: "#DA005A",
        redError: "#ff0000",
        lightGray: "#E0E0E0",
        darkGrey: "#545454",
        darkOrange: "#FC8621",
        lightGreen: "#8cc408",
        darkGreen: "#0f9b2c",
    },
};
