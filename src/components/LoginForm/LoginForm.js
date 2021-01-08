import { useState } from "react";
import { useFetch } from "../../store/utils";
import { doAuth } from "../../store/actions/auth";

import { FORGOT_PASSWORD_PATH } from "../../routing/paths";

import { Input, InputLabel, FormField, ToggleVisibility } from "../atoms";
import { Title, Description, SubmitBtn, Wrap, ForgotPassword, SocialLogin, Error } from "./styles";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);

    const { fetchData, error } = useFetch((state) => state.auth, doAuth(email, password));

    function handleLogin(e) {
        e.preventDefault();
        if (email !== "" && password !== "") {
            fetchData();
        }
    }

    return (
        <Wrap>
            <Title>Entre na sua conta</Title>
            <Description>Use sua rede social para se conectar</Description>
            <SocialLogin type="facebook" href="#">
                Facebook
            </SocialLogin>
            <SocialLogin type="google" href="#">
                Google
            </SocialLogin>
            <Description>Ou ingresse:</Description>
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
                        type={passwordVisible === true ? "text" : "password"}
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    <ToggleVisibility visible={passwordVisible} onClick={() => setPasswordVisible(!passwordVisible)} />
                </FormField>
                <SubmitBtn as="input" type="submit" value="Entrar" />
            </form>
            <ForgotPassword to={FORGOT_PASSWORD_PATH}>Esqueci minha senha</ForgotPassword>
            {error !== false && (
                <FormField>
                    <Error>Ops! Verifique os campos e tente novamente.</Error>
                </FormField>
            )}
        </Wrap>
    );
}

export default LoginForm;
