import { DASHBOARD_GEOLOCATION } from "routing/paths";

import BioExatasImg from "../../assets/images/dashboard/bioexatas.svg";
import HumanasImg from "../../assets/images/dashboard/humanas.svg";
import LinguagensImg from "../../assets/images/dashboard/linguagens.svg";

export const dashboardCardList = [
    {
        bg: "marine",
        title: "Linguagens",
        image: LinguagensImg,
        alt: "Linguagens",
        subMenuList: [
            { icon: LinguagensImg, alt: "escrevendo", text: "LPT*", link: "#" },
            { icon: LinguagensImg, alt: "abc", text: "Gramática", link: "#" },
            { icon: LinguagensImg, alt: "livro", text: "Literatura", link: "#" },
            { icon: LinguagensImg, alt: "balão de fala retangular", text: "Inglês", link: "#" },
            { icon: LinguagensImg, alt: "balão de fala redondo", text: "Espanhol", link: "#" },
        ],
    },
    {
        bg: "pink",
        title: "BioExatas",
        image: BioExatasImg,
        alt: "BioExatas",
        subMenuList: [
            { icon: BioExatasImg, alt: "molécula de DNA", text: "Biologia", link: "#" },
            { icon: BioExatasImg, alt: "risco biológico", text: "Física", link: "#" },
            { icon: BioExatasImg, alt: "calculadora", text: "Matemática", link: "#" },
            { icon: BioExatasImg, alt: "dinheiro", text: "Financeira", link: "#" },
        ],
    },
    {
        bg: "lightGreen",
        title: "Humanas",
        image: HumanasImg,
        alt: "Humanas",
        subMenuList: [
            { icon: HumanasImg, alt: "relógio", text: "história", link: "#" },
            { icon: HumanasImg, alt: "mapa", text: "geografia", link: "#" },
            { icon: HumanasImg, alt: "pessoas", text: "filosofia", link: "#" },
            { icon: HumanasImg, alt: "pessoas", text: "sociologia", link: "#" },
        ],
    },
    {
        bg: "orange",
        title: "Admin",
        image: HumanasImg,
        alt: "Admin",
        subMenuList: [
            {
                icon: HumanasImg,
                alt: "check mapa",
                text: "Validação LC",
                link: DASHBOARD_GEOLOCATION,
            },
            { icon: HumanasImg, alt: "check", text: "Permissões", link: "#" },
        ],
    },
];
