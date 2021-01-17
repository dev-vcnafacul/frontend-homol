import { Input, InputLabel, FormField } from "../atoms";
import { Title, Description, SubmitBtn, Wrap } from "./styles";

function ForgotPasswordForm() {
    return (
        <Wrap>
            <Title>Esqueci minha senha</Title>
            <Description>
                Digite seu e-mail de cadastro abaixo e clique em enviar. Nós lhe enviaremos um e-mail com link para
                recadastrar sua senha.
            </Description>
            <form>
                <FormField>
                    <InputLabel>E-mail</InputLabel>
                    <Input type="email" />
                </FormField>
                <SubmitBtn as="input" type="submit" value="Enviar" />
            </form>
        </Wrap>
    );
}

export default ForgotPasswordForm;
