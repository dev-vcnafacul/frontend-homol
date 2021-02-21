import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import { Title, Wrap, Error, Success } from "./styles";
import { Loading } from "../../styles/common";
import { API_URL } from "../../constants";

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
            first_name: data.firstName,
            last_name: data.lastName,
            gender: data.gender,
            birthday: `${birthdayParts[2]}-${birthdayParts[1]}-${birthdayParts[0]}`,
            phone: data.phone,
            state: data.state,
            city: data.city,
            is_teacher: false,
        };

        try {
            setLoading(true);
            const response = await fetch(`${API_URL}/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user),
            });

            if (response.status === 200 || response.status === 204) {
                setStep((step) => step + 1);
            } else if (response.status === 400) {
                setMessage("E-mail já existente na base.");
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
            <Title>Cadastre-se</Title>
            <Error>{message}</Error>
            {step === 1 && <Step1 goNextStep={goNextStep} />}
            {step === 2 && <Step2 goNextStep={goNextStep} />}
            {step === 3 && (
                <Success>
                    Parabéns! Cadastro realizado com sucesso. Por favor, faça o seu login para acessar a plataforma.
                </Success>
            )}
        </Wrap>
    );
}

export default RegisterForm;
