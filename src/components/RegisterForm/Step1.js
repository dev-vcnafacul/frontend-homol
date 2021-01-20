import { useState } from "react";

import { LOGIN_PATH } from "../../routing/paths";

import { Input, InputLabel, FormField, ToggleVisibility, FormError } from "../atoms";
import { Description, SubmitBtn, LinkLogin, PasswordSteps, StepsWrap, Step } from "./styles";

function Step1({ goNextStep }) {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState({
        error: false,
        uppercaseLetter: false,
        lowercaseLetter: false,
        specialCaracteres: false,
        length: false,
    });
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [passwordConfirmError, setPasswordConfirmError] = useState(false);
    const [passwordConfirmVisible, setPasswordConfirmVisible] = useState(false);

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

    const validatePassword = (password) => {
        function validateUppercaseLetter() {
            let uppercaseLetterRegex = /[A-Z]/g;
            if (uppercaseLetterRegex.test(String(password))) {
                return true;
            } else {
                return false;
            }
        }

        function validateLowercaseLetter() {
            let lowercaseLetterRegex = /[a-z]/g;
            if (lowercaseLetterRegex.test(String(password))) {
                return true;
            } else {
                return false;
            }
        }

        function validateSpecialCaracteres() {
            let specialCaracteresRegex = /[!@#$%^&*(),.?":{}|<>]/g;
            if (specialCaracteresRegex.test(String(password))) {
                return true;
            } else {
                return false;
            }
        }

        function validateLength() {
            if (password.trim().length >= 8) {
                return true;
            } else {
                return false;
            }
        }

        if (validateUppercaseLetter() && validateLowercaseLetter() && validateSpecialCaracteres() && validateLength()) {
            setPasswordError({
                error: false,
                uppercaseLetter: validateUppercaseLetter(),
                lowercaseLetter: validateLowercaseLetter(),
                specialCaracteres: validateSpecialCaracteres(),
                length: validateLength(),
            });
            return true;
        } else {
            setPasswordError({
                error: true,
                uppercaseLetter: validateUppercaseLetter(),
                lowercaseLetter: validateLowercaseLetter(),
                specialCaracteres: validateSpecialCaracteres(),
                length: validateLength(),
            });
            return false;
        }
    };

    const confirmPassword = (password, passwordConfirm) => {
        if (passwordConfirm.trim().length >= 8 && password.trim() === passwordConfirm.trim()) {
            setPasswordConfirmError(false);
            return true;
        } else {
            setPasswordConfirmError(true);
            return false;
        }
    };

    function handleForm(e) {
        e.preventDefault();

        let emailValid = validateEmail(email);
        let passwordValid = validatePassword(password);
        let passwordConfirmValid = confirmPassword(password, passwordConfirm);

        if (emailValid && passwordValid && passwordConfirmValid) {
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
                <FormField>
                    <InputLabel htmlFor="password">Senha</InputLabel>
                    <Input
                        id="password"
                        error={passwordError.error !== false ? true : false}
                        type={passwordVisible === true ? "text" : "password"}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            validatePassword(e.target.value);
                        }}
                        value={password}
                    />
                    <ToggleVisibility visible={passwordVisible} onClick={() => setPasswordVisible(!passwordVisible)} />
                </FormField>
                <PasswordSteps>
                    <p>Sua senha deve conter:</p>
                    <StepsWrap>
                        <Step valid={passwordError.uppercaseLetter}>Letra Maiúscula</Step>
                        <Step valid={passwordError.lowercaseLetter}>Letra Minúscula</Step>
                        <Step valid={passwordError.specialCaracteres}>Caractere Especial</Step>
                        <Step valid={passwordError.length}>Pelo menos 8 Caracteres</Step>
                    </StepsWrap>
                </PasswordSteps>
                <FormField>
                    <InputLabel htmlFor="password">Confirmar senha</InputLabel>
                    <Input
                        id="passwordConfirm"
                        error={passwordConfirmError !== false ? true : false}
                        type={passwordConfirmVisible === true ? "text" : "password"}
                        onChange={(e) => {
                            setPasswordConfirm(e.target.value);
                            confirmPassword(password, e.target.value);
                        }}
                        value={passwordConfirm}
                    />
                    <ToggleVisibility
                        visible={passwordConfirmVisible}
                        onClick={() => setPasswordConfirmVisible(!passwordConfirmVisible)}
                    />
                </FormField>
                <SubmitBtn as="input" type="submit" value="Continuar" />
            </form>
            <Description>
                Você já tem conta? Faça <LinkLogin to={LOGIN_PATH}>Login</LinkLogin>
            </Description>
        </>
    );
}

export default Step1;
