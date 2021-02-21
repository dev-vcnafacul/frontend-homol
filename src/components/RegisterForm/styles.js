import styled from "styled-components";
import { Link } from "react-router-dom";
import { SectionTitle, Container } from "../../styles/common";
import { Button } from "../atoms";

export const Wrap = styled(Container)`
    @media (min-width: 768px) {
        max-width: 494px;
        margin: 0 auto;
    }
`;

export const Title = styled(SectionTitle)`
    margin-bottom: 30px;
`;

export const Description = styled.p`
    font-size: 14px;
    color: ${(props) => props.theme.colors.grey};
    margin: 16px 0;
    text-align: center;
`;

export const SubmitBtn = styled(Button)`
    width: 100%;

    @media (min-width: 1200px) {
        font-size: 19px;
        padding: 17px 0;
    }
`;

export const LinkLogin = styled(Link)`
    font-weight: 700;
    color: ${(props) => props.theme.colors.orange};
    text-decoration: underline;
    transition: color 250ms linear;

    &:hover {
        color: #ff4400;
    }
`;

export const Error = styled.p`
    color: ${(props) => props.theme.colors.redError};
    font-size: 16px;
    text-align: center;
    margin: 10px 0;
`;

export const Success = styled.p`
    font-size: 18px;
    text-align: center;
    max-width: 400px;
    margin: 0 auto;
    line-height: 1.4;
`;
