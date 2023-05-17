import { useEffect, useState } from "react";
import Field from "./Field";
import Status from "./Status";
import ModalEditGeo from "components/ModalEditGeo";

const { Card, Titulo, Information } = require("./styles");

function CardCursinho({ cursinho }) {
    const Create = cursinho.created_at.split("T")[0].split("-");
    const Update = cursinho.updated_at.split("T")[0].split("-");
    const [openModal, setOpenModal] = useState(false);
    const [geo, setGeo] = useState(cursinho);
    const [status, setStatus] = useState(cursinho.status);

    useEffect(() => {
        console.log("useEffect");
    }, [geo]);

    const openModalFunc = () => setOpenModal(!openModal);

    return (
        <>
            <Card onClick={openModalFunc}>
                <Titulo>{cursinho.name}</Titulo>
                <Information>
                    <Field field="Estado" information={cursinho.state} />
                    <Field field="Cidade" information={cursinho.city} />
                    <Field field="Data de Cadastro" information={Create[2] + "/" + Create[1] + "/" + Create[0]} />
                    <Field field="Última Atualização" information={Update[2] + "/" + Update[1] + "/" + Update[0]} />
                </Information>
                <Status status={status} />
            </Card>
            <ModalEditGeo
                handleClose={openModalFunc}
                show={openModal}
                geo={geo}
                setGeo={setGeo}
                setStatus={setStatus}
            />
        </>
    );
}

export default CardCursinho;
