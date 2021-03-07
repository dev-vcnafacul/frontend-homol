import { useState } from "react";
import { Input, InputLabel, FormField, ToggleVisibility, FormError } from "../atoms";
import { PasswordSteps, StepsWrap, Step } from "./styles";

function PasswordForm({ onChange, className }) {
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
            if (!passwordConfirmError) {
                onChange(password);
            }
        } else {
            setPasswordError({
                error: true,
                uppercaseLetter: validateUppercaseLetter(),
                lowercaseLetter: validateLowercaseLetter(),
                specialCaracteres: validateSpecialCaracteres(),
                length: validateLength(),
            });
            onChange("");
        }
    };

    const confirmPassword = (password, passwordConfirm) => {
        if (password.trim() === passwordConfirm.trim()) {
            setPasswordConfirmError(false);
            if (!passwordError.error) {
                onChange(password);
            }
        } else {
            setPasswordConfirmError(true);
            onChange("");
        }
    };

    return (
        <div className={className}>
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
                {passwordConfirmError && <FormError>As senhas não conferem.</FormError>}
            </FormField>
        </div>
    );
}

export default PasswordForm;
