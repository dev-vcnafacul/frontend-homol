import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import { Title, Wrap } from "./styles";

function RegisterForm({ className }) {
    const [data, setData] = useState({});
    const [step, setStep] = useState(1);

    function goNextStep(newData) {
        setStep((step) => step + 1);
        setData({ ...data, newData });
    }

    return (
        <Wrap className={className}>
            <Title>Cadastre-se</Title>
            {step === 1 && <Step1 goNextStep={goNextStep} />}
            {step === 2 && <Step2 goNextStep={goNextStep} />}
        </Wrap>
    );
}

export default RegisterForm;
