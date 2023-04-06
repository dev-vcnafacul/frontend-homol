import Header from "components/Header";
import { header } from "utils/data";
import { Grid, Body, Menu } from "./styles";
import MenuDash from "components/MenuDash";

function DashBoardDefault({ children }) {
    return (
        <Grid>
            <Header solid {...header} />
            <Body>{children}</Body>
            <Menu>
                <MenuDash />
            </Menu>
        </Grid>
    );
}

export default DashBoardDefault;
