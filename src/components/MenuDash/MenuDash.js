import DashboardCard from "../../components/DashboardCard";
import BioExatasImg from "../../assets/images/dashboard/bioexatas.svg";
import HumanasImg from "../../assets/images/dashboard/humanas.svg";
import LinguagensImg from "../../assets/images/dashboard/linguagens.svg";
import Accordion from "components/Accordion";
import DashboardSubCard from "components/DashboardCard/DashboardSubCard";
import { Menu } from "./styles";

const dashboardCardList = [
    {
        bg: "marine",
        title: "Linguagens",
        image: LinguagensImg,
        alt: "Linguagens",
        subMenuList: [
            { icon: LinguagensImg, alt: "escrevendo", text: "LPT*", action: () => {} },
            { icon: LinguagensImg, alt: "abc", text: "Gramática", action: () => {} },
            { icon: LinguagensImg, alt: "livro", text: "Literatura", action: () => {} },
            { icon: LinguagensImg, alt: "balão de fala retangular", text: "Inglês", action: () => {} },
            { icon: LinguagensImg, alt: "balão de fala redondo", text: "Espanhol", action: () => {} },
        ],
    },
    {
        bg: "pink",
        title: "BioExatas",
        image: BioExatasImg,
        alt: "BioExatas",
        subMenuList: [
            { icon: BioExatasImg, alt: "molécula de DNA", text: "Biologia", action: () => {} },
            { icon: BioExatasImg, alt: "risco biológico", text: "Física", action: () => {} },
            { icon: BioExatasImg, alt: "calculadora", text: "Matemática", action: () => {} },
            { icon: BioExatasImg, alt: "dinheiro", text: "Financeira", action: () => {} },
        ],
    },
    {
        bg: "lightGreen",
        title: "Humanas",
        image: HumanasImg,
        alt: "Humanas",
        subMenuList: [
            { icon: HumanasImg, alt: "relógio", text: "história", action: () => {} },
            { icon: HumanasImg, alt: "mapa", text: "geografia", action: () => {} },
            { icon: HumanasImg, alt: "pessoas", text: "filosofia", action: () => {} },
            { icon: HumanasImg, alt: "pessoas", text: "sociologia", action: () => {} },
        ],
    },
    {
        bg: "orange",
        title: "Admin",
        image: HumanasImg,
        alt: "Admin",
        subMenuList: [
            { icon: HumanasImg, alt: "check mapa", text: "Validação LC", action: () => {} },
            { icon: HumanasImg, alt: "check", text: "Permissões", action: () => {} },
        ],
    },
];

function MenuDash() {
    return (
        <Menu>
            {dashboardCardList.map((dashcard) => (
                <Accordion
                    key={dashcard.title}
                    titleClosed={
                        <DashboardCard
                            bg={dashcard.bg}
                            title={dashcard.title}
                            image={dashcard.image}
                            alt={dashcard.alt}
                        />
                    }
                    titleOpened={
                        <DashboardCard
                            isOpened
                            bg={dashcard.bg}
                            title={dashcard.title}
                            image={dashcard.image}
                            alt={dashcard.alt}
                        />
                    }
                >
                    {dashcard.subMenuList.map((item) => (
                        <DashboardSubCard
                            key={item.text}
                            title={item.text}
                            image={item.icon}
                            alt={item.alt}
                            action={item.action}
                        />
                    ))}
                </Accordion>
            ))}
        </Menu>
    );
}

export default MenuDash;
