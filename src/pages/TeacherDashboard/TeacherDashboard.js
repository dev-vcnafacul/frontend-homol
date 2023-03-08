import Header from "components/Header";
import { header } from "./data";

import HeroImg from "../../assets/images/dashboard/dashboard-hero.svg";

import { Content, Hero, Text, Wrap, Message } from "./styles";
import MenuDash from "components/MenuDash";

function TeacherDashboard() {
    return (
        <>
            <Header solid {...header} />
            <Wrap>
                <Content>
                    <Hero src={HeroImg} alt="Hero acenando para você" />
                    <Text>
                        <h1 style={{ "font-weight": "500", padding: "8px 0" }}>Bem vindos a</h1>
                        <h1>VOCÊ NA FACUL!</h1>
                        <Message>Lorem ipsum dolor sit amet, consectetur adipisicing elitr, sed diam nonumy.</Message>
                    </Text>
                    <MenuDash />
                </Content>
            </Wrap>
        </>
    );
}

export default TeacherDashboard;
