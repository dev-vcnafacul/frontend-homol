import { useState } from "react";

import { Input, InputLabel, FormField, FormError } from "../atoms";
// import { CheckboxWrapper, CheckboxText } from "./styles";
import { SubmitBtn } from "./styles";

function DadosPessoais({ goNextStep, oldData }) {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [data, setData] = useState(oldData);
    const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
        let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //arrumar RegEx
        if (regex.test(String(email).toLowerCase())) {
            setEmailError(false);
            return true;
        } else if (email.trim() === "") {
            setEmailError("*Campo obrigatório");
            return false;
        } else {
            setEmailError("*Utilize um e-mail válido");
            return false;
        }
    };

    const isValidField = (field, value) => {
        const possibleDDD = [
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            21,
            22,
            24,
            27,
            28,
            31,
            32,
            33,
            34,
            35,
            37,
            38,
            41,
            42,
            43,
            44,
            45,
            46,
            47,
            48,
            49,
            51,
            53,
            54,
            55,
            61,
            62,
            63,
            64,
            65,
            66,
            67,
            68,
            69,
            71,
            73,
            74,
            75,
            77,
            79,
            81,
            82,
            83,
            84,
            85,
            86,
            87,
            88,
            89,
            91,
            92,
            93,
            94,
            95,
            96,
            97,
            98,
            99,
        ];

        if (!value || (typeof value === "string" && value.trim() === "")) {
            setErrors((errors) => {
                return { ...errors, [field]: "*Campo obrigatório" };
            });
            return false;
        } else if (field === "phone" && value.length < 14) {
            setErrors((errors) => {
                return { ...errors, [field]: "*Telefone inválido: O número deve ter no mínimo um DDD mais 8 dígitos" };
            });
            return false;
        } else if (field === "phone" && !possibleDDD.includes(parseInt(value.substring(1, 3)))) {
            setErrors((errors) => {
                return { ...errors, [field]: "*Telefone inválido: O DDD " + value.substring(1, 3) + " não é válido" };
            });
            return false;
        } else {
            setErrors((errors) => {
                return { ...errors, [field]: undefined };
            });
            return true;
        }
    };

    function formatPhoneInput(value) {
        return value
            .replace(/\D/g, "")
            .replace(/(\d{2})(\d)/, "($1) $2")
            .replace(/(\d{4})(\d)/, "$1-$2")
            .replace(/(\d{4})-(\d)(\d{4})/, "$1$2-$3")
            .replace(/(-\d{4})\d+?$/, "$1");
    }

    function handleForm(e) {
        e.preventDefault();
        let validate = true;
        let emailValid = validateEmail(email);

        const fields = ["fullName", "phone", "occupation"];
        fields.forEach((field) => {
            if (!isValidField(field, data[field])) validate = false;
        });
        if (emailValid && validate) {
            goNextStep({ data, email });
        }
    }

    return (
        <>
            <form onSubmit={handleForm}>
                <FormField>
                    <InputLabel htmlFor="fullName">Nome Completo</InputLabel>
                    <Input
                        id="fullName"
                        error={errors.fullName}
                        type="text"
                        onChange={(e) => {
                            setData({ ...data, fullName: e.target.value });
                            isValidField("fullName", e.target.value);
                        }}
                        value={data.fullName ? data.fullName : ""}
                    />
                    <FormError>{errors.fullName}</FormError>
                </FormField>

                <FormField>
                    <InputLabel htmlFor="email">E-mail</InputLabel>
                    <Input
                        id="email"
                        error={emailError !== false ? true : false}
                        type="email"
                        onChange={(e) => {
                            setEmail(e.target.value);
                            validateEmail(e.target.value);
                        }}
                        value={email}
                    />
                    <FormError>{emailError}</FormError>
                </FormField>

                <FormField>
                    <InputLabel htmlFor="phone">Celular/Whatsapp</InputLabel>
                    <Input
                        id="phone"
                        error={errors.phone}
                        type="text"
                        onChange={(e) => {
                            setData({ ...data, phone: formatPhoneInput(e.target.value) });
                            isValidField("phone", e.target.value);
                        }}
                        value={data.phone ? data.phone : ""}
                    />
                    <FormError>{errors.phone}</FormError>
                </FormField>

                <FormField>
                    <InputLabel htmlFor="occupation">Relaçao com o cursinho cadastrado:</InputLabel>
                    <Input
                        as="select"
                        arrow={true}
                        id="occupation"
                        error={errors.occupation}
                        onChange={(e) => {
                            setData({ ...data, occupation: e.target.value });
                            isValidField("occupation", e.target.value);
                        }}
                        value={data.occupation ? data.occupation : ""}
                    >
                        <option value=""></option>
                        <option value="Coordenador">Coordenador</option>
                        <option value="Professor">Professor</option>
                        <option value="Colabordor">Colaborador</option>
                        <option value="Aluno">Aluno</option>
                    </Input>
                </FormField>
                <SubmitBtn as="input" type="submit" value="Continuar" />
            </form>
        </>
    );
}

export default DadosPessoais;
