import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import DadosPessoais from "./DadosPessoais";
import DadosCursinho from "./DadosCursinho";
import EnderecoCursinho from "./EnderecoCursinho";
import ContatosCursinho from "./ContatosCursinho";
import CanaisCursinho from "./CanaisCursinho";
import { Title, Wrap, Success, SuccessIcon, LoginShortcut, SuccessDiv, Montserrat18 } from "./styles";
// import { Title, Wrap, Error, Success, SuccessIcon, LoginShortcut, SuccessDiv, Montserrat18 } from "./styles";
import successIconFile from "../../assets/icons/check-circle.svg";
import { Loading } from "../../styles/common";
import { API_URL } from "../../constants";

function FormGeolocationComponent() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({});
    const [step, setStep] = useState(1);
    const userToken = useSelector((state) => state.auth.token);

    const [message, setMessage] = useState("");

    function goNextStep(newData) {
        const userData = { ...data, ...newData };
        setData(userData);
        setMessage("");

        if (step === 5) {
            registerUser(userData);
        } else {
            setStep((step) => step + 1);
        }
    }

    async function registerUser(data) {
        const course = {
            latitude: data.latitude,
            longitude: data.longitude,
            name: data.courseName,
            cep: data.cep,
            state: data.courseState,
            city: data.courseCity,
            neighborhood: data.courseNeighborhood,
            street: data.courseStreet,
            number: data.courseNumber,
            // "complement": schema.string.optional(),
            phone: data.data.coursePhone,
            // "whatsapp": schema.string.optional(),
            email: data.email,
            category: data.courseType,
            site: data.courseSite,
            // "linkedin": schema.string.optional(),
            youtube: data.courseYoutube,
            // "facebook": schema.string.optional(),
            instagram: data.courseInstagram,
            // "twitter": schema.string.optional(),
            // "tiktok": schema.string.optional()
        };

        try {
            setLoading(true);
            const response = await fetch(`${API_URL}/geolocations`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${userToken}`,
                },
                body: JSON.stringify(course),
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

    useEffect(() => {
        async function userLogin(isLogged) {
            if (isLogged) {
                setStep(2);
            }
        }
        userLogin(!!userToken); //userToken != undefined
    }, [userToken]);

    return (
        <Wrap>
            {loading && <Loading />}

            {step === 1 && (
                <div>
                    <Title>Dados Pessoais</Title>
                    <Montserrat18>
                        Nos conte um pouco sobre você e sua relação com o cursinho que está cadastrando
                    </Montserrat18>
                    <DadosPessoais goNextStep={goNextStep} />
                </div>
            )}

            {step === 2 && (
                <div>
                    <Title>Dados do Cursinho</Title>
                    <Montserrat18>
                        Precisamos saber o maior número de informações possível sobre este cursinho.
                    </Montserrat18>
                    <DadosCursinho goNextStep={goNextStep} />
                </div>
            )}

            {step === 3 && (
                <div>
                    <Title>Endereço do Cursinho</Title>
                    <EnderecoCursinho goNextStep={goNextStep} />
                </div>
            )}

            {step === 4 && (
                <div>
                    <Title>Contatos do Cursinho</Title>
                    <ContatosCursinho goNextStep={goNextStep} />
                </div>
            )}
            {step === 5 && (
                <div>
                    <Title>Canais digitais de contato</Title>
                    <Montserrat18>
                        Gostariamos de saber em quais redes sociais o cursinho já é divulgado. Você poderia colocar o
                        link?
                    </Montserrat18>
                    <CanaisCursinho goNextStep={goNextStep} />
                </div>
            )}
            {step === 6 && (
                <SuccessDiv>
                    <SuccessIcon src={successIconFile}></SuccessIcon>
                    <Title>Cadastro de cursinho concluído</Title>
                    <Success>
                        {"O pré-cadastro foi realizado com sucesso!"}
                        <br /> <br />
                        {"Logo entraremos em contato."}
                        {" Estamos construindo a nossa plataforma! Aguarde!"}
                    </Success>
                    <LoginShortcut target="_blank" href="https://www.instagram.com/vcnafacul/">
                        Veja nossos posts no instagram!
                    </LoginShortcut>
                </SuccessDiv>
            )}
        </Wrap>
    );
}

export default FormGeolocationComponent;
