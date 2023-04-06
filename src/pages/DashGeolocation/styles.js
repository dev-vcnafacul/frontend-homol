import styled from "styled-components";

export const Content = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
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

// Modal.js

export const ModalDiv = styled.div`
    display: ${(p) => p.block && p.block};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
`;

export const ContentDiv = styled.div`
    position: fixed;
    background-color: white;
    width: 90%;
    height: auto;
    top: 50%;
    left: 50%;
    padding: 2rem;
    transform: translate(-50%, -50%);
    border-radius: 10px;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 1.5fr;
    grid-template-rows: 1fr 1fr;
`;

export const InforcacaoCursinho = styled.div`
    background-color: red;
    grid-column: 1 / 2;
    grid-row: 1 / 3;
`;

export const Cadastrado = styled.div`
    background-color: green;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
`;

export const Atualizado = styled.div`
    background-color: blue;
    grid-column: 2 / 3;
    grid-row: 2 / 3;
`;

export const Map = styled.div`
    background-color: yellow;
    grid-column: 3 / 4;
    grid-row: 1 / 3;
`;

export const Title = styled.div`
    color: ${(props) => props.theme.colors.marine};
    font-weight: bold;
    font-size: 18px;
`;

export const Component = styled.div`
    width: calc(100% - 100px);
    background-color: ${(props) => props.theme.colors.backgroundGrey};
`;
