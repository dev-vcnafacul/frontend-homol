import { useState } from "react";

import { Input, InputLabel, FormField, FormError } from "../atoms";
// import { CheckboxWrapper, CheckboxText } from "./styles";
import { SubmitBtn } from "./styles";

import { validateEmail, isValidField, formatPhoneInput } from "../../utils/ValidateContato";

function DadosPessoais({ goNextStep, oldData }) {
    const [emailError, setEmailError] = useState(false);
    const [data, setData] = useState(oldData);
    const [errors, setErrors] = useState({});

    function handleForm(e) {
        e.preventDefault();
        let validate = true;
        let emailValid = validateEmail(data.email, setEmailError);

        const fields = ["fullName", "phone", "occupation"];
        fields.forEach((field) => {
            if (!isValidField(field, data[field], setErrors)) validate = false;
        });
        if (emailValid && validate) {
            goNextStep(data);
        }
    }

    return (
        <>
            <form onSubmit={handleForm}>
                <FormField>
                    <InputLabel htmlFor="fullName">Nome Completo*</InputLabel>
                    <Input
                        id="fullName"
                        error={errors.fullName}
                        type="text"
                        onChange={(e) => {
                            setData({ ...data, fullName: e.target.value });
                            isValidField("fullName", e.target.value, setErrors);
                        }}
                        value={data.fullName ? data.fullName : ""}
                    />
                    <FormError>{errors.fullName}</FormError>
                </FormField>

                <FormField>
                    <InputLabel htmlFor="email">E-mail*</InputLabel>
                    <Input
                        id="email"
                        error={emailError !== false ? true : false}
                        type="email"
                        onChange={(e) => {
                            setData({ ...data, email: e.target.value });
                            validateEmail(e.target.value, setEmailError);
                        }}
                        value={data.email ? data.email : ""}
                    />
                    <FormError>{emailError}</FormError>
                </FormField>

                <FormField>
                    <InputLabel htmlFor="phone">Celular/Whatsapp*</InputLabel>
                    <Input
                        id="phone"
                        error={errors.phone}
                        type="text"
                        onChange={(e) => {
                            setData({ ...data, phone: formatPhoneInput(e.target.value) });
                            isValidField("phone", e.target.value, setErrors);
                        }}
                        value={data.phone ? data.phone : ""}
                    />
                    <FormError>{errors.phone}</FormError>
                </FormField>

                <FormField>
                    <InputLabel htmlFor="occupation">Relaçao com o cursinho cadastrado:*</InputLabel>
                    <Input
                        as="select"
                        arrow={true}
                        id="occupation"
                        error={errors.occupation}
                        onChange={(e) => {
                            setData({ ...data, occupation: e.target.value });
                            isValidField("occupation", e.target.value, setErrors);
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
