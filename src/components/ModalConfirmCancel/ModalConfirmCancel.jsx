import { Button, Body } from "./styles";

function ModalConfirmCancel(message, confirmFunc, cancelFunc) {
    return (
        <Body>
            {message}
            <Button>Continuar</Button>
            <Button>Cancelar</Button>
        </Body>
    )
}

export default ModalConfirmCancel