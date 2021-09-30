import { Input, InputLabel, FormField } from "../atoms";
import { Title, Description, SubmitBtn, Wrap, Error } from "./styles";
import { useState } from "react";
import { API_URL } from "../../constants";
import { Loading } from "../../styles/common";

function ForgotPasswordForm() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState();
    const [loading, setLoading] = useState(false);

    async function requestPassword(event) {
        event.preventDefault();

        const data = { email };

        try {
            setLoading(true);
            const response = await fetch(`${API_URL}/esqueci-minha-senha`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if ((response.status === 204) | (response.status === 200)) {
                setMessage(
                    "Enviamos um e-mail com instruções para redefinição da senha. Verifique sua caixa de entrada, por favor."
                );
            } else if (response.status === 404) {
                setMessage("E-mail não encontrado na base de usuários.");
            } else {
                setMessage("Ops, ocorreu um problema na requisição. Tente novamente!");
            }
        } catch {
            setMessage("Ops, ocorreu um problema na requisição. Tente novamente!");
        } finally {
            setLoading(false);
        }
    }

    return (
        <Wrap>
            {loading && <Loading />}
            <Title>Esqueci minha senha</Title>
            <Description>
                Digite seu e-mail de cadastro abaixo e clique em enviar. Nós lhe enviaremos um e-mail com link para
                recadastrar sua senha.
            </Description>
            <Error>{message}</Error>
            <form onSubmit={requestPassword} noValidate>
                <FormField>
                    <InputLabel>E-mail</InputLabel>
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
                </FormField>
                <SubmitBtn as="input" type="submit" value="Enviar" />
            </form>
        </Wrap>
    );
}

export default ForgotPasswordForm;
