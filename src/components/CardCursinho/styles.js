import styled from "styled-components";
import { Button } from "../atoms";

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
    width: 90%;
    height: auto;
    top: 50%;
    left: 50%;
    padding: 2rem;
    transform: translate(-50%, -50%);
    max-height: 600px;
    max-width: 1080px;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 2fr 1.22fr 300px;
    grid-template-rows: 1fr 1fr;
`;

export const InforcacaoCursinho = styled.div`
    grid-column: 1 / 2;
    grid-row: 1 / 3;
`;

export const Cadastrado = styled.div`
    grid-column: 2 / 3;
    grid-row: 1 / 2;
`;

export const Atualizado = styled.div`
    grid-column: 2 / 3;
    grid-row: 2 / 3;
`;

export const Map = styled.div`
    grid-column: 3 / 4;
    grid-row: 1 / 3;
`;

export const Title = styled.div`
    color: ${(props) => props.theme.colors.marine};
    font-weight: bold;
    font-size: 18px;
    display: flex;
    justify-content: center;
    margin: 15px;

    img {
        margin-left: 10px;
    }
`;

export const Forms = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`;

export const FormField = styled.div`
    position: relative;
    margin: 3px 10px;
`;

export const Input = styled.input`
    appearance: none;
    background-color: ${(props) => props.theme.colors.white};
    box-sizing: border-box;
    width: 100%;
    min-width: 222px;
    border-radius: 4px 4px 0 0;
    border: 1px solid ${(props) => (props.error ? props.theme.colors.redError : props.theme.colors.grey)};
    color: ${(props) => props.theme.colors.grey};
    font-size: 12px;
    padding: 21px 10px 5px;
    margin-bottom: 5px;
    outline-color: ${(props) => props.theme.colors.orange};
    background-repeat: no-repeat;
    background-position-x: 98%;
    background-position-y: 50%;
    background-image: ${(props) =>
        props.arrow
            ? "url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSdibGFjaycgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyB3aWR0aD0nMjQnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZD0nTTcgMTBsNSA1IDUtNXonLz48cGF0aCBkPSdNMCAwaDI0djI0SDB6JyBmaWxsPSdub25lJy8+PC9zdmc+)"
            : "none"};
`;

export const InputLabel = styled.label`
    position: absolute;
    color: ${(props) => props.theme.colors.grey};
    top: 6px;
    left: 11px;
    font-size: 11px;
    font-weight: bold;
`;

export const SubmitBtn = styled(Button)`
    width: 100%;
    max-height: 34px;
    padding: 10px 0px;
    margin-top: 10px;
    text-align: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: ${(props) => {
        if (props.disabled) return props.theme.colors.darkGrey;
        return props.color ?? props.theme.colors.orange;
    }};
    cursor: ${(props) => (props.disabled ? "default" : "pointer")};

    &:hover {
        background-color: ${(props) => {
            if (props.disabled) return props.theme.colors.darkGrey;
            return props.color ?? props.theme.colors.orange;
        }};
    }
`;

export const ModalConfimation = styled.div`
    display: ${(p) => p.block};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 9999;
`;

export const ContentDivConfimation = styled.div`
    position: fixed;
    background-color: white;
    width: 90%;
    height: auto;
    top: 50%;
    left: 50%;
    padding: 2rem;
    transform: translate(-50%, -50%);
    max-height: 600px;
    max-width: 1080px;
`;
