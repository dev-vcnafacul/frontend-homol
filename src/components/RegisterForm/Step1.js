import { useState } from "react";

import { LOGIN_PATH } from "../../routing/paths";

import { Input, InputLabel, FormField, FormError } from "../atoms";
import { Description, SubmitBtn, LinkLogin } from "./styles";
import PasswordForm from "../PasswordForm";

function Step1({ goNextStep }) {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [password, setPassword] = useState();

    const validateEmail = (email) => {
        let regex = /^[\w-s.]+@([\w-]+.)+[\w-]{2,4}$/;
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

    function handleForm(e) {
        e.preventDefault();

        let emailValid = validateEmail(email);

        if (emailValid && password) {
            goNextStep({ email, password });
        }
    }

    return (
        <>
            <form onSubmit={handleForm} noValidate>
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
                <PasswordForm onChange={setPassword} />
                <SubmitBtn as="input" type="submit" value="Continuar" />
            </form>
            <Description>
                Você já tem conta? Faça <LinkLogin to={LOGIN_PATH}>Login</LinkLogin>
            </Description>
        </>
    );
}

export default Step1;
