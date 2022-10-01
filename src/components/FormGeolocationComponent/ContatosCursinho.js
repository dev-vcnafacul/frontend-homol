import { useState } from "react";

import { Input, InputLabel, FormField, FormError } from "../atoms";
import { SubmitBtn, Footer } from "./styles";

import { validateEmail, isValidField, formatPhoneInput } from "../../Utils/ValidateContato";

function ContatosCursinho({ goNextStep, goBackStep, oldData }) {
    const [data, setData] = useState(oldData);
    const [errors, setErrors] = useState({});
    const [emailError, setEmailError] = useState(false);

    function handleForm(e) {
        e.preventDefault();

        let emailValid = validateEmail(data.courseEmail, setEmailError);

        let validate = true;
        const fields = ["coursePhone"];
        fields.forEach((field) => {
            if (!isValidField(field, data[field], setErrors)) validate = false;
        });
        if (emailValid && validate) {
            goNextStep(data);
        }
    }

    function handleBack(e) {
        e.preventDefault();
        goBackStep(data);
    }

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
                            isValidField("coursePhone", e.target.value, setErrors);
                        }}
                        value={data.coursePhone ?? ""}
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
                        value={data.courseWhatsapp ?? ""}
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
                            //setCourseEmail(e.target.value);
                            setData({ ...data, courseEmail: e.target.value });
                            validateEmail(e.target.value, setEmailError);
                        }}
                        value={data.courseEmail ?? ""}
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
