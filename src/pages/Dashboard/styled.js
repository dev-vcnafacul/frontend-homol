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
`;

export const Content = styled(Container)`
    display: flex;
    width: 100%;
`;
