import { useState } from "react";

import { Input, InputLabel, FormField, FormError } from "../atoms";
// import { CheckboxWrapper, CheckboxText } from "./styles";
import { Description, LinkLogin, SubmitBtn } from "./styles";

function EnderecoCursinho({ goNextStep }) {
    const [data, setData] = useState({});
    const [errors, setErrors] = useState({});

    const invalidCEP = (value) => {
        if (value.length < 9) {
            return "Digite o CEP no formato XXXXX-XXX";
        }
        // const cep = value.substring(0, 2); formatação do cep?
        let regex = /[0-9]{5}-[\d]{3}/;
        if (regex.test(value)) {
            return null; //Não entendi porque retornar null some com o campo
        } else {
            return "O número digitado é maior que o código de CEP"; //É preciso limitar o número máximo de caracteres que podem ser inseridos nesse campo
        }
    };

    const isValidField = (field, value) => {
        if (!value || (typeof value === "string" && value.trim() === "")) {
            setErrors((errors) => {
                return { ...errors, [field]: "*Campo obrigatório" };
            });
            return false;
        } else if (field === "cep" && invalidCEP(value)) {
            //Não entendi por que invalidCEP() retornar false o ReactJS ainda entra nesse bloco de código
            setErrors((errors) => {
                return { ...errors, [field]: "*CEP inválido: " + invalidCEP(value) };
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
        const fields = ["cep", "courseStreet", "courseNumber", "courseNeighborhood", "courseCity", "courseState"];
        fields.forEach((field) => {
            if (!isValidField(field, data[field])) validate = false;
        });

        if (validate) goNextStep(data);
    }

    return (
        <>
            <form onSubmit={handleForm}>
                <FormField>
                    <InputLabel htmlFor="cep">CEP</InputLabel>
                    <Input
                        id="cep"
                        error={errors.cep}
                        type="text"
                        onChange={(e) => {
                            setData({ ...data, cep: e.target.value });
                            isValidField("cep", e.target.value);
                        }}
                        value={data.cep ? data.cep : ""}
                    />
                    <FormError>{errors.cep}</FormError>
                </FormField>

                <FormField>
                    <InputLabel htmlFor="courseStreet">Logradouro</InputLabel>
                    <Input
                        id="courseStreet"
                        error={errors.courseStreet}
                        type="text"
                        onChange={(e) => {
                            setData({ ...data, courseStreet: e.target.value });
                            isValidField("courseStreet", e.target.value);
                        }}
                        value={data.courseStreet ? data.courseStreet : ""}
                    />
                    <FormError>{errors.courseStreet}</FormError>
                </FormField>

                <FormField>
                    <InputLabel htmlFor="courseNumber">Número</InputLabel>
                    <Input
                        id="courseNumber"
                        error={errors.courseNumber}
                        type="text"
                        onChange={(e) => {
                            setData({ ...data, courseNumber: e.target.value });
                            isValidField("courseNumber", e.target.value);
                        }}
                        value={data.courseNumber ? data.courseNumber : ""}
                    />
                    <FormError>{errors.courseNumber}</FormError>
                </FormField>

                <FormField>
                    <InputLabel htmlFor="courseAddress">Complemento</InputLabel>
                    <Input
                        id="courseAddress"
                        error={errors.courseAddress}
                        type="text"
                        onChange={(e) => {
                            setData({ ...data, courseAddress: e.target.value });
                            // isValidField("courseAddress", e.target.value);
                        }}
                        value={data.courseAddress ? data.courseAddress : ""}
                    />
                </FormField>

                <FormField>
                    <InputLabel htmlFor="courseNeighborhood">Bairro</InputLabel>
                    <Input
                        id="courseNeighborhood"
                        error={errors.courseNeighborhood}
                        type="text"
                        onChange={(e) => {
                            setData({ ...data, courseNeighborhood: e.target.value });
                            isValidField("courseNeighborhood", e.target.value);
                        }}
                        value={data.courseNeighborhood ? data.courseNeighborhood : ""}
                    />
                    <FormError>{errors.courseNeighborhood}</FormError>
                </FormField>

                <FormField>
                    <InputLabel htmlFor="courseCity">Município</InputLabel>
                    <Input
                        id="courseCity"
                        error={errors.courseCity}
                        type="text"
                        onChange={(e) => {
                            setData({ ...data, courseCity: e.target.value });
                            isValidField("courseCity", e.target.value);
                        }}
                        value={data.courseCity ? data.courseCity : ""}
                    />
                    <FormError>{errors.courseCity}</FormError>
                </FormField>

                <FormField>
                    <InputLabel htmlFor="courseState">Estado</InputLabel>
                    <Input
                        as="select"
                        arrow={true}
                        id="courseState"
                        error={errors.courseState}
                        onChange={(e) => {
                            setData({ ...data, courseState: e.target.value });
                            isValidField("courseState", e.target.value);
                        }}
                        value={data.courseState ? data.courseState : ""}
                    >
                        <option value=""></option>
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                    </Input>
                    <FormError>{errors.courseState}</FormError>
                </FormField>
                <SubmitBtn as="input" type="submit" value="Continuar" />
            </form>
        </>
    );
}

export default EnderecoCursinho;
