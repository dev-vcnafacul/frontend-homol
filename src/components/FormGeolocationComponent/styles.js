import styled from "styled-components";
import { Link } from "react-router-dom";
import { SectionTitle, Container, SectionSubtitle } from "../../styles/common";
import { Button } from "../atoms";
import CheckboxField from "../CheckboxField";

export const Wrap = styled(Container)`
    /*min-height: calc(100vh - 67px);*/
    @media (min-width: 768px) {
        max-width: 494px;
        margin: 0 auto;
    }
`;

export const Title = styled(SectionTitle)`
    margin-bottom: 30px;
    line-height: normal;
    @media (max-width: 1200px) {
        margin-bottom: 20px;
    }

    @media (max-width: 320px) {
        font-size: 20px;
    }
`;

export const SubmitBtn = styled(Button)`
    width: 100%;

    @media (max-width: 1200px) {
        padding: 10px 0;
    }

    @media (min-width: 1200px) {
        font-size: 19px;
        padding: 17px 0;
    }

    text-align: center;
`;

export const SubmitCourseBtn = styled(Button)`
    width: 100%;
    background-color: ${(props) => props.theme.colors.lightGreen};

    transition: background-color 250ms linear;

    &:hover {
        background-color: ${(props) => props.theme.colors.darkGreen};
    }

    @media (min-width: 1200px) {
        font-size: 19px;
        padding: 17px 0;
    }

    text-align: center;
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
    @media (max-width: 1200px) {
        font-size: 16px;
    }
`;

export const CheckboxText = styled.p`
    font-size: 14px;
    line-height: 1.4;
    margin: 0;
    color: ${(props) => props.theme.colors.grey};

    a {
        font-weight: bold;
        text-decoration: underline;
    }
`;

export const CheckboxWrapper = styled(CheckboxField)`
    padding-bottom: 25px;
    position: relative;
`;

export const SuccessDiv = styled.div`
    margin-top: calc(50vh - 230px);
    text-align: center;
    @media (min-width: 1200px) {
        margin-top: calc(50vh - 270px);
    }
`;

export const SuccessIcon = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
    width: 78px;
    height: 78px;
`;

export const LoginShortcut = styled(Button)`
    width: calc(100% - 28px);
    text-align: center;
    font-size: 16px;
    margin-top: 24px;
    padding: 10px 14px;
    background-color: ${(props) => props.theme.colors.orange};
    &:hover {
        background-color: #ff4400;
    }
    @media (min-width: 1200px) {
        width: 100%;
        font-size: 19px;
        padding: 17px 0;
        margin-top: 39px;
    }
`;

export const Description = styled.p`
    font-size: 14px;
    color: ${(props) => props.theme.colors.grey};
    margin: 16px 0;
    text-align: center;
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

export const Montserrat18 = styled(SectionSubtitle)`
    text-align: center;
    margin: 0;
    margin-top: 12px;
    @media only screen and (max-width: 1200px) {
        padding: 0 11%;
        margin-top: 18px;
    }
`;

export const Montserrat16 = styled(SectionSubtitle)`
    font-size: 1rem;
    text-align: center;
    margin: 0;
    margin-top: 12px;
    @media only screen and (max-width: 1200px) {
        padding: 0 11%;
        margin-top: 18px;
    }
`;

export const Footer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;

    @media (max-width: 1200px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
`;
