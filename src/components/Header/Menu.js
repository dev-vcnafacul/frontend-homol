import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/icons/linkedin.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icons/twitter.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icons/instagram.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import {
    MenuContainer,
    MenuItem,
    SocialMediaContainer,
    SocialMediaTitle,
    SocialMediaLinks,
    SearchInput,
    SearchContainer,
    SearchButton,
} from "./styles";

function Menu({ items, socialLinks, open, openFunction, className }) {
    return (
        <MenuContainer open={open} className={className}>
            <SearchContainer>
                <SearchInput type="text" placeholder="Você está pesquisando ..." />
                <SearchButton>
                    <SearchIcon />
                </SearchButton>
            </SearchContainer>
            {items.map((item) => {
                return (
                    <MenuItem
                        href={item.link}
                        key={item.name}
                        onClick={(e) => {
                            openFunction(!open);
                        }}
                    >
                        {item.name}
                    </MenuItem>
                );
            })}
            <SocialMediaContainer>
                <SocialMediaTitle>Siga nossas redes sociais</SocialMediaTitle>
                <SocialMediaLinks>
                    {socialLinks?.facebook && (
                        <a href={socialLinks.facebook} target="_blank" rel="noreferrer">
                            <FacebookIcon />
                        </a>
                    )}
                    {socialLinks?.twitter && (
                        <a href={socialLinks.twitter} target="_blank" rel="noreferrer">
                            <TwitterIcon />
                        </a>
                    )}
                    {socialLinks?.linkedin && (
                        <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
                            <LinkedinIcon />
                        </a>
                    )}
                    {socialLinks?.instagram && (
                        <a href={socialLinks.instagram} target="_blank" rel="noreferrer">
                            <InstagramIcon />
                        </a>
                    )}
                </SocialMediaLinks>
            </SocialMediaContainer>
        </MenuContainer>
    );
}

export default Menu;
