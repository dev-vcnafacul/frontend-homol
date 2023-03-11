import Header from "components/Header";
import { header } from "./data";

import { Component, Content, Wrap, theme } from "./styles";
import MenuDash from "components/MenuDash";
import Main from "./Main";
import DashGeolocation from "./DashGeolocation";
import { useState } from "react";
import { ThemeProvider } from "styled-components";

const myComponents = {
    0: <Main />,
    1: <DashGeolocation />,
};

function TeacherDashboard(props) {
    const [component, setComponent] = useState(<DashGeolocation />);

    const ChangeComponent = (key) => {
        return myComponents[key];
    };
    return (
        <ThemeProvider theme={theme}>
            <Component>
                <Header solid {...header} />
                <Wrap>
                    <Content>
                        <Component>{component}</Component>
                        <MenuDash />
                    </Content>
                </Wrap>
            </Component>
        </ThemeProvider>
    );
}

export default TeacherDashboard;
