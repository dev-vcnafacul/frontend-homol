import { useState } from "react";
import Field from "components/Field";
import { SubmitButton } from "./styles";

function AccountForm({ initialValues, onSubmit, className }) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    function handleChangeField(field, value) {
        setValues({ ...values, [field]: value });
    }

    function formatPhoneInput(value) {
        return value
            .replace(/\D/g, "")
            .replace(/(\d{2})(\d)/, "($1) $2")
            .replace(/(\d{4})(\d)/, "$1-$2")
            .replace(/(\d{4})-(\d)(\d{4})/, "$1$2-$3")
            .replace(/(-\d{4})\d+?$/, "$1");
    }

    function formatDateInput(value) {
        return value
            .replace(/\D/g, "")
            .replace(/(\d{2})(\d)/, "$1/$2")
            .replace(/(\d{2})(\d)/, "$1/$2")
            .replace(/(\d{4})\d+?$/, "$1");
    }

    function validateField(field) {
        const value = values[field];
        if (!value || (typeof value === "string" && value.trim() === "")) {
            setErrors((errors) => {
                return { ...errors, [field]: "*Campo obrigatório" };
            });
            return false;
        } else if (field === "nascimento" && value.length < 10) {
            setErrors((errors) => {
                return { ...errors, [field]: "*Data inválida" };
            });
            return false;
        } else if (field === "telefone" && value.length < 14) {
            setErrors((errors) => {
                return { ...errors, [field]: "*Telefone inválido" };
            });
            return false;
        } else {
            setErrors((errors) => {
                return { ...errors, [field]: undefined };
            });
            return true;
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        let validate = true;
        const fields = ["email", "nome", "sobrenome", "genero", "nascimento", "telefone", "estado", "cidade"];
        fields.forEach((field) => {
            if (!validateField(field)) validate = false;
        });

        if (validate) onSubmit(values);
    }

    return (
        <form onSubmit={handleSubmit} noValidate className={className}>
            <Field
                id="email"
                type="email"
                label="E-mail"
                value={values.email || ""}
                error={errors.email}
                onChange={(e) => handleChangeField("email", e.target.value)}
                onBlur={() => validateField("email")}
            />
            <Field
                id="nome"
                type="text"
                label="Nome"
                value={values.nome || ""}
                error={errors.nome}
                onChange={(e) => handleChangeField("nome", e.target.value)}
                onBlur={() => validateField("nome")}
            />
            <Field
                id="sobrenome"
                type="text"
                label="Sobrenome"
                value={values.sobrenome || ""}
                error={errors.sobrenome}
                onChange={(e) => handleChangeField("sobrenome", e.target.value)}
                onBlur={() => validateField("sobrenome")}
            />
            <Field
                id="genero"
                type="select"
                label="Gênero"
                value={values.genero || ""}
                error={errors.genero}
                onChange={(e) => handleChangeField("genero", e.target.value)}
                onBlur={() => validateField("genero")}
            >
                <option value=""></option>
                <option value="Feminino">Feminino</option>
                <option value="Masculino">Masculino</option>
                <option value="Outro">Outro</option>
            </Field>
            <Field
                id="nascimento"
                type="tel"
                label="Data de Nascimento"
                value={values.nascimento || ""}
                error={errors.nascimento}
                onChange={(e) => handleChangeField("nascimento", formatDateInput(e.target.value))}
                onBlur={() => validateField("nascimento")}
            />
            <Field
                id="telefone"
                type="tel"
                label="Telefone"
                value={values.telefone || ""}
                error={errors.telefone}
                onChange={(e) => handleChangeField("telefone", formatPhoneInput(e.target.value))}
                onBlur={() => validateField("telefone")}
            />
            <Field
                id="estado"
                type="select"
                label="Estado"
                value={values.estado || ""}
                error={errors.estado}
                onChange={(e) => handleChangeField("estado", e.target.value)}
                onBlur={() => validateField("estado")}
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
            </Field>
            <Field
                id="cidade"
                type="text"
                label="Cidade"
                value={values.cidade || ""}
                error={errors.cidade}
                onChange={(e) => handleChangeField("cidade", e.target.value)}
                onBlur={() => validateField("cidade")}
            />
            <SubmitButton as="button" type="submit">
                Salvar alterações
            </SubmitButton>
        </form>
    );
}

export default AccountForm;
