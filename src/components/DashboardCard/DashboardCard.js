import { IoChevronDownCircleSharp, IoChevronUpCircleSharp } from "react-icons/io5";
import { CardDescription, CardTitle, Card } from "./styles";

function DashboardCard({ title, image, alt, bg, isOpened }) {
    if (isOpened) {
        return (
            <Card bg={bg} isOpened>
                <img src={image} alt={alt} height="48px" />
                <CardDescription>
                    <div style={{ width: "18px" }} />
                    <CardTitle>{title}</CardTitle>
                    <IoChevronUpCircleSharp size={18} />
                </CardDescription>
            </Card>
        );
    } else {
        return (
            <Card bg={bg}>
                <CardDescription>
                    <img src={image} alt={alt} height="16px" />
                    <CardTitle>{title}</CardTitle>
                    <IoChevronDownCircleSharp size={18} />
                </CardDescription>
            </Card>
        );
    }
}

export default DashboardCard;
