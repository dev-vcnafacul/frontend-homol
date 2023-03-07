import { useState } from "react";
import Field from "./Field";
import Status from "./Status";
import Modal from "./Modal";

const { Card, Titulo, Information } = require("./styled");

function CardCursinho({ cursinho }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function openModal(modal) {
        setIsModalOpen(modal);
    }
    return (
        <>
            <Card onClick={() => openModal(!isModalOpen)}>
                <Titulo>{cursinho.name}</Titulo>
                <Information>
                    <Field field="Estado" information={cursinho.state} />
                    <Field field="Cidade" information={cursinho.city} />
                    <Field field="Bairro" information={cursinho.neighborhood} />
                    <Field field="Rua" information={cursinho.street + ", " + cursinho.number} />
                    <Field field="Telefone" information={cursinho.phone} />
                </Information>
                <Status status={true} />
            </Card>
            <Modal handleClose={() => openModal(!isModalOpen)} show={isModalOpen}>
                Teste
            </Modal>
        </>
    );
}

export default CardCursinho;
