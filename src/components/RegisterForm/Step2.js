import { useState } from "react";

import { Input, InputLabel, FormField, FormError } from "../atoms";
import { CheckboxWrapper, CheckboxText } from "./styles";
import { SubmitBtn } from "./styles";

function Step2({ goNextStep }) {
    const [data, setData] = useState({});
    const [errors, setErrors] = useState({});

    const invalidDate = (value) => {
        if (value.length < 10) {
            return "Escreva a data no formato dd/mm/aaaa";
        }
        const day = value.substring(0, 2);
        const month = value.substring(3, 5);
        const year = value.substring(6, 10);
        if (parseInt(month) > 12) {
            return "O mês " + month + " não é válido. O mês deve estar entre 01 e 12";
        }
        if (parseInt(year) < 1900) {
            return "O ano " + year + " não é válido. O ano deve ser maior que 1900";
        }
        const testDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
        if (
            isNaN(testDate.getTime()) ||
            testDate.getDate() !== parseInt(day) ||
            testDate.getMonth() !== parseInt(month) - 1 ||
            testDate.getFullYear() !== parseInt(year)
        ) {
            return "O dia " + day + " não parece ser válido";
        }
        if (testDate > new Date()) {
            return "A data inserida é no futuro";
        }
        return null;
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
        } else if (field === "birthday" && invalidDate(value)) {
            setErrors((errors) => {
                return { ...errors, [field]: "*Data inválida: " + invalidDate(value) };
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

    function formatDateInput(value) {
        return value
            .replace(/\D/g, "")
            .replace(/(\d{2})(\d)/, "$1/$2")
            .replace(/(\d{2})(\d)/, "$1/$2")
            .replace(/(\d{4})\d+?$/, "$1");
    }

    function handleForm(e) {
        e.preventDefault();
        let validate = true;
        const fields = ["firstName", "lastName", "gender", "birthday", "phone", "state", "city", "lgpd"];
        fields.forEach((field) => {
            if (!isValidField(field, data[field])) validate = false;
        });

        if (validate) goNextStep(data);
    }

    return (
        <form onSubmit={handleForm} noValidate>
            <FormField>
                <InputLabel htmlFor="firstName">Nome</InputLabel>
                <Input
                    id="firstName"
                    error={errors.firstName}
                    type="text"
                    onChange={(e) => {
                        setData({ ...data, firstName: e.target.value });
                        isValidField("firstName", e.target.value);
                    }}
                    value={data.firstName ? data.firstName : ""}
                />
                <FormError>{errors.firstName}</FormError>
            </FormField>
            <FormField>
                <InputLabel htmlFor="lastName">Sobrenome</InputLabel>
                <Input
                    id="lastName"
                    error={errors.lastName}
                    type="text"
                    onChange={(e) => {
                        setData({ ...data, lastName: e.target.value });
                        isValidField("lastName", e.target.value);
                    }}
                    value={data.lastName ? data.lastName : ""}
                />
                <FormError>{errors.lastName}</FormError>
            </FormField>
            <FormField>
                <InputLabel htmlFor="gender">Gênero</InputLabel>
                <Input
                    as="select"
                    arrow={true}
                    id="gender"
                    error={errors.gender}
                    onChange={(e) => {
                        setData({ ...data, gender: e.target.value });
                        isValidField("gender", e.target.value);
                    }}
                    value={data.gender ? data.gender : ""}
                >
                    <option value=""></option>
                    <option value="Female">Feminino</option>
                    <option value="Male">Masculino</option>
                    <option value="Others">Outro</option>
                </Input>
                <FormError>{errors.gender}</FormError>
            </FormField>
            <FormField>
                <InputLabel htmlFor="birthday">Data de Nascimento</InputLabel>
                <Input
                    id="birthday"
                    error={errors.phone}
                    type="text"
                    onChange={(e) => {
                        setData({ ...data, birthday: formatDateInput(e.target.value) });
                        isValidField("birthday", e.target.value);
                    }}
                    value={data.birthday ? data.birthday : ""}
                />
                <FormError>{errors.birthday}</FormError>
            </FormField>
            <FormField>
                <InputLabel htmlFor="phone">Telefone</InputLabel>
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
                <InputLabel htmlFor="state">Estado</InputLabel>
                <Input
                    as="select"
                    arrow={true}
                    id="state"
                    error={errors.state}
                    onChange={(e) => {
                        setData({ ...data, state: e.target.value });
                        isValidField("state", e.target.value);
                    }}
                    value={data.state ? data.state : ""}
                >
                    <option value=""></option>
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                </Input>
                <FormError>{errors.state}</FormError>
            </FormField>
            <FormField>
                <InputLabel htmlFor="city">Cidade</InputLabel>
                <Input
                    id="city"
                    error={errors.city}
                    type="text"
                    onChange={(e) => {
                        setData({ ...data, city: e.target.value });
                        isValidField("city", e.target.value);
                    }}
                    value={data.city ? data.city : ""}
                />
                <FormError>{errors.city}</FormError>
            </FormField>
            <CheckboxWrapper
                onChange={(value) => {
                    setData({ ...data, lgpd: value });
                }}
            >
                <>
                    <CheckboxText>
                        Eu li e aceito os{" "}
                        <a onClick={(e) => e.stopPropagation()} href="/Termos%20de%20Uso.pdf" target="_blank">
                            termos de uso
                        </a>{" "}
                        e{" "}
                        <a
                            onClick={(e) => e.stopPropagation()}
                            href="/Pol%C3%ADtica%20de%20Privacidade.pdf"
                            target="_blank"
                        >
                            políticas de privacidade
                        </a>
                    </CheckboxText>
                    <FormError>{errors.lgpd}</FormError>
                </>
            </CheckboxWrapper>

            <SubmitBtn as="input" type="submit" value="Cadastrar" />
        </form>
    );
}

export default Step2;
