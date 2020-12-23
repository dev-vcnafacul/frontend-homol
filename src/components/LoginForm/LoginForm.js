import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doAuth } from "../../store/actions/auth";

import { Input, InputLabel, FormField } from "../atoms";
import { Title, Description, SubmitBtn, Wrap, ForgotPassword, SocialLogin } from "./styles";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const data = useSelector((state) => state.auth);

    function handleLogin(e) {
        e.preventDefault();
        dispatch(doAuth(email, password));
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
                    <InputLabel>E-mail</InputLabel>
                    <Input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                </FormField>
                <FormField>
                    <InputLabel>Senha</InputLabel>
                    <Input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                </FormField>
                <SubmitBtn as="input" type="submit" value="Entrar" />
            </form>
            <ForgotPassword href="#">Esqueci minha senha</ForgotPassword>
        </Wrap>
    );
}

export default LoginForm;
