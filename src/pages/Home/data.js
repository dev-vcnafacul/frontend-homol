import HeroImg1 from "../../assets/images/home/hero-img-1.png";
import HeroBackgroundImg1 from "../../assets/images/home/about-us-background.png";

const data = {
    hero: {
        slides: [
            {
                id: "1",
                title: "Nossa missão é ver VOCÊ NA FACUL!",
                subtitle:
                    "Nós queremos proporcionar a você a oportunidade de conhecer seus direitos e continuar seus estudos.",
                links: [
                    {
                        id: "1",
                        text: "Entre na plataforma",
                        link: "#",
                    },
                    {
                        id: "2",
                        text: "Busque um cursinho",
                        link: "#",
                    },
                ],
                background_image: HeroBackgroundImg1,
                image: HeroImg1,
            },
            {
                id: "2",
                title: "Você que já fez ou faz FACUL pode ajudar!",
                subtitle: "Conectamos os Alunos a uma rede de Professores de todas as áreas que querem contribuir.",
                links: [
                    {
                        id: "1",
                        text: "Seja um Professor",
                        link: "#",
                    },
                ],
                background_image: HeroBackgroundImg1,
                image: HeroImg1,
            },
            {
                id: "3",
                title: "Você conhece um Cursinho Popular?",
                subtitle: "Queremos facilitar a busca por Cursinhos Populares que cabem no bolso dos Alunos.",
                links: [
                    {
                        id: "1",
                        text: "Cadastre um cursinho",
                        link: "#",
                    },
                ],
                background_image: HeroBackgroundImg1,
                image: HeroImg1,
            },
            {
                id: "4",
                title: "Empresas também podem participar!",
                subtitle: "Qualquer ajuda é muito bem-vinda! Saiba como sua empresa pode contribuir para o projeto.",
                links: [
                    {
                        id: "1",
                        text: "Entre em contato",
                        link: "#",
                    },
                ],
                background_image: HeroBackgroundImg1,
                image: HeroImg1,
            },
        ],
    },
    header: {
        homeLink: "/",
        itemsMenu: [
            { name: "Quem Somos", link: "/" },
            { name: "Localize um Cursinho", link: "/" },
            { name: "Apoiadores", link: "/" },
            { name: "Blog", link: "/" },
        ],
        signInLink: "/",
        signUpLink: "/",
        socialLinks: {
            facebook: "/",
            twitter: "/",
            linkedin: "/",
            instagram: "/",
        },
    },
    map: {
        markers: [
            {
                name: "Cursinho Teste 1",
                latitude: -15.7745457,
                longitude: -48.3575684,
                address: "Rua Major José Inácio, 1985. CEP 13560-160. São Carlos - SP.",
            },
            {
                name: "Cursinho Teste 2",
                latitude: -22.0154,
                longitude: -47.8911,
                address: "Rua Major José Inácio, 1985. CEP 13560-160. São Carlos - SP.",
            },
            {
                name: "Cursinho Teste 3",
                latitude: -23.5489,
                longitude: -46.6388,
                address: "Rua Major José Inácio, 1985. CEP 13560-160. São Carlos - SP.",
            },
        ],
        ctaLink: "/",
    },
};

export default data;
