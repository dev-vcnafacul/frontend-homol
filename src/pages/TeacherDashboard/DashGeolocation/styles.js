import styled from "styled-components";

export const Content = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Text = styled.div`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    padding: 20px;
    color: ${(props) => props.theme.colors.marine};
`;
