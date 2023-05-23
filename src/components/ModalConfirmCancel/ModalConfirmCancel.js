import { Button, Body, Content, ButtonDiv } from "./styles";

function ModalConfirmCancel({ children, show, continueFunc, cancelFunc }) {
    return (
        <Content block={show ? "block" : "none"}>
            <Body>
                {children}
                <ButtonDiv>
                    <Button onClick={continueFunc}>Continuar</Button>
                    <Button onClick={cancelFunc}>Cancelar</Button>
                </ButtonDiv>
            </Body>
        </Content>
    );
}

export default ModalConfirmCancel;
