import Header from "components/Header";
import { header } from "./data";

import { Component, Content, Wrap } from "./styles";
import MenuDash from "components/MenuDash";
import Main from "./Main";
import DashGeolocation from "./DashGeolocation";
import { useState } from "react";

const myComponents = {
    0: <Main />,
    1: <DashGeolocation />,
};

function TeacherDashboard() {
    const [component, setComponent] = useState(<Main />);

    const ChangeComponent = (key) => {
        return myComponents[key];
    };
    return (
        <>
            <Header solid {...header} />
            <Wrap>
                <Content>
                    <Component>{component}</Component>
                    <MenuDash />
                </Content>
            </Wrap>
        </>
    );
}

export default TeacherDashboard;
