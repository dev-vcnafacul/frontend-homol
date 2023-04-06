import { Select } from "./styles";

function MenuCascata({ status, setState }) {
    return (
        <>
            <Select
                value={status}
                onChange={(e) => {
                    setState(e.target.value);
                }}
            >
                <option value="-1">Status</option>
                <option value="0">Validados</option>
                <option value="1">Esperando</option>
                <option value="2">Rejeitados</option>
            </Select>
        </>
    );
}

export default MenuCascata;
