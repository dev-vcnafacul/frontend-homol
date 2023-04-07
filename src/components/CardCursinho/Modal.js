import { useState } from "react";
import { ContentDiv, ModalDiv, Grid, InforcacaoCursinho, Cadastrado, Atualizado, Map, Title, Forms } from "./styled";
import Field from "components/Field";

function Modal({ handleClose, show, cursinho }) {
    const [infos, setInfos] = useState([
        { id: "id", type: "text", label: "ID", value: cursinho.id },
        { id: "latitude", type: "text", label: "Latitude", value: cursinho.latitude },
        { id: "longitude", type: "text", label: "Longitude", value: cursinho.longitude },
        { id: "name", type: "text", label: "Name", value: cursinho.name },
        { id: "cep", type: "text", label: "Cep", value: cursinho.cep },
        { id: "state", type: "text", label: "Estado", value: cursinho.state },
        { id: "city", type: "text", label: "Cidade", value: cursinho.city },
        { id: "neighborhood", type: "text", label: "Bairro", value: cursinho.neighborhood },
        { id: "street", type: "text", label: "Rua", value: cursinho.street },
        { id: "number", type: "text", label: "Numero", value: cursinho.number },
        { id: "complement", type: "text", label: "Complemento", value: cursinho.complement },
        { id: "phone", type: "text", label: "Telefone", value: cursinho.phone },
        { id: "whatsapp", type: "text", label: "WhatApp", value: cursinho.whatsapp },
        { id: "email", type: "email", label: "Email", value: cursinho.email },
        { id: "email_2", type: "email", label: "Email2", value: cursinho.email_2 },
        { id: "category", type: "text", label: "Categoria", value: cursinho.category },
        { id: "site", type: "text", label: "Site", value: cursinho.site },
        { id: "linkedin", type: "text", label: "Linkedin", value: cursinho.linkedin },
        { id: "youtube", type: "text", label: "Youtube", value: cursinho.youtube },
        { id: "facebook", type: "text", label: "Facebook", value: cursinho.facebook },
        { id: "instagram", type: "text", label: "Instagram", value: cursinho.instagram },
        { id: "twitter", type: "text", label: "Twitter", value: cursinho.twitter },
        { id: "tiktok", type: "text", label: "TikTok", value: cursinho.tiktok },
    ]);

    const [cadastrado, setCadastrado] = useState({
        user_fullname: cursinho.user_fullname,
        user_phone: cursinho.user_phone,
        user_connection: cursinho.user_connection,
        user_email: cursinho.user_email,
        created_at: cursinho.created_at,
        updated_at: cursinho.updated_at,
    });

    const [errors, setErrors] = useState({});

    function handleChangeField(field, values, value, setValue) {
        setValue({ ...values, [field]: value });
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
                                    id={info.id}
                                    type={info.type}
                                    label={info.label}
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
