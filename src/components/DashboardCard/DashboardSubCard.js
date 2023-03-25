import { IoAddCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Container, CardTitle, ImgSubmenu } from "./styles";

function DashboardSubCard({ title, image, alt, action }) {
    return (
        <Container>
            <ImgSubmenu src={image} alt={alt} />
            <CardTitle>{title}</CardTitle>
            <Link onClick={action}>
                <IoAddCircle size={14} color="green" />
            </Link>
        </Container>
    );
}

export default DashboardSubCard;
