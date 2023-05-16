import styled from "styled-components";

export const OutlinedBox = styled.div`
    height: 32px;
    width: 32px;
    background-color: white;
    border: 1.8px solid ${(props) => props.theme.colors.marine};
    color: ${(props) => props.theme.colors.marine};
    border-radius: 4px;
    margin: 4px;

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
`;

export const SolidBox = styled.div`
    height: 32px;
    width: 32px;
    background-color: ${(props) => props.theme.colors.orange};
    border: 1.8px solid ${(props) => props.theme.colors.orange};
    color: ${(props) => props.theme.colors.white};
    border-radius: 4px;
    margin: 4px;

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
`;

export const UnsolvedBox = styled.div`
    height: 32px;
    width: 32px;
    border: 1.8px solid ${(props) => props.theme.colors.marine};
    background-color: ${(props) => props.theme.colors.lightYellow};
    color: ${(props) => props.theme.colors.marine};
    border-radius: 4px;
    margin: 4px;

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
`;
