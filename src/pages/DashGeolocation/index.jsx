import CardCursinho from "components/CardCursinho/index";
import Header from "components/Header";
import MenuDash from "components/MenuDash";
import { header } from "pages/Dashboard/data";
import { Wrap } from "pages/Dashboard/styled";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Content, Text } from "./styles";

const url = `${process.env.REACT_APP_BASE_URL}/geolocations`;

function DashGeolocation() {
    const [cursinhos, setCursinhos] = useState([]);
    const [status, setStatus] = useState("Validados");
    const userToken = useSelector((state) => state.auth.token);

    const getCursinhos = useCallback(async () => {
        const res = await fetch(url);
        // eslint-disable-next-line no-undef
        const reader = res.body.pipeThrough(new TextDecoderStream()).getReader();
        while (true) {
            const { value, done } = await reader.read();
            if (done) break;
            setCursinhos(JSON.parse(value));
        }
    }, []);

    useEffect(() => {
        getCursinhos();
    }, [getCursinhos]);

    return (
        <Wrap>
            <Header solid {...header} />
            <div>
                <Text>Validação Localiza Cursinho</Text>
                <Content>
                    {cursinhos.map((cursinho) => (
                        <CardCursinho key={cursinho.id} cursinho={cursinho} />
                    ))}
                </Content>
            </div>
            <MenuDash />
        </Wrap>
    );
}

export default DashGeolocation;
