import { Container } from "./styles";

function DashboardCard({ title, image, alt, bg }) {
    return (
        <Container bg={bg}>
            <img src={image} alt={alt} height="36px" />
            <strong>{title}</strong>
        </Container>
    );
}

export default DashboardCard;
