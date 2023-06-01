import { IoAddCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Container, CardTitle, ImgSubmenu } from "./styles";

function DashboardSubCard({ title, image, alt, ...rest }) {
    return (
        <Link {...rest}>
            <Container>
                <ImgSubmenu src={image} alt={alt} />
                <CardTitle>{title}</CardTitle>
                <IoAddCircle size={14} color="green" />
            </Container>
        </Link>
    );
}

export default DashboardSubCard;
