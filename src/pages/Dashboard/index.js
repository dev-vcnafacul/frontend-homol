import HeroImg from "../../assets/images/dashboard/dashboard-hero.svg";
import { Hero, Message, Text } from "../TeacherDashboard/styles";
import { Content } from "./styles";

function Dashboard() {
    return (
        <Content>
            <Hero src={HeroImg} alt="Hero acenando para você" />
            <Text>
                <h1 style={{ fontWeight: "500", padding: "8px 0" }}>Bem vindos a</h1>
                <h1>VOCÊ NA FACUL!</h1>
                <Message>Lorem ipsum dolor sit amet, consectetur adipisicing elitr, sed diam nonumy.</Message>
            </Text>
        </Content>
    );
}

export default Dashboard;
