import styled from "styled-components";
import { Link } from "react-router-dom";
import { SectionTitle, Container, SectionSubtitle } from "../../styles/common";
import { Button } from "../atoms";
import CheckboxField from "../CheckboxField";

export const Wrap = styled(Container)`
    margin-top: 16px;
    margin-bottom: 52px;
    text-align: center;

    background: #f7f7f7;

    @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: left;
        margin-top: 98px;
        margin-bottom: 98px;
    }
`;

export const Content1 = styled.div`
    display: block;
    flex-direction: row;
    @media (min-width: 768px) {
        * {
            text-align: left;
        }
    }
`;

export const SectionContent = styled.div`
    display: flex;
    flex-direction: row;

    @media (min-width: 768px) {
        * {
            text-align: left;
        }
    }

    @media (max-width: 768px) {
        display: inline-block;
    }
`;

export const Title = styled(SectionTitle)`
margin - bottom: 30px;
line - height: normal;
@media(max - width: 1200px) {
    margin - bottom: 20px;
}
`;

// export const SubmitBtn = styled(Button)`
//     width: 100%;

//     @media (min-width: 1200px) {
//         font-size: 19px;
//         padding: 17px 0;
//     }

//     text-align: center;
// `;

// export const SubmitCourseBtn = styled(Button)`
//     width: 100%;
//     background-color: ${(props) => props.theme.colors.lightGreen};

//     transition: background-color 250ms linear;

//     &:hover {
//         background-color: ${(props) => props.theme.colors.darkGreen};
//     }

//     @media (min-width: 1200px) {
//         font-size: 19px;
//         padding: 17px 0;
//     }

//     text-align: center;
// `;

// export const Error = styled.p`
//     color: ${(props) => props.theme.colors.redError};
//     font-size: 16px;
//     text-align: center;
//     margin: 10px 0;
// `;

// export const Success = styled.p`
//     font-size: 18px;
//     text-align: center;
//     max-width: 400px;
//     margin: 0 auto;
//     line-height: 1.4;
//     @media (max-width: 1200px) {
//         font-size: 16px;
//     }
// `;

// export const CheckboxText = styled.p`
//     font-size: 14px;
//     line-height: 1.4;
//     margin: 0;
//     color: ${(props) => props.theme.colors.grey};

//     a {
//         font-weight: bold;
//         text-decoration: underline;
//     }
// `;

// export const CheckboxWrapper = styled(CheckboxField)`
//     padding-bottom: 25px;
//     position: relative;
// `;

// export const SuccessDiv = styled.div`
//     margin-top: calc(50vh - 230px);
//     text-align: center;
//     @media (min-width: 1200px) {
//         margin-top: calc(50vh - 270px);
//     }
// `;

// export const SuccessIcon = styled.img`
//     display: block;
//     margin-left: auto;
//     margin-right: auto;
//     margin-bottom: 30px;
//     width: 78px;
//     height: 78px;
// `;

// export const LoginShortcut = styled(Button)`
//     width: calc(100% - 28px);
//     text-align: center;
//     font-size: 16px;
//     margin-top: 24px;
//     padding: 10px 14px;
//     background-color: ${(props) => props.theme.colors.orange};
//     &:hover {
//         background-color: #ff4400;
//     }
//     @media (min-width: 1200px) {
//         width: 100%;
//         font-size: 19px;
//         padding: 17px 0;
//         margin-top: 39px;
//     }
// `;

// export const Description = styled.p`
//     font-size: 14px;
//     color: ${(props) => props.theme.colors.grey};
//     margin: 16px 0;
//     text-align: center;
// `;

// export const LinkLogin = styled(Link)`
//     font-weight: 700;
//     color: ${(props) => props.theme.colors.orange};
//     text-decoration: underline;
//     transition: color 250ms linear;
//     &:hover {
//         color: #ff4400;
//     }
// `;

export const CardContainer = styled(Container)`
    width: 327px;
    height: 215px;
    display: flex;
    flex-direction: column;
    border 2px solid ${(props) => props.color};
    border-radius: 4px;
    padding-left: 4%;
    margin-left: 6px;
    margin-right: 6px;
    align-items: baseline;
    background-color: #fff;

    @media (min-width: 768px) {
        width: 324px;
        height: 198px;
        display: flex;
        justify-content: space-between;
        
        text-align: left;
        margin-top: 98px;
        margin-bottom: 98px;
    }

    @media (max-width: 768px) {
        margin-left: 0px;
        margin-right: 0px;
        margin-top: 17px;
        margin-bottom: 17px;
    }
`;

export const CardIcon = styled.img`
    object-fit: cover;
    background-color: ${(props) => props.color};
    border-radius: 35px;
    padding: 8px;
    width: 42px;
    height: 41px;
    margin-top: -32px;
    margin-left: -75%;
    background-origin: content-box;
    background-repeat: no-repeat;

    @media (max-width: 768px) {
        width: 28px;
        height: 28px;
        padding: 4px;
        margin-top: -16px;
        margin-left: 0px;
        width: 32px;
    }
`;

export const CardTitle = styled.div`
    margin-top: 6px;
    width: 252px;
    height: 53px;
    font: normal normal bold 22px/26px Raleway;
    letter-spacing: 0.6px;
    color: #0b2747;
`;

export const CardDescription = styled.div`
    margin-top: 6px;
    width: 289px;
    height: 38px;
    font: normal normal normal 18px/22px Montserrat;
    color: #0b2747;
`;

export const CardButton = styled.div`
    width: 100%;
    margin-top: 18px;
    margin-bottom: 17px;
`;

export const ButtonStart = styled(Button)`
    width: 147px;
    height: 33px;
    padding-bottom: 0px;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 20px;
    font: normal normal bold 12px/9px Raleway;
    background-color: ${(props) => props.color};

    &:hover {
        background-color: yellow;
    }

    @media (min-width: 1200px) {
        padding-top: 25px;
    }

    text-align: center;
`;

export const RalewayBold35 = styled(SectionTitle)`
    margin: 0;
    margin-top: 87px;
    @media only screen and (max-width: 1200px) {
        margin-top: 41px;
        padding: 0 20%;
    }
`;

export const RalewayRegular20 = styled(SectionSubtitle)`
    font-size: 20px;
    margin: 0;
    margin-top: 16px;
    @media only screen and (max-width: 1200px) {
        margin-top: 8px;
        padding: 0 20%;
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
`;
