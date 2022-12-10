import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
    background-color: ${(props) => props.theme.colors[props.bg]};
    color: ${(props) => props.theme.colors.white};
    padding: 16px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
`;
