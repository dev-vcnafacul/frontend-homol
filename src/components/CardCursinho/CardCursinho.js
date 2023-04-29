import { useEffect, useState } from "react";
import Field from "./Field";
import Status from "./Status";
import Modal from "./Modal";

const { Card, Titulo, Information } = require("./styles");

function CardCursinho({ cursinho }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [status, setStatus] = useState(cursinho.status);
    const [geo, setGeo] = useState(cursinho);
    function openModal(modal) {
        setIsModalOpen(modal);
    }
    const Create = geo.created_at.split("T")[0].split("-");
    const Update = geo.updated_at.split("T")[0].split("-");

    useEffect(() => {}, [status, geo]);

    return (
        <>
            <Card onClick={() => openModal(!isModalOpen)}>
                <Titulo>{geo.name}</Titulo>
                <Information>
                    <Field field="Estado" information={geo.state} />
                    <Field field="Cidade" information={geo.city} />
                    <Field field="Data de Cadastro" information={Create[2] + "/" + Create[1] + "/" + Create[0]} />
                    <Field field="Última Atualização" information={Update[2] + "/" + Update[1] + "/" + Update[0]} />
                </Information>
                <Status status={status} />
            </Card>
            <Modal
                handleClose={() => openModal(!isModalOpen)}
                show={isModalOpen}
                cursinho={geo}
                status={status}
                setStatus={setStatus}
                setGeo={setGeo}
            >
                Teste
            </Modal>
        </>
    );
}

export default CardCursinho;
