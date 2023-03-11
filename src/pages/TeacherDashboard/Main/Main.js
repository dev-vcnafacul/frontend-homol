import { Content } from "./styled";
import { Hero, Text, Message } from "../styles";
import HeroImg from "../../../assets/images/dashboard/dashboard-hero.svg";

function Main() {
    return (
        <Content>
            <Hero src={HeroImg} alt="Hero acenando para você" />
            <Text>
                <h1 style={{ "font-weight": "500", padding: "8px 0" }}>Bem vindos a</h1>
                <h1>VOCÊ NA FACUL!</h1>
                <Message>Lorem ipsum dolor sit amet, consectetur adipisicing elitr, sed diam nonumy.</Message>
            </Text>
        </Content>
    );
}

export default Main;
