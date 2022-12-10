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

export const Menu = styled.div`
    background-color: ${(props) => props.theme.colors.white};
    align-self: start;
    padding: 16px 32px;
    min-width: 180px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;
