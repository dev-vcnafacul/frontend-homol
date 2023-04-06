import CardCursinho from "components/CardCursinho/index";
import { useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { Content, Text, Component } from "./styles";
import MenuCascata from "components/MenuCascata";
import Modal from "./Modal";
import MenuDash from "components/MenuDash";

function DashGeolocation() {
    const [cursinhos, setCursinhos] = useState([]);
    const [status, setStatus] = useState(-1);
    const userToken = useSelector((state) => state.auth.token);
    const [cursinhoSelecionado, setCursinhoSelecionado] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);

    const getCursinhos = useCallback(async (status) => {
        try {
            const url = `${process.env.REACT_APP_BASE_URL}/listallgeolocation/page=0&quantity=10&status=${status}`;
            console.log(url);
            const res = await fetch(url);
            // eslint-disable-next-line no-undef
            const reader = res.body.pipeThrough(new TextDecoderStream()).getReader();
            while (true) {
                const { value, done } = await reader.read();
                if (done) break;
                setCursinhos(JSON.parse(value));
                CarregaCursinho();
            }
        } catch {
            setCursinhos([]);
        }
    }, []);

    const CarregaCursinho = () => {
        if (cursinhos.length > 0) {
            return (
                <Content>
                    {cursinhos.map((cursinho) => (
                        <CardCursinho
                            key={cursinho.id}
                            cursinho={cursinho}
                            setCursinhoSelecionado={setCursinhoSelecionado}
                            setIsModalOpen={setIsModalOpen}
                        />
                    ))}
                </Content>
            );
        }
    };

    function ModalComponent() {
        if (isModalOpen && cursinhoSelecionado) {
            return (
                <Modal
                    handleClose={() => setIsModalOpen(!isModalOpen)}
                    show={isModalOpen}
                    cursinho={cursinhoSelecionado}
                >
                    Teste
                </Modal>
            );
        }
    }

    useEffect(() => {
        getCursinhos(status);
    }, [status, getCursinhos]);

    return (
        <>
            <Component>
                <Text>Validação Localiza Cursinho</Text>
                <MenuCascata status={status} setState={setStatus} />
                {CarregaCursinho()}
                {ModalComponent()}
            </Component>
            <MenuDash />
        </>
    );
}

export default DashGeolocation;
