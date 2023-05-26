import { useState } from "react";
import { FORGOT_PASSWORD_PATH } from "../../routing/paths";
import { doAuth } from "../../store/actions/auth/auth";
import { useFetch } from "../../store/utils";
import { Loading } from "../../styles/common";
import { FormField, Input, InputLabel, ToggleVisibility } from "../atoms";
import { Description, Error, ForgotPassword, SubmitBtn, Title, Wrap } from "./styles";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);

    const { fetchData, error, isLoading } = useFetch((state) => state.auth, doAuth(email, password));

    function handleLogin(event) {
        event.preventDefault();
        fetchData();
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
