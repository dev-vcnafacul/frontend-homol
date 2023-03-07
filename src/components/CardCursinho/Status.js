import { FooterCard, StatusCursinho } from "./styled";

function Status({ status }) {
    return (
        <FooterCard>
            <StatusCursinho status={status}>{status ? "Valido" : "Invalido"}</StatusCursinho>
        </FooterCard>
    );
}

export default Status;
