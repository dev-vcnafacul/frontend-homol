import { Title, SubmitBtn, Wrap, Error } from "./styles";
import { useState } from "react";
import { API_URL } from "../../constants";
import { Loading } from "../../styles/common";
import PasswordForm from "../PasswordForm";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

function ResetPasswordForm() {
    const location = useLocation();
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState();
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function resetPassword(event) {
        event.preventDefault();
        const params = new URLSearchParams(location.search);
        const token = params.get("token");

        if (password !== "") {
            const data = { token, password };
            try {
                setLoading(true);
                const response = await fetch(`${API_URL}/reset`, {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                });

                if ((response.status === 204) | (response.status === 200)) {
                    setTimeout(() => {
                        history.push("/login");
                    }, 5000);
                    let timer = 5;
                    window.setInterval(() => {
                        setMessage("Senha alterada com sucesso. Redirecionando para o login em " + timer + "segundos!");
                        timer--;
                    }, 1000);
                } else if (response.status === 400) {
                    setMessage("Link de redefinição de senha expirou. Tente novamente!");
                } else {
                    setMessage("Link de redefinição de senha inválido. Tente novamente!");
                }
            } catch {
                setMessage("Ops, ocorreu um problema na requisição. Tente novamente!");
            } finally {
                setLoading(false);
            }
        }
    }

    return (
        <Wrap>
            {loading && <Loading />}
            <Title>Redefinição de Senha</Title>
            <Error>{message}</Error>
            <form onSubmit={resetPassword} noValidate>
                <PasswordForm onChange={setPassword} />
                <SubmitBtn as="input" type="submit" value="Enviar" />
            </form>
        </Wrap>
    );
}

export default ResetPasswordForm;
