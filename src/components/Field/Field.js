import { FormField, InputLabel, Input, FormError } from "components/atoms";

function Field({ id, label, type, error, value, children, onChange, onBlur, className }) {
    return (
        <FormField className={className}>
            <InputLabel htmlFor={id}>{label}</InputLabel>
            <Input
                as={type === "select" ? "select" : "input"}
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                height={"50%"}
                min_width={"5000px"}
            >
                {children}
            </Input>
            <FormError>{error}</FormError>
        </FormField>
    );
}

export default Field;
