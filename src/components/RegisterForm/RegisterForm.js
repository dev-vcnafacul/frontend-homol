import { useState } from "react";
import { useFetch } from "../../store/utils";
import { doAuth } from "../../store/actions/auth";

import { Input, InputLabel, FormField } from "../atoms";
import {
    Title,
    Description,
    SubmitBtn,
    Wrap,
    LinkLogin,
    SocialLogin,
    Error,
    PasswordSteps,
    StepsWrap,
    Step,
} from "./styles";

function RegisterForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const [data, fetchData, isLoading, error] = useFetch((state) => state.auth, doAuth(email, password));

    function handleLogin(e) {
        e.preventDefault();
        if (email !== "" && password !== "") {
            fetchData();
        }
    }

    return (
        <Wrap>
            <Title>Cadastre-se</Title>
            <form onSubmit={handleLogin}>
                <FormField>
                    <InputLabel htmlFor="email">E-mail</InputLabel>
                    <Input
                        id="email"
                        error={error !== false ? true : false}
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </FormField>
                <FormField>
                    <InputLabel htmlFor="password">Senha</InputLabel>
                    <Input
                        id="password"
                        error={error !== false ? true : false}
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </FormField>
                <PasswordSteps>
                    <p>Sua senha deve conter:</p>
                    <StepsWrap>
                        <Step>Letra Maiúscula</Step>
                        <Step>Letra Minúscula</Step>
                        <Step>Caractere Especial</Step>
                        <Step>Pelo menos 8 Caracteres</Step>
                    </StepsWrap>
                </PasswordSteps>
                <FormField>
                    <InputLabel htmlFor="password">Confirmar senha</InputLabel>
                    <Input
                        id="passwordConfirm"
                        error={error !== false ? true : false}
                        type="password"
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                        value={passwordConfirm}
                    />
                </FormField>
                <SubmitBtn as="input" type="submit" value="Continuar" />
            </form>
            <Description>ou</Description>
            <SocialLogin type="facebook" href="#">
                Continuar com Facebook
            </SocialLogin>
            <SocialLogin type="google" href="#">
                Continuar com Google
            </SocialLogin>
            <Description>
                Você já tem conta? Faça <LinkLogin href="#">Login</LinkLogin>
            </Description>

            {error !== false && (
                <FormField>
                    <Error>Ops! Verifique os campos e tente novamente.</Error>
                </FormField>
            )}
        </Wrap>
    );
}

export default RegisterForm;
