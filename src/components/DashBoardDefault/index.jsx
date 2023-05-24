import Header from "components/Header";
import { header } from "utils/data";
import { Grid, Body, Menu } from "./styles";
import MenuDash from "components/MenuDash";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";

function DashBoardDefault({ children }) {
    const [permission, setPermission] = useState({});
    const userToken = useSelector((state) => state.auth.token);
    const url = `${process.env.REACT_APP_BASE_URL}/permission`;

    const getPermission = useCallback(async () => {
        try {
            fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${userToken}`,
                },
            })
                .then(async (res) => {
                    // eslint-disable-next-line no-undef
                    const reader = res.body.pipeThrough(new TextDecoderStream()).getReader();
                    let valuereturn;
                    while (true) {
                        const { value, done } = await reader.read();
                        if (done) break;
                        valuereturn = value;
                    }
                    return valuereturn;
                })
                .then((data) => {
                    setPermission(JSON.parse(data));
                });

            // eslint-disable-next-line no-undef
        } catch (err) {
            setPermission({});
        }
    });
    useEffect(() => {
        if (!permission.id) {
            getPermission();
        }
    }, [getPermission, permission.id]);

    return (
        <Grid>
            <Header solid {...header} />
            <Body>{children}</Body>
            <Menu>
                <MenuDash permission={permission} />
            </Menu>
        </Grid>
    );
}

export default DashBoardDefault;
