import { ContentDiv, ModalDiv } from "./styled";

function Modal(props) {
    return (
        <ModalDiv block={props.show ? "block" : "none"}>
            <ContentDiv>
                {props.children}
                <button onClick={props.handleClose}>Close</button>
            </ContentDiv>
        </ModalDiv>
    );
}

export default Modal;
