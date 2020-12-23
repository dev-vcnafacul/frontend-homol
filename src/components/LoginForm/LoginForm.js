import { Input, InputLabel, FormField } from "../atoms";
import { Title, Description, SubmitBtn, Wrap, ForgotPassword, SocialLogin } from "./styles";

function LoginForm() {
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
            <form>
                <FormField>
                    <InputLabel>E-mail</InputLabel>
                    <Input type="email" />
                </FormField>
                <FormField>
                    <InputLabel>Senha</InputLabel>
                    <Input type="password" />
                </FormField>
                <SubmitBtn as="input" type="submit" value="Entrar" />
            </form>
            <ForgotPassword href="#">Esqueci minha senha</ForgotPassword>
        </Wrap>
    );
}

export default LoginForm;
