import { useState } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosCursinho from "./DadosCursinho";
import EnderecoCursinho from "./EnderecoCursinho";
import ContatosCursinho from "./ContatosCursinho";
import CanaisCursinho from "./CanaisCursinho";
import { Title, Wrap, Error, Success, SuccessIcon, LoginShortcut, SuccessDiv, Montserrat18 } from "./styles";
import successIconFile from "../../assets/icons/check-circle.svg";
import { Loading } from "../../styles/common";

function FormGeolocationComponent() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({});
    const [step, setStep] = useState(1);
    // const [message, setMessage] = useState("");

    function goNextStep(newData) {
        try {
            setLoading(true);
            const userData = { ...data, ...newData };
            setData(userData);
            // setMessage("");
            if (userData) {
                setStep((step) => step + 1);
            } else {
                return;
            }
        } catch (e) {
        } finally {
            setLoading(false);
        }
    }

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
                        {
                            "O pré-cadastro foi realizado com sucesso!\nLogo entraremos em contato.\nEstamos construindo a nossa plataforma! Aguarde!"
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

export default FormGeolocationComponent;
