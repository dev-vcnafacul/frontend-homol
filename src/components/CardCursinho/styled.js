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
    font-size: 16px;
    text-align: center;
`;

export const RowField = styled.span`
    font-size: 16px;
    font-weight: bolder;
    padding: 2px;
`;

export const RowInformation = styled.span`
    font-size: 16px;
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
