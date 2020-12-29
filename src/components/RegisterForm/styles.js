import styled from "styled-components";
import { SectionTitle, Container } from "../../styles/common";
import { Button, FormError } from "../atoms";

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

export const LinkLogin = styled.a`
    font-weight: 700;
    color: ${(props) => props.theme.colors.orange};
    text-decoration: underline;
    transition: color 250ms linear;

    &:hover {
        color: #ff4400;
    }
`;

export const SocialLogin = styled.a`
    position: relative;
    box-sizing: border-box;
    display: block;
    border: 1px solid #979797;
    border-radius: 4px 4px 0px 0px;
    font-size: 14px;
    color: ${(props) => props.theme.colors.grey};
    padding: 15px 24px 15px 53px;
    margin-bottom: 37px;
    transition: border-color 250ms linear;

    &:hover {
        border-color: ${(props) => props.theme.colors.orange};
    }

    &:before {
        position: absolute;
        left: 15px;
        top: 50%;
        transform: translateY(-50%);
        display: inline-block;
        content: "";
        width: 23px;
        height: 23px;
        vertical-align: sub;
        background-size: contain;
        ${(props) =>
            props.type === "facebook"
                ? "background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%231B79F2' d='M512 256a256 256 0 10-256 256l4.5-.1V312.7h-55v-64.1h55v-47.2c0-54.7 33.4-84.5 82.2-84.5 23.4 0 43.5 1.7 49.3 2.5v57.2h-33.6c-26.5 0-31.7 12.6-31.7 31.1v40.8h63.5l-8.3 64.1h-55.2v189.5A256 256 0 00512 256z'/%3E%3C/svg%3E\");"
                : "background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath d='M120 256c0-25.4 7-49.1 19.1-69.5v-86.3H52.8A254 254 0 000 256a254 254 0 0052.8 155.8h86.3v-86.3A135.2 135.2 0 01120 256z' fill='%23fbbd00'/%3E%3Cpath d='M256 392l-60 60 60 60a254 254 0 00155.8-52.8V373h-86.2a136 136 0 01-69.6 19z' fill='%230f9d58'/%3E%3Cpath d='M139.1 325.5l-86.3 86.3A254.3 254.3 0 00256 512V392a136 136 0 01-116.9-66.5z' fill='%2331aa52'/%3E%3Cpath d='M512 256c0-15.6-1.4-31.2-4.2-46.4l-2.2-12.3H256v120h121.5a135.4 135.4 0 01-52 55.7l86.3 86.2A254.3 254.3 0 00512 256z' fill='%233c79e6'/%3E%3Cpath d='M352.2 159.8l10.6 10.6 84.8-84.8L437 75A254.3 254.3 0 00256 0l-60 60 60 60c36.3 0 70.5 14.1 96.2 39.8z' fill='%23cf2d48'/%3E%3Cpath d='M256 120V0A254.3 254.3 0 0052.8 100.2l86.3 86.3A136 136 0 01256 120z' fill='%23eb4132'/%3E%3C/svg%3E\");"}

        @media (min-width: 1200px) {
            left: 18px;
        }
    }

    @media (min-width: 768px) {
        text-align: center;
    }

    @media (min-width: 1200px) {
        padding: 19px 24px 19px 53px;
        font-size: 15px;
        margin-bottom: 23px;
    }
`;

export const Error = styled(FormError)`
    left: initial;
    bottom: -28px;
`;

export const PasswordSteps = styled.div`
    font-size: 12px;
    margin-bottom: 25px;
    color: ${(props) => props.theme.colors.grey};

    P {
        margin-bottom: 12px;
    }

    @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
    }
`;

export const StepsWrap = styled.ul`
    max-width: 325px;
    padding: 0;
    margin: 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 14px 6px;

    @media (min-width: 768px) {
        margin-right: 20px;
    }
`;

export const Step = styled.li`
    position: relative;
    padding-left: 20px;

    &:before {
        content: "";
        position: absolute;
        width: 5px;
        height: 10px;
        left: 5px;
        top: -2px;
        border: solid ${(props) => props.theme.colors.grey};
        border-width: 0 1px 1px 0;
        transform: rotate(45deg);
    }
`;
