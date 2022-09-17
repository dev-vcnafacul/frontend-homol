import { useState } from "react";

import { Input, InputLabel, FormField, FormError } from "../atoms";
import { SubmitBtn, Footer } from "./styles";

function ContatosCursinho({ goNextStep, goBackStep }) {
    const [data, setData] = useState({});
    const [errors, setErrors] = useState({});
    const [courseEmail, setCourseEmail] = useState("");
    const [emailError, setEmailError] = useState(false);

    const validateEmail = (email) => {
        let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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

    function formatPhoneInput(value) {
        return value
            .replace(/\D/g, "")
            .replace(/(\d{2})(\d)/, "($1) $2")
            .replace(/(\d{4})(\d)/, "$1-$2")
            .replace(/(\d{4})-(\d)(\d{4})/, "$1$2-$3")
            .replace(/(-\d{4})\d+?$/, "$1");
    }

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
        } else if (field === "coursePhone" && value.length < 14) {
            setErrors((errors) => {
                return { ...errors, [field]: "*Telefone inválido: O número deve ter no mínimo um DDD mais 8 dígitos" };
            });
            return false;
        } else if (field === "coursePhone" && !possibleDDD.includes(parseInt(value.substring(1, 3)))) {
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

    function handleForm(e) {
        e.preventDefault();

        let emailValid = validateEmail(courseEmail);

        let validate = true;
        const fields = ["coursePhone"];
        fields.forEach((field) => {
            if (!isValidField(field, data[field])) validate = false;
        });
        if (emailValid && validate) {
            goNextStep({ courseEmail, data });
        }
    }

    function handleBack(e) {
        e.preventDefault();
        goBackStep(data);
    }

    // function componentDidMount() {
    //     checkInputValues();
    //      Eu estava tentando uma solução para recuperar os dados da variável data (FormGeolocationComponent.js)
    //      e repassar como um novo value para cada input, mas não deu certo.
    // }
    // function checkInputValues(e) {
    //      debugger;
    //     if (data.coursePhone) {
    //         debugger;
    //     }
    // }

    return (
        <>
            <form onSubmit={handleForm}>
                <FormField>
                    <InputLabel htmlFor="coursePhone">Telefone</InputLabel>
                    <Input
                        // onLoad={() => componentDidMount()}
                        id="coursePhone"
                        error={errors.coursePhone}
                        type="text"
                        onChange={(e) => {
                            setData({ ...data, coursePhone: formatPhoneInput(e.target.value) });
                            isValidField("coursePhone", e.target.value);
                        }}
                        value={data.coursePhone ? data.coursePhone : ""}
                    />
                    <FormError>{errors.coursePhone}</FormError>
                </FormField>

                <FormField>
                    <InputLabel htmlFor="courseWhatsapp">Whatsapp</InputLabel>
                    <Input
                        id="courseWhatsapp"
                        error={errors.courseWhatsapp}
                        type="text"
                        onChange={(e) => {
                            setData({ ...data, courseWhatsapp: formatPhoneInput(e.target.value) });
                        }}
                        value={data.courseWhatsapp ? data.courseWhatsapp : ""}
                    />
                    <FormError>{errors.courseWhatsapp}</FormError>
                </FormField>

                <FormField>
                    <InputLabel htmlFor="courseEmail">E-mail</InputLabel>
                    <Input
                        id="courseEmail"
                        error={emailError !== false ? true : false}
                        type="email"
                        onChange={(e) => {
                            setCourseEmail(e.target.value);
                            validateEmail(e.target.value);
                        }}
                        value={courseEmail}
                    />
                    <FormError>{emailError}</FormError>
                </FormField>

                <Footer>
                    <SubmitBtn as="input" value="Voltar" onClick={handleBack} />
                    <SubmitBtn as="input" type="submit" value="Continuar" />
                </Footer>
            </form>
        </>
    );
}

export default ContatosCursinho;
