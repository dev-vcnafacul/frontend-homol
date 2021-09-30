import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import { Title, Wrap, Error, Success, SuccessIcon, LoginShortcut, SuccessDiv } from "./styles";
import { Loading } from "../../styles/common";
import { API_URL } from "../../constants";
import successIconFile from "../../assets/icons/check-circle.svg";

function RegisterForm({ className }) {
    const [data, setData] = useState({});
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    function goNextStep(newData) {
        const userData = { ...data, ...newData };
        setData(userData);
        setMessage("");
        if (step === 2) {
            registerUser(userData);
        } else {
            setStep((step) => step + 1);
        }
    }

    async function registerUser(data) {
        const birthdayParts = data.birthday.split("/");
        const user = {
            email: data.email,
            password: data.password,
            password_confirmation: data.password,
            nome: data.firstName,
            sobrenome: data.lastName,
            genero: data.gender,
            nascimento: `${birthdayParts[2]}-${birthdayParts[1]}-${birthdayParts[0]}`,
            telefone: data.phone,
            estado: data.state,
            cidade: data.city,
            professor: false,
        };

        try {
            setLoading(true);
            const response = await fetch(`${API_URL}/cadastro`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user),
            });
            const responsePayload = await response.json();
            const errors = responsePayload["errors"];
            if (response.status === 200 || response.status === 204) {
                setStep((step) => step + 1);
            } else if (response.status === 422) {
                if (errors[0]["rule"] === "unique" && errors[0]["field"] === "email") {
                    setMessage("Esse e-mail já existe em nossa base de dados. Tente novamente!");
                }
                if (errors[0]["rule"] === "required") {
                    setMessage("O campo " + errors[0]["field"] + " não pode estar vazio");
                }
                if (errors[0]["rule"] === "confirmed" && errors[0]["field"] === "password_confirmation") {
                    setMessage("A senha e a confirmação de senha não batem!");
                }
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
        <Wrap className={className}>
            {loading && <Loading />}
            {step === 1 && (
                <div>
                    <Title>Cadastre-se</Title>
                    <Error>{message}</Error>
                    <Step1 goNextStep={goNextStep} />
                </div>
            )}
            {step === 2 && (
                <div>
                    <Title>Cadastre-se</Title>
                    <Error>{message}</Error>
                    <Step2 goNextStep={goNextStep} />
                </div>
            )}
            {step === 3 && (
                <SuccessDiv>
                    <SuccessIcon src={successIconFile}></SuccessIcon>
                    <Title>Seja bem-vinde ao Você na Facul!</Title>
                    <Success>
                        {
                            "Seu pré-cadastro foi realizado com sucesso!\nQueremos te acompanhar na sua jornada de estudos em direção a Universidade.\nEstamos construindo a nossa plataforma! Aguarde!\nAssim que a primeira funcionalidade estiver pronta nós vamos te avisar para que você seja um dos primeiros a testá-la! =]"
                        }
                    </Success>
                    <LoginShortcut target="_blank" href="https://www.instagram.com/vcnafacul/">
                        Veja nossos posts no instagram!
                    </LoginShortcut>
                </SuccessDiv>
            )}
        </Wrap>
    );
}

export default RegisterForm;
