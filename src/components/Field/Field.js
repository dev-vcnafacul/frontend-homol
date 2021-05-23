import { FormField, InputLabel, Input, FormError } from "components/atoms";

function Field({ id, label, type, error, value, onChange, onBlur, className }) {
    return (
        <FormField className={className}>
            <InputLabel htmlFor={id}>{label}</InputLabel>
            <Input id={id} type={type} value={value} onChange={onChange} onBlur={onBlur} />
            <FormError>{error}</FormError>
        </FormField>
    );
}

export default Field;
