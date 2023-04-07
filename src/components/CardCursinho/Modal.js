import { useState } from "react";
import { ContentDiv, ModalDiv, Grid, InforcacaoCursinho, Cadastrado, Atualizado, Map, Title, Forms } from "./styled";
import Field from "components/Field";

function Modal({ handleClose, show, cursinho }) {
    const [infos, setInfos] = useState({
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
        user_fullname: cursinho.user_fullname,
        user_phone: cursinho.user_phone,
        user_connection: cursinho.user_connection,
        user_email: cursinho.user_email,
        created_at: cursinho.created_at,
        updated_at: cursinho.updated_at,
    });

    const [errors, setErrors] = useState({});

    function handleChangeField(field, value) {
        setInfos({ ...infos, [field]: value });
    }

    function formatPhoneInput(value) {
        return value
            .replace(/\D/g, "")
            .replace(/(\d{2})(\d)/, "($1) $2")
            .replace(/(\d{4})(\d)/, "$1-$2")
            .replace(/(\d{4})-(\d)(\d{4})/, "$1$2-$3")
            .replace(/(-\d{4})\d+?$/, "$1");
    }

    function formatDateInput(value) {
        return value
            .replace(/\D/g, "")
            .replace(/(\d{2})(\d)/, "$1/$2")
            .replace(/(\d{2})(\d)/, "$1/$2")
            .replace(/(\d{4})\d+?$/, "$1");
    }

    function validateField(field, values) {
        const value = values[field];
        if (!value || (typeof value === "string" && value.trim() === "")) {
            setErrors((errors) => {
                return { ...errors, [field]: "*Campo obrigatório" };
            });
            return false;
        } else if (field === "nascimento" && value.length < 10) {
            setErrors((errors) => {
                return { ...errors, [field]: "*Data inválida" };
            });
            return false;
        } else if (field === "telefone" && value.length < 14) {
            setErrors((errors) => {
                return { ...errors, [field]: "*Telefone inválido" };
            });
            return false;
        } else {
            setErrors((errors) => {
                return { ...errors, [field]: undefined };
            });
            return true;
        }
    }

    return (
        <ModalDiv block={show ? "block" : "none"}>
            <ContentDiv>
                <Grid>
                    <InforcacaoCursinho>
                        <Title>Informação do Cursinho</Title>
                        <Forms>
                            {infos.map((info) => (
                                <Field
                                    id="name"
                                    type="text"
                                    label="Cursinho"
                                    value={""}
                                    error={() => {}}
                                    onChange={(e) => handleChangeField("email", infos, e.target.value, setInfos)}
                                    onBlur={() => validateField("email")}
                                />
                            ))}
                        </Forms>
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
