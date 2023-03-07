import Header from "components/Header";
import { header } from "../TeacherDashboard/data";
import { Body } from "./styles";

function Dash(props) {
    return (
        <Body>
            <Header solid {...header} />
            {props.children}
        </Body>
    );
}

export default Dash;
