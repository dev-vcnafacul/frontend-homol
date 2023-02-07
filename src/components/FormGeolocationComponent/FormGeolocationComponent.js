import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import DadosPessoais from "./DadosPessoais";
import DadosCursinho from "./DadosCursinho";
import EnderecoCursinho from "./EnderecoCursinho";
import ContatosCursinho from "./ContatosCursinho";
import CanaisCursinho from "./CanaisCursinho";
import {
    Title,
    Wrap,
    Error,
    Success,
    SuccessIcon,
    LoginShortcut,
    SuccessDiv,
    Montserrat18,
    Montserrat16,
} from "./styles";
import successIconFile from "../../assets/icons/check-circle.svg";
import { Loading } from "../../styles/common";

function FormGeolocationComponent() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({});
    const [step, setStep] = useState(1);
    const userToken = useSelector((state) => state.auth.token);

    const [message, setMessage] = useState("");

    function goNextStep(newData) {
        const courseData = { ...data, ...newData };
        setData(courseData);
        //debugger;
        setMessage("");

        if (step === 5) {
            registerCourse(courseData);
        } else {
            setStep((step) => step + 1);
        }
    }

    function goBackStep(newData) {
        const courseData = { ...data, ...newData };
        setData(courseData);
        //debugger;
        setMessage("");

        setStep((step) => step - 1);
    }

    async function registerCourse(data) {
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
            complement: data.courseAddress,
            phone: data.coursePhone,
            whatsapp: data.courseWhatsapp,
            email: data.courseEmail,
            category: data.courseType,
            site: data.courseSite,
            linkedin: data.courseLinkedin,
            youtube: data.courseYoutube,
            facebook: data.courseFacebook,
            instagram: data.courseInstagram,
            twitter: data.courseTwitter,
            tiktok: data.courseTiktok,
            userFullName: data.fullName,
            userPhone: data.phone,
            userConnection: data.occupation,
            userEmail: data.email,
        };

        try {
            setLoading(true);
            console.log(course);
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/geolocations`, {
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
                if (errors[0]["rule"] === "required") {
                    setMessage("O campo " + errors[0]["field"] + " não pode estar vazio");
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
                    <Montserrat16>(*) Campo obrigatório</Montserrat16>
                    <DadosPessoais goNextStep={goNextStep} oldData={data} />
                </div>
            )}

            {step === 2 && (
                <div>
                    <Title>Dados do Cursinho</Title>
                    <Montserrat18>
                        Precisamos saber o maior número de informações possível sobre este cursinho.
                    </Montserrat18>
                    <Montserrat16>(*) Campo obrigatório</Montserrat16>
                    <DadosCursinho goNextStep={goNextStep} goBackStep={goBackStep} oldData={data} />
                </div>
            )}

            {step === 3 && (
                <div>
                    <Title>Endereço do Cursinho</Title>
                    <Montserrat16>(*) Campo obrigatório</Montserrat16>
                    <EnderecoCursinho goNextStep={goNextStep} goBackStep={goBackStep} oldData={data} />
                </div>
            )}

            {step === 4 && (
                <div>
                    <Title>Contatos do Cursinho</Title>
                    <Montserrat16>(*) Campo obrigatório</Montserrat16>
                    <ContatosCursinho goNextStep={goNextStep} goBackStep={goBackStep} oldData={data} />
                </div>
            )}
            {step === 5 && (
                <div>
                    <Title>Canais digitais de contato</Title>
                    <Montserrat18>
                        Gostariamos de saber em quais redes sociais o cursinho já é divulgado. Você poderia colocar o
                        link?
                    </Montserrat18>
                    <Montserrat16>(*) Campo obrigatório</Montserrat16>
                    <Error>{message}</Error>
                    <CanaisCursinho goNextStep={goNextStep} goBackStep={goBackStep} oldData={data} />
                </div>
            )}
            {step === 6 && (
                <SuccessDiv>
                    <SuccessIcon src={successIconFile}></SuccessIcon>
                    <Title>Cadastro de cursinho concluído</Title>
                    <Success>
                        {"O cadastro do cursinho foi realizado com sucesso!"}
                        <br /> <br />
                        {
                            "Nossa equipe estará verificando as informações e liberando o cadastro para aparecer no mapa. Em caso de dúvidas entraremos em contato pelos canais que disponibilizou no começo do formulário."
                        }
                    </Success>
                    <LoginShortcut
                        onClick={() => {
                            window.location.reload();
                        }}
                    >
                        Cadastre um novo cursinho
                    </LoginShortcut>
                </SuccessDiv>
            )}
        </Wrap>
    );
}

export default FormGeolocationComponent;
