import Header from "components/Header";
import MenuDash from "components/MenuDash";
import { ThemeProvider } from "styled-components";
import { header } from "../Dashboard/data";
import DashGeolocation from "../DashGeolocation/DashGeolocation";
import { Component, Content, theme, Wrap } from "./styles";

function TeacherDashboard(props) {
    return (
        <ThemeProvider theme={theme}>
            <Component>
                <Header solid {...header} />
                <Wrap>
                    <Content>
                        <Component>
                            <DashGeolocation />
                        </Component>
                        <MenuDash />
                    </Content>
                </Wrap>
            </Component>
        </ThemeProvider>
    );
}

export default TeacherDashboard;
