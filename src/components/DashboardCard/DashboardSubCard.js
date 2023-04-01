import { IoAddCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Container, CardTitle, ImgSubmenu } from "./styles";

function DashboardSubCard({ title, image, alt, ...rest }) {
    return (
        <Container>
            <ImgSubmenu src={image} alt={alt} />
            <CardTitle>{title}</CardTitle>
            <Link {...rest}>
                <IoAddCircle size={14} color="green" />
            </Link>
        </Container>
    );
}

export default DashboardSubCard;
