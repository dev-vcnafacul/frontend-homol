import { useState } from "react";

import { Input, InputLabel, FormField, FormError } from "../atoms";
// import { CheckboxWrapper, CheckboxText } from "./styles";
import { Description, LinkLogin, SubmitBtn } from "./styles";

function DadosCursinho({ goNextStep }) {
    const [data, setData] = useState({});
    const [errors, setErrors] = useState({});

    const isValidField = (field, value) => {
        if (!value || (typeof value === "string" && value.trim() === "")) {
            setErrors((errors) => {
                return { ...errors, [field]: "*Campo obrigatório" };
            });
            return false;
        } else {
            setErrors((errors) => {
                return { ...errors, [field]: undefined };
            });
            return true;
        }
    };

    function handleForm(e) {
        e.preventDefault();
        let validate = true;
        const fields = ["courseName", "courseType"];
        fields.forEach((field) => {
            if (!isValidField(field, data[field])) validate = false;
        });

        if (validate) goNextStep(data);
    }

    return (
        <>
            <form onSubmit={handleForm}>
                <FormField>
                    <InputLabel htmlFor="courseName">Nome do cursinho</InputLabel>
                    <Input
                        id="courseName"
                        error={errors.courseName}
                        type="text"
                        onChange={(e) => {
                            setData({ ...data, courseName: e.target.value });
                            isValidField("courseName", e.target.value);
                        }}
                        value={data.courseName ? data.courseName : ""}
                    />
                    <FormError>{errors.courseName}</FormError>
                </FormField>

                <FormField>
                    <InputLabel htmlFor="courseType">Tipo de cursinho</InputLabel>
                    <Input
                        as="select"
                        arrow={true}
                        id="courseType"
                        error={errors.courseType}
                        onChange={(e) => {
                            setData({ ...data, courseType: e.target.value });
                            isValidField("courseType", e.target.value);
                        }}
                        value={data.courseType ? data.courseType : ""}
                    >
                        <option value=""></option>
                        <option value="Gratuito">Gratuito</option>
                        <option value="Sem_fins_Lucrativos">Sem fins lucrativos</option>
                        <option value="Outros">Outros...</option>
                    </Input>
                    <FormError>{errors.courseType}</FormError>
                </FormField>
                <SubmitBtn as="input" type="submit" value="Continuar" />
            </form>
        </>
    );
}

export default DadosCursinho;
