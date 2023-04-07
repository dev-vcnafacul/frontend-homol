import { FooterCard, StatusCursinho } from "./styles";
import statusRejected from "../../assets/icons/statusRejected.svg";
import StatusValidated from "../../assets/icons/statusValidated.svg";
import statusWaiting from "../../assets/icons/statusWaiting.svg";

function Status({ status }) {
    const AtualizaStatus = () => {
        if (status === "0") return StatusValidated;
        if (status === "1") return statusWaiting;
        if (status === "2") return statusRejected;
    };
    return (
        <FooterCard>
            <StatusCursinho>
                <img src={AtualizaStatus()} alt="status" />
            </StatusCursinho>
        </FooterCard>
    );
}

export default Status;
