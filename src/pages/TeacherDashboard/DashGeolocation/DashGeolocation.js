import CardCursinho from "components/CardCursinho/index";
import { useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { Content, Container, Text } from "./styles";

const url = `${process.env.REACT_APP_BASE_URL}/geolocations`;

function DashGeolocation() {
    const [cursinhos, setCursinhos] = useState([]);
    const [status, setStatus] = useState("Validados");
    const userToken = useSelector((state) => state.auth.token);

    const getCursinhos = useCallback(async () => {
        try {
            const res = await fetch(url);
            // eslint-disable-next-line no-undef
            const reader = res.body.pipeThrough(new TextDecoderStream()).getReader();
            while (true) {
                const { value, done } = await reader.read();
                if (done) break;
                setCursinhos(JSON.parse(value));
            }
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        getCursinhos();
    }, [getCursinhos]);

    return (
        <>
            <Text>Validação Localiza Cursinho</Text>
            <Content>
                {cursinhos.map((cursinho) => (
                    <CardCursinho key={cursinho.id} cursinho={cursinho} />
                ))}
            </Content>
        </>
    );
}

export default DashGeolocation;
