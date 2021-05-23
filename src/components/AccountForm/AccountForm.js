import { useState } from "react";
import Field from "components/Field";
import { SubmitButton } from "./styles";

function AccountForm({ initialValues, onSubmit }) {
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
        } else if (field === "birthday" && value.length < 10) {
            setErrors((errors) => {
                return { ...errors, [field]: "*Data inválida" };
            });
            return false;
        } else if (field === "phone" && value.length < 15) {
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
        const fields = ["email", "firstName", "lastName", "birthday", "phone", "city"];
        fields.forEach((field) => {
            if (!validateField(field)) validate = false;
        });

        if (validate) onSubmit(values);
    }

    return (
        <form onSubmit={handleSubmit} noValidate>
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
                id="firstName"
                type="text"
                label="Nome"
                value={values.firstName || ""}
                error={errors.firstName}
                onChange={(e) => handleChangeField("firstName", e.target.value)}
                onBlur={() => validateField("firstName")}
            />
            <Field
                id="lastName"
                type="text"
                label="Sobrenome"
                value={values.lastName || ""}
                error={errors.lastName}
                onChange={(e) => handleChangeField("lastName", e.target.value)}
                onBlur={() => validateField("lastName")}
            />
            <Field
                id="birthday"
                type="tel"
                label="Data de Nascimento"
                value={values.birthday || ""}
                error={errors.birthday}
                onChange={(e) => handleChangeField("birthday", formatDateInput(e.target.value))}
                onBlur={() => validateField("birthday")}
            />
            <Field
                id="phone"
                type="tel"
                label="Telefone"
                value={values.phone || ""}
                error={errors.phone}
                onChange={(e) => handleChangeField("phone", formatPhoneInput(e.target.value))}
                onBlur={() => validateField("phone")}
            />
            <Field
                id="city"
                type="text"
                label="Cidade"
                value={values.city || ""}
                error={errors.city}
                onChange={(e) => handleChangeField("city", e.target.value)}
                onBlur={() => validateField("city")}
            />
            <SubmitButton as="button" type="submit">
                Salvar alterações
            </SubmitButton>
        </form>
    );
}

export default AccountForm;
