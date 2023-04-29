import { Select, Option } from "./styles";

function MenuCascata({ status, setState }) {
    return (
        <>
            <Select
                value={status}
                onChange={(e) => {
                    setState(e.target.value);
                }}
            >
                <Option selected value="-1">
                    Status
                </Option>
                <Option value="0">Validados</Option>
                <Option value="1">Esperando</Option>
                <Option value="2">Rejeitados</Option>
            </Select>
        </>
    );
}

export default MenuCascata;
