import { LOGIN_PATH, REGISTER_PATH } from "../../routing/paths";

export const header = {
    homeLink: "/",
    itemsMenu: [
        { name: "DashBoard", link: "/dash-teacher" },
        { name: "Forum", link: "/#" },
        { name: "Simulados", link: "/#" },
        { name: "Redações", link: "/#" },
        { name: "Blog", link: "/#" },
    ],
    signInLink: LOGIN_PATH,
    signUpLink: REGISTER_PATH,
    socialLinks: {
        facebook: "https://www.facebook.com/vcnafacul/",
        linkedin: "https://www.linkedin.com/company/vcnafacul/",
        instagram: "https://www.instagram.com/vcnafacul/",
    },
};
