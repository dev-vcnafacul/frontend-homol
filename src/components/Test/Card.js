//import { CardTitle } from "components/DashboardCard/styles";
import {
    Title,
    Wrap,
    Content1,
    ButtonStart,
    RalewayBold35,
    RalewayRegular20,
    Montserrat18,
    Montserrat16,
    CardContainer,
    CardIcon,
    CardTitle,
    CardDescription,
    CardButton,
} from "./styles";

export function Card({ icon, title, description, color, buttonText }) {
    return (
        <>
            <CardContainer color={color}>
                <CardIcon src={icon} color={color} />
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
                <CardButton>
                    <ButtonStart color={color}>{buttonText}</ButtonStart>
                </CardButton>
            </CardContainer>
        </>
    );
}

export default Card;
