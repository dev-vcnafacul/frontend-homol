import styled from "styled-components";

export const Card = styled.div`
    width: 300px;
    border-radius: 10px;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    background-color: white;
    padding: 10px 10px 0px 0px;
    cursor: pointer;
    margin: 10px;
`;

export const Information = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px 10px 0px 10px;
`;

export const Titulo = styled.div`
    font-size: 15px;
    text-align: center;
`;

export const RowField = styled.span`
    font-size: 12px;
    font-weight: bolder;
    padding: 2px;
`;

export const RowInformation = styled.span`
    font-size: 12px;
    padding: 2px;
`;

export const StatusCursinho = styled.div`
    background-color: ${(props) => (props.status ? "#059669" : "#fb7185")};
    color: white;
    font-weight: bolder;
    display: flex;
    justify-content: end;
    padding: 5px 15px;
    border-radius: 25px;
    margin: 0px 10px;
`;

export const FooterCard = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
    padding: 10px;
`;

export const ModalDiv = styled.div`
    display: ${(p) => p.block && p.block};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
`;

export const ContentDiv = styled.div`
    position: fixed;
    background-color: white;
    width: 50%;
    height: auto;
    top: 50%;
    left: 50%;
    padding: 2rem;
    transform: translate(-50%, -50%);
`;
