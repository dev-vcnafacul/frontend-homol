import { createGlobalStyle } from "styled-components";

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
    html {
        font-size: 12px;
        font-family: sans-serif;
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
