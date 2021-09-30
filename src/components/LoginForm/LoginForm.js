import { useState } from "react";
import { useFetch } from "../../store/utils";
import { doAuth } from "../../store/actions/auth";

import { FORGOT_PASSWORD_PATH } from "../../routing/paths";

import { Input, InputLabel, FormField, ToggleVisibility } from "../atoms";
import { Title, Description, SubmitBtn, Wrap, ForgotPassword, Error } from "./styles";
import { Loading } from "../../styles/common";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);

    const { fetchData, error, isLoading } = useFetch((state) => state.auth, doAuth(email, password));

    function handleLogin(e) {
        e.preventDefault();
        fetchData();
        console.log("error trying to handle login", error);
    }

    return (
        <Wrap>
            {isLoading && <Loading />}
            <Title>Entre na sua conta</Title>
            <Description>Entre com seu e-mail e senha para acessar a plataforma</Description>
            {error && <Error>{error.message}</Error>}
            <form onSubmit={handleLogin} noValidate>
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
        </Wrap>
    );
}

export default LoginForm;
