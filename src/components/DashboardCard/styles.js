import styled from "styled-components";
import { Link } from "react-router-dom";

export const Card = styled.div`
    background-color: ${(props) => props.theme.colors[props.bg]};
    color: ${(props) => props.theme.colors.white};
    padding: 12px 8px;
    border-radius: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    width: 11rem;
`;

export const CardDescription = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
`;

export const CardTitle = styled.span`
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    font-weight: 600;
`;

export const Container = styled(CardDescription)`
    background-color: ${(props) => (props.activate ? props.theme.colors.lightGray : props.theme.colors.white)};
    color: ${(props) => props.theme.colors.marine};
    padding: 16px;
    border: 1px solid ${(props) => props.theme.colors.lightGray};
`;

export const ImgSubmenu = styled.img`
    background-color: ${(props) => props.theme.colors.lightGray};
    height: 16px;
`;
