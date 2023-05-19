import styled from "styled-components";
import { Container } from "../../styles/common";

export const ArticleWrapper = styled(Container)`
    @media (min-width: 1200px) {
        margin-top: 82px;
        line-height: 1.5;
        h1,
        h2,
        h3,
        h4,
        h5 {
            margin-bottom: 25px;
            color: #f87f0b;
            font-weight: bold;
        }
        p {
            margin-bottom: 25px;
            color: ${(props) => props.theme.colors.grey};
        }
        a {
            color: ${(props) => props.theme.colors.orange};
            text-decoration: underline;
        }
    }
`;

export const Iframe = styled.iframe`
    height: 100vh;
    width: 59%;
    border: none;
    padding: 10px;
`;

export const BodyIFrame = styled.div`
    display: flex;
    justify-content: center;
`;
