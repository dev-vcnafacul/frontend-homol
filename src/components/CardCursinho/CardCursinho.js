import { useState } from "react";
import Field from "./Field";
import Status from "./Status";
import Modal from "./Modal";

const { Card, Titulo, Information } = require("./styles");

function CardCursinho({ cursinho }) {
    const [isModalOpen, setIsModalOpen] = useState(true);

    function openModal(modal) {
        setIsModalOpen(modal);
    }
    const Create = cursinho.created_at.split("T")[0].split("-");
    const Update = cursinho.updated_at.split("T")[0].split("-");
    return (
        <>
            <Card onClick={() => openModal(!isModalOpen)}>
                <Titulo>{cursinho.name}</Titulo>
                <Information>
                    <Field field="Estado" information={cursinho.state} />
                    <Field field="Cidade" information={cursinho.city} />
                    <Field field="Data de Cadastro" information={Create[2] + "/" + Create[1] + "/" + Create[0]} />
                    <Field field="Última Atualização" information={Update[2] + "/" + Update[1] + "/" + Update[0]} />
                </Information>
                <Status status={cursinho.status} />
            </Card>
            <Modal handleClose={() => openModal(!isModalOpen)} show={isModalOpen} cursinho={cursinho}>
                Teste
            </Modal>
        </>
    );
}

export default CardCursinho;
