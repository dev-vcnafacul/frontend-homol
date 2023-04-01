import Header from "components/Header";
import MenuDash from "components/MenuDash";
import HeroImg from "../../assets/images/dashboard/dashboard-hero.svg";
import { Hero, Message, Text } from "../TeacherDashboard/styles";
import { header } from "./data";
import { Body, Wrap } from "./styled";

function Dashboard() {
    return (
        <Wrap>
            <Header solid {...header} />
            <Body>
                <Hero src={HeroImg} alt="Hero acenando para você" />
                <Text>
                    <h1 style={{ "font-weight": "500", padding: "8px 0" }}>Bem vindos a</h1>
                    <h1>VOCÊ NA FACUL!</h1>
                    <Message>Lorem ipsum dolor sit amet, consectetur adipisicing elitr, sed diam nonumy.</Message>
                </Text>
            </Body>
            <MenuDash />
        </Wrap>
    );
}

export default Dashboard;

{
    /* <Wrap>
    <Content>
        <Component>{component}</Component>
    </Content>
</Wrap> */
}
