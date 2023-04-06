import styled from "styled-components";

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

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 240px;
    grid-template-rows: 77px 1fr;
`;

export const Body = styled.div`
    grid-column: 1 / 2;
    grid-row: 2 / 3;
`;

export const Menu = styled.div`
    grid-column: 2 / 3;
    grid-row: 2 / 3;
`;
