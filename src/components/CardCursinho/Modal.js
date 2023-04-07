import { ContentDiv, ModalDiv, Grid, InforcacaoCursinho, Cadastrado, Atualizado, Map, Title } from "./styled";

function Modal({ handleClose, show, cursinho }) {
    const info = {
        id: cursinho.id,
        latitude: cursinho.latitude,
        longitude: cursinho.longitude,
        name: cursinho.name,
        cep: cursinho.cep,
        state: cursinho.state,
        city: cursinho.city,
        neighborhood: cursinho.neighborhood,
        street: cursinho.street,
        number: cursinho.number,
        complement: cursinho.complement,
        phone: cursinho.phone,
        whatsapp: cursinho.whatsapp,
        email: cursinho.email,
        email_2: cursinho.email_2,
        category: cursinho.category,
        site: cursinho.site,
        linkedin: cursinho.linkedin,
        youtube: cursinho.youtube,
        facebook: cursinho.facebook,
        instagram: cursinho.instagram,
        twitter: cursinho.twitter,
        tiktok: cursinho.tiktok,
        status: cursinho.status,
    };

    const cadastrado = {
        user_fullname: cursinho.user_fullname,
        user_phone: cursinho.user_phone,
        user_connection: cursinho.user_connection,
        user_email: cursinho.user_email,
        created_at: cursinho.created_at,
        updated_at: cursinho.updated_at,
    };

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
