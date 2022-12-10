import Header from "components/Header";
import { header } from "pages/Home/data";

import DashboardCard from "../../components/DashboardCard";
import HeroImg from "../../assets/images/dashboard/dashboard-hero.svg";
import BioExatasImg from "../../assets/images/dashboard/bioexatas.svg";
import HumanasImg from "../../assets/images/dashboard/humanas.svg";
import LinguagensImg from "../../assets/images/dashboard/linguagens.svg";

import { Content, Hero, Text, Menu, Wrap, Message } from "./styles";

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
                    <Menu>
                        <DashboardCard bg="marine" title="Linguagens" image={LinguagensImg} alt="Linguagens" />
                        <DashboardCard bg="pink" title="BioExatas" image={BioExatasImg} alt="BioExatas" />
                        <DashboardCard bg="lightGreen" title="Humanas" image={HumanasImg} alt="Humanas" />
                    </Menu>
                </Content>
            </Wrap>
        </>
    );
}

export default TeacherDashboard;
