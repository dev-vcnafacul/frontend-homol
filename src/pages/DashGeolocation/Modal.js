import { ContentDiv, ModalDiv, Grid, InforcacaoCursinho, Cadastrado, Atualizado, Map, Title } from "./styles";

function Modal({ handleClose, show, cursinho }) {
    console.log(cursinho);
    return (
        <ModalDiv block={show ? "block" : "none"}>
            <ContentDiv>
                <Grid>
                    <InforcacaoCursinho>
                        <Title>Informação do Cursinho</Title>
                    </InforcacaoCursinho>
                    <Cadastrado>
                        <Title>Cadastrado Por</Title>
                    </Cadastrado>
                    <Atualizado>
                        <Title>Última Edição Por</Title>
                    </Atualizado>
                    <Map>
                        <Title>Endereço do Cursinho</Title>
                    </Map>
                </Grid>
                <button onClick={handleClose}>Close</button>
            </ContentDiv>
        </ModalDiv>
    );
}

export default Modal;
