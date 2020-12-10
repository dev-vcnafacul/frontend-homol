import { createGlobalStyle } from "styled-components";

import Raleway300Woff2 from "../assets/fonts/raleway-v18-latin-300.woff2";
import Raleway300Woff from "../assets/fonts/raleway-v18-latin-300.woff";
import Raleway300Ttf from "../assets/fonts/raleway-v18-latin-300.ttf";
import RalewayRegularWoff2 from "../assets/fonts/raleway-v18-latin-regular.woff2";
import RalewayRegularWoff from "../assets/fonts/raleway-v18-latin-regular.woff";
import RalewayRegularTtf from "../assets/fonts/raleway-v18-latin-regular.ttf";
import Raleway500Woff2 from "../assets/fonts/raleway-v18-latin-500.woff2";
import Raleway500Woff from "../assets/fonts/raleway-v18-latin-500.woff";
import Raleway500Ttf from "../assets/fonts/raleway-v18-latin-500.ttf";
import Raleway700Woff2 from "../assets/fonts/raleway-v18-latin-700.woff2";
import Raleway700Woff from "../assets/fonts/raleway-v18-latin-700.woff";
import Raleway700Ttf from "../assets/fonts/raleway-v18-latin-700.ttf";

const GlobalStyle = createGlobalStyle`
    /* Utils
   ========================================================================== */
    a {
        text-decoration: none;
        color: inherit;
    }

    h1,
    h2,
    h3,
    h4,
    p {
        margin: 0;
    }
    
    /* Typography
   ========================================================================== */
    @font-face {
        font-family: 'Raleway';
        font-weight: 300;
        src: url(${Raleway300Woff2}) format('woff2'),
            url(${Raleway300Woff}) format('woff'),
            url(${Raleway300Ttf}) format('truetype');
        font-display: swap;
    }

    @font-face {
        font-family: 'Raleway';
        font-weight: 400;
        src: url(${RalewayRegularWoff2}) format('woff2'),
            url(${RalewayRegularWoff}) format('woff'),
            url(${RalewayRegularTtf}) format('truetype');
        font-display: swap;
    }

    @font-face {
        font-family: 'Raleway';
        font-weight: 500;
        src: url(${Raleway500Woff2}) format('woff2'),
            url(${Raleway500Woff}) format('woff'),
            url(${Raleway500Ttf}) format('truetype');
        font-display: swap;
    }

    @font-face {
        font-family: 'Raleway';
        font-weight: 700;
        src:
            url(${Raleway700Woff2}) format('woff2'),
            url(${Raleway700Woff}) format('woff'),
            url(${Raleway700Ttf}) format('truetype');
        font-display: swap;
    }

    html {
        font-size: 12px;
        font-family: 'Raleway', sans-serif;
    }

    @media (min-width: 768px) {
        html {
            font-size: 14px;
        }
    }

    @media (min-width: 1200px) {
        html {
            font-size: 16px;
        }
    }
`;

export default GlobalStyle;
