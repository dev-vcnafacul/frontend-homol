import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Loading } from "../../styles/common";
import PasswordForm from "../PasswordForm";
import { Error, SubmitBtn, Title, Wrap } from "./styles";

function ResetPasswordForm() {
    const location = useLocation();
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState();
    const [loading, setLoading] = useState(false);
    const [temporizer, setTemporizer] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        return () => clearInterval(temporizer);
    }, [temporizer]);

    async function resetPassword(event) {
        event.preventDefault();
        const params = new URLSearchParams(location.search);
        const token = params.get("token");

        if (password !== "") {
            const data = { token, password };
            try {
                setLoading(true);
                const response = await fetch(`${process.env.REACT_APP_BASE_URL}/reset`, {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                });

                if ((response.status === 204) | (response.status === 200)) {
                    let timer = 5;
                    const intervalSetter = setInterval(() => {
                        setMessage(
                            "Senha alterada com sucesso. Redirecionando para o login em " + timer + " segundos!"
                        );
                        timer--;
                    }, 1000);
                    setTemporizer(intervalSetter);
                    setTimeout(() => {
                        navigate("/login");
                    }, 5000);
                } else if (response.status === 400) {
                    setMessage("Link de redefinição de senha expirou. Por favor, refaça o processo.");
                } else if (response.status === 404) {
                    setMessage(
                        "Houve um problema com o seu link de redefinição de senha. Por favor, refaça o processo."
                    );
                } else {
                    setMessage("Ops, ocorreu um problema na requisição. Tente novamente!");
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
