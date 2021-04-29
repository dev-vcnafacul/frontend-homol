import styled from "styled-components";
import { Container } from "../../styles/common";

export const FlexContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const MenuButtons = styled.div`
    @media (min-width: 1200px) {
        display: none;
    }
`;

export const MenuContainer = styled.div`
    position: fixed;
    transform: translateX(${(props) => (props.open ? "0" : "-100vw")});
    top: 66px;
    left: 0;
    background-color: ${(props) => props.theme.colors.white};
    min-height: calc(100vh - 66px);
    width: 100%;
    padding: 16px 0 0 0;
    transition: transform 0.15s;

    @media (min-width: 1200px) {
        display: block;
        position: static;
        transform: translateX(0);
        background-color: transparent;
        min-height: auto;
        padding: 0;
        text-align: center;
        width: auto;
    }
`;

export const MenuItem = styled.a`
    font-size: 20px;
    color: ${(props) => props.theme.colors.marine};
    margin: 0 0 50px 0;
    display: block;
    font-weight: 700;
    text-align: center;

    &:hover {
        font-weight: 700;
    }

    @media (min-width: 1200px) {
        font-size: 16px;
        color: ${(props) => props.theme.colors.white};
        margin: 0 25px 0 0;
        display: inline;
        font-weight: 500;
        text-align: left;
    }
`;

export const SignUpButton = styled.a`
    display: none;

    @media (min-width: 1200px) {
        display: inline-block;
        padding: 7px 21px 7px 12px;
        color: ${(props) => props.theme.colors.white};
        background-color: ${(props) => props.theme.colors.orange};
        cursor: pointer;
        font-weight: 700;
        display: flex;
        align-items: center;
        transition: transform 250ms ease-in-out;

        &:hover {
            transform: translateX(7px);
        }

        svg {
            margin: 0 5px 0 0;
        }
    }
`;

export const SignContainer = styled.div`
    @media (min-width: 1200px) {
        display: flex;
        align-items: center;
    }
`;

export const AccountCircleButton = styled.div`
    background-color: ${(props) => props.theme.colors.orange};
    border-radius: 50%;
    width: 35px;
    height: 35px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-left: auto;

    @media (min-width: 1200px) {
        display: none;
    }
`;

export const SignInButton = styled.a`
    display: none;

    @media (min-width: 1200px) {
        font-size: 16px;
        color: ${(props) => props.theme.colors.white};
        margin: 0 25px 0 0;
        font-weight: 700;
        display: inline;
    }
`;

export const SocialMediaContainer = styled.div`
    @media (min-width: 1200px) {
        display: none;
    }

    &:before {
        content: "";
        width: 50px;
        height: 3px;
        background-color: ${(props) => props.theme.colors.green};
        margin: 0 auto 35px auto;
        display: block;
    }
`;

export const SocialMediaTitle = styled.p`
    color: ${(props) => props.theme.colors.green};
    margin: 0 0 30px 0;
    font-weight: 700;
    text-align: center;
    font-size: 16px;
`;

export const SocialMediaLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    a {
        margin: 0 20px;
    }
`;

export const SearchInput = styled.input`
    background-color: rgba(176, 176, 176, 0.16);
    color: ${(props) => props.theme.colors.marine};
    font-size: 16px;
    padding: 16px 24px;
    width: calc(100% - 30px);
    box-sizing: border-box;
    margin: 0 15px 65px 15px;
    border: 0;
`;

export const SearchContainer = styled.div`
    position: relative;
    @media (min-width: 1200px) {
        display: none;
    }
`;

export const SearchButton = styled.button`
    position: absolute;
    top: 16px;
    right: 24px;
    background-color: transparent;
    border: 0;
`;

export const SignMenu = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    min-width: 50%;
    padding: 21px 26px;
    background-color: ${(props) => props.theme.colors.white};
    text-align: right;
    transform: translateX(${(props) => (props.open ? "0" : "100vw")});
    transition: transform 0.15s;

    @media (min-width: 1200px) {
        display: none;
    }
`;

export const SignMenuItem = styled.a`
    font-size: 20px;
    color: ${(props) => props.theme.colors.marine};
    font-weight: 700;
    margin: 25px 0 0 0;
    display: block;
`;

export const Bar = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 16px 0;
    z-index: 9999;
    background-color: ${(props) => (props.openMenu || props.solid ? props.theme.colors.white : "transparent")};
    transition: background-color 0.15s;
    box-shadow: ${(props) => (props.solid ? "0px 3px 6px #00000029" : "none")};

    .logo {
        fill: ${(props) => (props.openMenu || props.solid ? props.theme.colors.marine : props.theme.colors.white)};
    }

    .menuIcon {
        fill: ${(props) => (props.solid ? props.theme.colors.marine : props.theme.colors.white)};
    }

    ${MenuItem},
    ${SignInButton} {
        color: ${(props) => (props.openMenu || props.solid ? props.theme.colors.marine : props.theme.colors.white)};
    }

    @media (min-width: 1200px) {
        padding: 20px 0;
        background-color: ${(props) => (props.solid ? props.theme.colors.white : "transparent")};

        .logo {
            fill: ${(props) => (props.solid ? props.theme.colors.marine : props.theme.colors.white)};
        }
    }
`;

export const Brand = styled.p`
    margin: 0 0 0 10px;
    font-size: 18px;
    color: ${(props) =>
        props.openMenu || props.dark ? props.theme.colors.backgroundMarine : props.theme.colors.white};

    @media (min-width: 1200px) {
        font-size: 20px;
        color: ${(props) => (props.dark ? props.theme.colors.backgroundMarine : props.theme.colors.white)};
    }
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`;
