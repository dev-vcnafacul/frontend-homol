import DashboardCard from "../../components/DashboardCard";
import BioExatasImg from "../../assets/images/dashboard/bioexatas.svg";
import HumanasImg from "../../assets/images/dashboard/humanas.svg";
import LinguagensImg from "../../assets/images/dashboard/linguagens.svg";
import { Menu } from "./styles";

const listDashboardCard = [
    { bg: "marine", title: "Linguagens", image: LinguagensImg, alt: "Linguagens" },
    { bg: "pink", title: "BioExatas", image: BioExatasImg, alt: "BioExatas" },
    { bg: "lightGreen", title: "Humanas", image: HumanasImg, alt: "Humanas" },
];

function MenuDash() {
    return (
        <Menu>
            {listDashboardCard.map((dashcard) => (
                <DashboardCard bg={dashcard.bg} title={dashcard.title} image={dashcard.image} alt={dashcard.alt} />
            ))}
            ;
        </Menu>
    );
}

export default MenuDash;
