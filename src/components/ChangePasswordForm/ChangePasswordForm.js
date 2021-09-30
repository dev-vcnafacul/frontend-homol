import { useState } from "react";
import { useHistory } from "react-router-dom";
import { SubmitButton, Error } from "./styles";
import PasswordForm from "components/PasswordForm";
import { API_URL } from "../../constants";

function ChangePasswordForm({ userToken, className, resetCallback }) {
    const [message, setMessage] = useState();
    const [password, setPassword] = useState();
    async function changePassword(event) {
        event.preventDefault();
        const payload = {
            token: userToken,
            password: password,
        };

        try {
            const response = await fetch(`${API_URL}/patchme`, {
                method: "PUT",
                headers: { "Content-Type": "application/json", Authorization: `Bearer ${userToken}` },
                body: JSON.stringify(payload),
            });
            const responsePayload = await response.json();
            const errors = responsePayload["errors"];
            if (response.status === 200 || response.status === 204) {
                setMessage("Senha alterada com sucesso! Redirecionando para a home em 5 segundos");
                setTimeout(() => {
                    window.location.reload();
                }, 5000);
            } else if (response.status === 422) {
                if (errors[0]["rule"] === "unique" && errors[0]["field"] === "email") {
                    setMessage("Esse e-mail já existe em nossa base de dados. Tente novamente!");
                }
            } else {
                setMessage("Ops, ocorreu um problema na requisição. Tente novamente!");
            }
        } catch {
            setMessage("Ops, ocorreu um problema na requisição. Tente novamente!");
        }
    }

    return (
        <form onSubmit={changePassword} noValidate className={className}>
            <Error>{message}</Error>
            <PasswordForm
                onChange={setPassword}
                passwordLabel="Nova Senha"
                passwordConfirmLabel="Confirmar Nova Senha"
            />
            <SubmitButton as="button" type="submit">
                Salvar alterações
            </SubmitButton>
        </form>
    );
}

export default ChangePasswordForm;
