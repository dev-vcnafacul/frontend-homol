import { Button, Body } from "./styles";

function ModalConfirmCancel({ children, show, continueFunc, cancelFunc }) {
    return (
        <Body block={show ? "block" : "none"}>
            {children}
            <Button onClick={continueFunc}>Continuar</Button>
            <Button onClick={cancelFunc}>Cancelar</Button>
        </Body>
    );
}

export default ModalConfirmCancel;
