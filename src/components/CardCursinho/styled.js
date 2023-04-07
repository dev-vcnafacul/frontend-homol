import styled from "styled-components";

export const Card = styled.div`
    width: 300px;
    border-radius: 10px;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    background-color: ${(props) => props.theme.colors.white};
    padding: 10px;
    margin: 15px 5px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: translateY(-5px);
    }

    img {
        width: 100%;
        object-fit: cover;
        border-radius: 10px;
    }
`;

export const Information = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px 10px;
`;

export const Titulo = styled.div`
    font-size: 14px;
    text-align: center;
`;

export const RowField = styled.span`
    font-size: 13px;
    font-weight: bolder;
    padding: 2px;
`;

export const RowInformation = styled.span`
    font-size: 13px;
    padding: 2px;
`;

export const StatusCursinho = styled.div`
    padding: 0px 5px;
`;

export const FooterCard = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
`;

export const ModalDiv = styled.div`
    display: ${(p) => p.block};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 9999;
`;

export const ContentDiv = styled.div`
    position: fixed;
    background-color: white;
    width: 80%;
    height: auto;
    top: 50%;
    left: 50%;
    padding: 2rem;
    transform: translate(-50%, -50%);
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 4fr 2fr 3fr;
    grid-template-rows: 1fr 1fr;
`;

export const InforcacaoCursinho = styled.div`
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    max-height: 600px;
    overflow-y: scroll;
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
    font-size: 14px;
`;

export const Forms = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
