import Header from "components/Header";
import MenuDash from "components/MenuDash";
import { ThemeProvider } from "styled-components";
import { header } from "../Dashboard/data";
import DashGeolocation from "../DashGeolocation/DashGeolocation";
import { Menu, Body, theme, Grid } from "./styles";

function TeacherDashboard(props) {
    return (
        <ThemeProvider theme={theme}>
            <Grid>
                <Header solid {...header} />
                <Body>
                    <DashGeolocation />
                </Body>
                <Menu>
                    <MenuDash />
                </Menu>
            </Grid>
        </ThemeProvider>
    );
}

export default TeacherDashboard;
